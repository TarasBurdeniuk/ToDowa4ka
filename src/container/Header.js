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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { styles } from '../style/Header.style';

class PrimarySearchAppBar extends React.Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null,
		ring: 0,
	};

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
		console.log('handleProfileMenuOpen');
	};

	handleMenuClose = () => {
		console.log('handleMenuClose');
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
		console.log('handleMobileMenuOpen');
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
		console.log('handleMobileMenuClose');
	};

	render() {
		const { anchorEl, mobileMoreAnchorEl, ring } = this.state;
		const { classes, todoList, searchTodo } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
			</Menu>
		);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMobileMenuClose}>
					<IconButton color="inherit">
						<Badge badgeContent={todoList.length} color="secondary">
							<MailIcon/>
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
				<MenuItem onClick={this.handleMobileMenuClose}>
					<IconButton color="inherit">
						<Badge badgeContent={ring} color="secondary">
							<NotificationsIcon/>
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton color="inherit">
						<AccountCircle/>
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
		);

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
						<div className={classes.sectionDesktop}>
							<IconButton color="inherit">
								<Badge badgeContent={todoList.length} color="secondary">
									<MailIcon/>
								</Badge>
							</IconButton>
							<IconButton
								aria-owns={isMenuOpen ? 'material-appbar' : undefined}
								aria-haspopup="true"
								onClick={this.handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle/>
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
								<MoreIcon/>
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderMenu}
				{renderMobileMenu}
			</div>
		);
	}
}

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