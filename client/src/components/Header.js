import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/Header.style';
import { logout } from '../action/auth';

const PrimarySearchAppBar = ({ classes, auth: { isAuthenticated, loading }, logout }) => {

	const authLinks = (
		<Fragment>
			<Button>
				<Link
					className='link-light'
					to="/login"
					onClick={logout}
				>Log Out</Link>
			</Button>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<Button><Link className='link-light' to="/login">Log In</Link></Button>
			<Button><Link className='link-light' to="/register">Register</Link></Button>
		</Fragment>
	);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6" color="inherit" noWrap>
						<Link className='link-light' to='/'>ToDowa4ka</Link>
					</Typography>
					<div className={classes.grow}/>
					{!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

PrimarySearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
	isAuthenticated: PropTypes.bool,
	loading: PropTypes.bool,
	logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

const mapDispatchToProps = {
	logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PrimarySearchAppBar));