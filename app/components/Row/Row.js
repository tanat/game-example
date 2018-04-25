import React from 'react';
import PropTypes from 'prop-types';

function getClassName(selectedUser) {
  const classes = ['s-row'];
  if (selectedUser) {
    classes.push('s-row_selected');
    classes.push(selectedUser === 1 ? 's-row_first' : 's-row_second');
  }
  return classes.join(' ');
}

const Row = ({ row, onClick }) => (
  <div
    onClick={onClick.bind(this, row)}
    className={getClassName(row.user)}
  >
    {row.key}
  </div>
);

Row.propTypes = {
  row: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Row;
