import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { AppModeChangeAction, CurrentUserChangeAction, RowChangeAction } from '../../actions';
import Row from '../Row/Row';
import constants from '../../constants';

@connect(state => ({
  currentUser: state.currentUser,
  rows: state.rows,
}))
export default class Playground extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentUser: PropTypes.number.isRequired,
    rows: PropTypes.instanceOf(List).isRequired,
  };


  componentWillReceiveProps(newProps) {
    const { rows } = newProps;
    const emptyCount = rows.filter(r => r.user === null).count();
    if (emptyCount === 0) {
      this.props.dispatch(new AppModeChangeAction(constants.appModes[2]));
    }
  }

  onClick = (row) => {
    const { currentUser, dispatch } = this.props;
    if (row.user) {
      return;
    }
    const newRow = Object.assign({}, row, { user: currentUser });
    dispatch(new RowChangeAction(newRow));
    dispatch(new CurrentUserChangeAction(currentUser === 1 ? 2 : 1));
  };

  get rows() {
    const { rows } = this.props;
    return (
      <div>
        {rows.map(row => (
          <Row onClick={this.onClick} row={row} key={row.key} />
        ))}
      </div>
    );
  }

  get currentUser() {
    const { currentUser } = this.props;
    return (
      <div>
        {constants.userNames[currentUser - 1]}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.currentUser}
        {this.rows}
      </div>
    );
  }
}
