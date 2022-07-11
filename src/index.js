import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';

import {Provider} from './context/context';

ReactDOM.render(
    <SpeechProvider appId="119bb825-090d-48e2-a3ed-9bd3946e2203" language="en-US">
      <Provider>
      <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);