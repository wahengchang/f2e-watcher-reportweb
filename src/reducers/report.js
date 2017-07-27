import { SET_REPORT } from '../config/actionType'

const report = (state = [], action) => {
  switch (action.type) {
    case SET_REPORT:
      return Object.assign([], state, action.report)
    default:
      return state
  }
}

export default report
