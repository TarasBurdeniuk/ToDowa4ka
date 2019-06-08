import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/Header.style';

const PrimarySearchAppBar = ({ classes }) => {
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6" color="inherit" noWrap>
						<Link className='link-light' to='/'>ToDowa4ka</Link>
					</Typography>
					<div className={classes.grow}/>
					<Button><Link className='link-light' to="/login">Log in</Link></Button>
					<Button><Link className='link-light' to="/register">Register</Link></Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

PrimarySearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
	todoList: store.todoItems.todoList,
});

export default connect(mapStateToProps)(withStyles(styles)(PrimarySearchAppBar));