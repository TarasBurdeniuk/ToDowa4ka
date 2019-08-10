const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

//Route post api/users
//Register user

router.post('/', [
	check('name', 'Name is required').not().isEmpty(),
	check('email', 'Please include a valid email').isEmail(),
	check('password', 'Please enter a password with 6 or more character').isLength({ min: 6 }),
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { name, email, password } = req.body;

	try {
		//See if user exists
		let user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
		}

		//Get users gravatar
		const avatar = gravatar.url(email, {
			s: '200',
			r: 'pg',
			d: 'mm',
		});

		user = new User({
			name,
			email,
			password,
			avatar,
		});

		//Encrypt password
		const salt = await bcrypt.genSalt(10);

		user.password = await bcrypt.hash(password, salt);

		await user.save();

		//Return jsonwebtoken
		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(payload,
			config.get('jwtSecret'),
			{ expiresIn: 360000 },
			(err, token) => {
				if (err) {
					throw err;
				}
				res.json({ token });
			},
		);

		// Send mail
		const transport = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'dancoffeemen@gmail.com',
				pass: config.get('gmailPass'),
			},
		});

		const body = `<h3>Thank you for registration on ToDowa4ka</h3>`;

		const options = {
			from: '"ToDowa4ka" <todowa4ka.herokuapp.com>', // sender address
			to: `${email}`, // list of receivers
			subject: `Registration`, // Subject line
			text: 'Thank you for registration', // plain text body
			html: body, // html body
		};

		// send mail with defined transport object
		await transport.sendMail(options, (err, info) => {
			if (err) {
				console.error(err);
			} else {
				console.log(`Email send: ${info.response}`);
			}
		});

	} catch (e) {
		console.error(e);
		res.status(500).send('Server error');
	}
});

module.exports = router;
