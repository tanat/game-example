import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { AppStateChangeAction, CorrectKeysAction, CurrentUserChangeAction, GameResetAction, RowChangeAction } from '../../actions';
import Row from '../Row/Row';
import constants from '../../constants';

@connect(state => ({
  currentUser: state.currentUser,
  rows: state.rows,
  correctKeys: state.correctKeys,
  appState: state.appState,
}))
export default class Playground extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentUser: PropTypes.number.isRequired,
    rows: PropTypes.instanceOf(List).isRequired,
    correctKeys: PropTypes.array.isRequired,
    appState: PropTypes.string.isRequired,
  };


  componentWillReceiveProps(newProps) {
    const { rows, currentUser, dispatch } = newProps;
    if (currentUser !== this.props.currentUser) {
      const selectedRows = rows.filter(r => r.user);
      const keys = selectedRows.filter(r => r.user !== currentUser).map(r => r.key);
      const correctKeys = constants.answerOptions.find(o => o.every(key => keys.includes(key)));
      if (correctKeys) {
        dispatch(new CorrectKeysAction(correctKeys));
        dispatch(new AppStateChangeAction(constants.appStates[2]));
      }
      if (selectedRows.count() === 9) {
        dispatch(new AppStateChangeAction(constants.appStates[2]));
      }
    }
  }

  onClick = (row) => {
    const { currentUser, dispatch } = this.props;
    if (row.user || this.gameFinished) {
      return;
    }
    const newRow = Object.assign({}, row, { user: currentUser });
    dispatch(new RowChangeAction(newRow));
    dispatch(new CurrentUserChangeAction(currentUser === 1 ? 2 : 1));
  };

  get rows() {
    const { rows, correctKeys } = this.props;
    return (
      <div className="r-playground--rows">
        {rows.map(row => (
          <Row
            highlighted={correctKeys.includes(row.key)}
            onClick={this.onClick}
            row={row}
            key={row.key}
            disabled={this.gameFinished}
          />
        ))}
      </div>
    );
  }

  get currentUser() {
    const { currentUser } = this.props;
    return (
      <div className="r-playground--user">
        Ходит {constants.userNames[currentUser - 1]}
      </div>
    );
  }

  get gameFinished() {
    return this.props.appState === constants.appStates[2];
  }

  onRestart = () => {
    this.props.dispatch(new GameResetAction());
  };

  render() {
    return (
      <div className="r-playground">
        {this.currentUser}
        {this.rows}
        {this.gameFinished ? (
          <div className="r-playground--restart">
            <button className="r-button" onClick={this.onRestart}>Начать заново</button>
          </div>
        ) : null}
      </div>
    );
  }
}
