import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import ExpandReducer from './slice/expandSlice'
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        expander : ExpandReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})