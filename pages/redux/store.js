import {createStore} from 'redux'
import {reducer} from '../redux/reducers'
import combineReducers from '../redux/combineReducers'

export let store = createStore(combineReducers)

