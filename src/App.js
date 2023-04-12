  import React, { Component } from 'react';
  import './App.css';
  import 'rsuite/dist/rsuite.min.css';
  import Routes from './routes/index.js';
import Globalstyles from './styles/global_styles.js';

  class App extends Component {
  
    render() {
      return (
        <div className="App">
      
        <Routes/>
        <Globalstyles/>
        
        
        </div>
      );
    }
  }

  export default App;