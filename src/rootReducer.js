
import { combineReducers } from 'redux'

import { homeReducer } from './pages/reducers';

export default combineReducers({
  home: homeReducer,
})
