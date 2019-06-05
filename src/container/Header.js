import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchTodo } from '../action/searchTodo';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import { styles } from '../style/Header.style';

const PrimarySearchAppBar = ({ classes, todoList, searchTodo }) => {

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6" color="inherit" noWrap>
						ToDowa4ka
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon/>
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							onChange={(e) => {
								searchTodo(todoList, e.target.value);
							}}
							onBlur={(e) => {
								e.target.value = '';
								searchTodo(todoList, e.target.value);
							}}
						/>
					</div>
					<div className={classes.grow}/>
					<IconButton color="inherit">
						<Badge badgeContent={todoList.length} color="secondary">
							<MailIcon/>
						</Badge>
					</IconButton>
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

const mapDispatchToProps = {
	searchTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PrimarySearchAppBar));