import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  button: {
    margin: theme.spacing(),
  },
  input: {
    display: 'none',
  },
});

const ButtonForm = ({ classes, name, type }) => {
  return (
    <Button type={type} variant='contained' color='primary' className={classes.button}>
      {name}
    </Button>
  );
};

ButtonForm.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(ButtonForm);
