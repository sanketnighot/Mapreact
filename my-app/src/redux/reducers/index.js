import {combineReducers} from 'redux';
import {mapReducer, tileReducer} from './mapReducer';

export const reducers = combineReducers({ 
    map: mapReducer,
    tile: tileReducer
});