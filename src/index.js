import React from 'react';
import './index.css';
import App from './containers/App';
import store from "./store";
import {createRoot} from 'react-dom/client';

function fancyLog() {
  console.log('%c Rendered with 👉 👉 👇", "background: purple; color: #FFF')
  console.log(store.getState())
}

const render = () => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  fancyLog()
  return root.render(<App />);
};
render()
store.subscribe(render);
