import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});


class ButtonForm extends React.Component {
	render() {
		const { classes, name, type } = this.props;

		return (
			<Button
				type={type}
				variant="contained"
				color="primary"
				className={classes.button}
			>
				{name}
			</Button>
		);
	}
}

ButtonForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonForm);