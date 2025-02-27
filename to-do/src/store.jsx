import { combineReducers } from 'redux';

import {configureStore} from '@reduxjs/toolkit'
import Task_reducer from './reducers/Task_reducer';
import Done_reducer from './reducers/Done_reducer';

const rootReducer = combineReducers({
    Task: Task_reducer,
    Done: Done_reducer
})

const store = configureStore({
    reducer:rootReducer
})
export default store