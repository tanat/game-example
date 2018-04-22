import React from 'react';
import Menu from '../Menu/Menu';
import Playground from '../Playground/Playground';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Playground />
        <Menu />
      </div>
    );
  }
}
