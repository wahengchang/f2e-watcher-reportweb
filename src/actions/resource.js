import { SET_RESOURCE } from '../config/actionType'

const actionCreator = {
  setResource: (_resource) => {
    return (dispatch, getState) => {
      return dispatch({
        type: SET_RESOURCE,
        resource: _resource,
      })
    }
  }
}

export default actionCreator
