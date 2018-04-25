import React from 'react';
import PropTypes from 'prop-types';

function getClassName(selectedUser, highlighted, disabled) {
  const classes = ['s-row'];
  if (selectedUser) {
    classes.push('s-row_selected');
    classes.push(selectedUser === 1 ? 's-row_first' : 's-row_second');
  }
  if (highlighted) {
    classes.push('s-row_highlighted');
  }
  if (disabled) {
    classes.push('s-row_disabled');
  }
  return classes.join(' ');
}

const Row = ({ row, onClick, highlighted, disabled }) => (
  <div
    onClick={onClick.bind(this, row)}
    className={getClassName(row.user, highlighted, disabled)}
  >
    {row.key}
  </div>
);

Row.propTypes = {
  row: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Row;
