import React from 'react';
import PropTypes from 'prop-types';

function getClassName(selectedUser, highlighted, disabled) {
  const classes = ['r-row'];
  if (selectedUser) {
    classes.push('r-row_selected');
    classes.push(selectedUser === 1 ? 'r-row_first' : 'r-row_second');
  }
  if (highlighted) {
    classes.push('r-row_highlighted');
  }
  if (disabled) {
    classes.push('r-row_disabled');
  }
  return classes.join(' ');
}

const Row = ({ row, onClick, highlighted, disabled }) => (
  <div
    onClick={onClick.bind(this, row)}
    className={getClassName(row.user, highlighted, disabled)}
  >
    {row.user === 1 ? (
      <i className="fa fa-times" aria-hidden="true" />
    ) : null}
    {row.user === 2 ? (
      <i className="fa fa-circle-o" aria-hidden="true" />
    ) : null}
  </div>
);

Row.propTypes = {
  row: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Row;
