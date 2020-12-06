import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/Header.style';
import { logout } from '../action/auth';

const PrimarySearchAppBar = ({ classes }) => {
	const dispatch = useDispatch();
	const { isAuthenticated, loading } = useSelector(state => state.auth);

	const authLinks = (
		<Fragment>
			<Button>
				<Link
					className='link-light'
					to="/login"
					onClick={() => dispatch(logout())}
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

export default withStyles(styles)(PrimarySearchAppBar);
