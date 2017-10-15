import React, { Component } from 'react'
import {indigo500, indigo700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Squawk from './Squawk.js';
import Squawks from './Squawks.js';

import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo700,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section>
          <AppBar
            title="Transponder"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />

          <main>
            <Squawk />
            <Squawks />
          </main>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App
