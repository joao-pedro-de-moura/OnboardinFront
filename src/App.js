  import React, { Component } from 'react';
  import './App.css';
  import 'rsuite/dist/rsuite.min.css';
  import Routes from './routes/index.js';
  import Globalstyles from './styles/global_styles.js';
  import { Provider } from 'react-redux';
  import store, {persistor} from './store'
  import { PersistGate } from 'redux-persist/integration/react';
  import Header from './components/header';

  class App extends Component {
  
    render() {
      return (
        <div className="App">
        
        <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Header/>
        <Routes/>
        <Globalstyles/>
        </PersistGate>
        </Provider>
        </div>
      );
    }
  }

  export default App;