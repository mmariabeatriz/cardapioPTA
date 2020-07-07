import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';

import { Navbar, Footer, Menu } from './containers';


function App() {
  return (
    <section className="app">
      <Navbar />
      <Menu />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))