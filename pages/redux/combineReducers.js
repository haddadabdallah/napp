import { combineReducers } from 'redux'
import {reducer} from '../redux/reducers'
import {countreducer} from '../redux/reducers'

export default combineReducers({
    reducer,
    countreducer
  })