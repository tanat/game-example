import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Playground from '../Playground/Playground';
import constants from '../../constants';
import { AppStateChangeAction } from '../../actions';

@connect(state => ({
  appState: state.appState,
}))
export default class App extends React.Component {
  static propTypes = {
    appState: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  onStart = () => {
    this.props.dispatch(new AppStateChangeAction(constants.appStates[1]));
  };

  get content() {
    const { appState } = this.props;
    if (appState === constants.appStates[0]) {
      return (
        <button className="r-app--start r-button" onClick={this.onStart}>Начать игру</button>
      );
    }
    return <Playground />;
  }
  render() {

    return (
      <div className="r-app">
        {this.content}
      </div>
    );
  }
}
