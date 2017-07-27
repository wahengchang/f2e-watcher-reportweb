import { SET_REPORT } from '../config/actionType'

const actionCreator = {
  setReport: (_report) => {
    return (dispatch, getState) => {
      return dispatch({
        type: SET_REPORT,
        report: _report,
      })
    }
  }
}

export default actionCreator
