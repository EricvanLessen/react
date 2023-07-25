import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Secret from './components/Secret.js';
import Callback from './components/Callback.js'
import NotFound from './components/NotFound.js'

//function App() {
class App extends Component{
  render() {
    let mainComponent = ""
    switch(this.props.location){
      case "":
        mainComponent = <Main {...this.props}/>;
        break;
      case 'secret':
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props}/>: <NotFound/>;
        break
      case 'callback':
          mainComponent = <Callback/>;
          break
      default:
        mainComponent = <NotFound/>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to React {this.props.name}.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          {mainComponent}
      </div>
    );
  }
}

export default App;
