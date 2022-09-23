import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import HomePage from "./movie/infraestructure/page/HomePage";
import store from './movie/infraestructure/store'

const App = () => {
  return (
	  <Provider store={store}>
		  <HomePage/>
	  </Provider>
  );
}

export default App;
