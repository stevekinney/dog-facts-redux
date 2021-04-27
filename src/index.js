import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from '@twilio-paste/core/theme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Application from './Application';
import { reducer, initialState } from './reducer';

import './index.css';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>,
  document.getElementById('root')
);
