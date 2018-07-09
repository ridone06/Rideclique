import { Platform } from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux';
// import {composeWithDevTools} from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './reducer'

const middleware = applyMiddleware(thunk, promise, logger);

export default createStore(
    RootReducer,
    compose(
        middleware,
        // devTools({
        //     name: Platform.OS,
        //     hostname: "localhost",
        //     port: 5678
        // })
    )
);