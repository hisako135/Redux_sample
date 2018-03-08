import React from 'react';
import {render} from 'react-dom'; // ブラウザ = DOMに表示
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store =  createStore(todoApp)

store.subscribe(() => 
    console.log(store.getState())
)

const $app = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  $app
)