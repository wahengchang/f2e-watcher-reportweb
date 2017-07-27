import { combineReducers } from 'redux'
import report from './report'
import resource from './resource'

const reducer = combineReducers({
  report,
  resource
})

export default reducer
