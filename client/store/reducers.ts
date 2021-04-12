import { combineReducers } from 'redux';
import { globalReducers, IAppState } from '../modules';
import { Reducer } from 'typesafe-actions';

export default function createReducers(
    lazyReducers: {
        [key: string]: Reducer<IAppState, any>;
    } = {}) {

    return combineReducers({ ...globalReducers, ...lazyReducers })
}
