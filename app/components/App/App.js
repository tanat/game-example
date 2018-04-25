import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Playground from '../Playground/Playground';
import constants from '../../constants';
import { AppModeChangeAction } from '../../actions';

@connect(state => ({
  appState: state.appState,
}))
export default class App extends React.Component {
  static propTypes = {
    appState: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  onStart = () => {
    this.props.dispatch(new AppModeChangeAction(constants.appModes[1]));
  };

  get content() {
    const { appState } = this.props;
    if (appState === constants.appModes[0]) {
      return (
        <div onClick={this.onStart}>
          Начать игру
        </div>
      );
    } else if (appState === constants.appModes[2]) {
      return (
        <div onClick={this.onStart}>
          Еще раз
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
