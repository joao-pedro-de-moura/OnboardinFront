  import React, { Component } from 'react';
  import Login from './pages/login/index.js';
  import './App.css';
  import 'rsuite/dist/rsuite.min.css';
  import CreateGlobalStyle from './styles/global_styles.js'
import Global_styles from './styles/global_styles.js';


  class App extends Component {
    
    render() {
      return (
        <div className="App">
        <Login/>
        <Global_styles/>
        </div>
      );
    }
  }

  export default App;