  import React, { Component } from 'react';
  import './App.css';
  import 'rsuite/dist/rsuite.min.css';
  import Routes from './routes/index.js';
  import Globalstyles from './styles/global_styles.js';
  import { Provider } from 'react-redux';
  import store from './store'

  class App extends Component {
  
    render() {
      return (
        <div className="App">
        <Provider store={store}>
        <Routes/>
        <Globalstyles/>
        </Provider>
        </div>
      );
    }
  }

  export default App;