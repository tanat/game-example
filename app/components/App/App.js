import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Playground from '../Playground/Playground';
import constants from '../../constants';
import { GameResetAction } from '../../actions';

@connect(state => ({
  appState: state.appState,
}))
export default class App extends React.Component {
  static propTypes = {
    appState: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  onStart = () => {
    this.props.dispatch(new GameResetAction());
  };

  get content() {
    const { appState } = this.props;
    if (appState === constants.appStates[0]) {
      return (
        <div onClick={this.onStart}>
          Начать игру
        </div>
      );
    }
    return null;
  }
  render() {

    return (
      <div>
        {this.content}
        <Playground />
      </div>
    );
  }
}
