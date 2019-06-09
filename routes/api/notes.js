const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Note = require('../../models/Note');

//route   POST api/notes
//desc    Create a note
//access  Private
router.post('/', [auth, [
	check('text', 'Text is required').not().isEmpty(),
	check('title', 'Title is required').not().isEmpty(),
]], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const newNote = new Note({
			title: req.body.title,
			text: req.body.text,
			user: req.user.id,
		});

		const note = await newNote.save();

		res.json(note);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//route   GET api/notes
//desc    Get all notes
//access  Private
router.get('/', auth, async (req, res) => {
	try {
		const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
		res.json(notes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//route   GET api/notes/:id
//desc    Get note by id
//access  Private
router.get('/:id', auth, async (req, res) => {
	try {
		const note = await Note.find({ user: req.user.id, _id: req.params.id });

		if (!note.length) {
			return res.status(404).json({ msg: 'Note not found' });
		}

		res.json(note);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Note not found' });
		}
		res.status(500).send('Server Error');
	}
});

//route   DELETE api/notes/:id
//desc    Delete a note
//access  Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const note = await Note.findById(req.params.id);

		if (!note) {
			return res.status(404).json({ msg: 'Note not found' });
		}

		//Check user
		if (note.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'User not authorized' });
		}

		await note.remove();
		res.json({ msg: 'Note removed' });
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Note not found' });
		}
		res.status(500).send('Server Error');
	}
});

module.exports = router;