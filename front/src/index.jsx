import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Main from './containers/main'
import  store  from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route to='/' component={Main} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'))
