import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';


const Routes = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
const main = document.getElementById('root');
console.log(store);
render(
    <Provider store={store}>
        {Routes}
          
    </Provider>,
    main,
);