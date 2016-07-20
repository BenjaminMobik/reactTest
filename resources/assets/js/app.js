import React from 'react';
import ReactDOM from 'react-dom';
// import Butt from './components/Butt';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NAppBar from './components/NAppBar'
import NavSide from './components/NavSide'
import CalendarPaper from "./components/CalendarPaper"

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <NAppBar />
      <div>
        <CalendarPaper />
      </div>
      <div>
        <NavSide />
      </div>
    </div>
  </MuiThemeProvider>
);
ReactDOM.render(<App />, document.getElementById('app'))

// import GistBox from './components/GistBox';
//
// ReactDOM.render(<GistBox />, document.getElementById('app'))
