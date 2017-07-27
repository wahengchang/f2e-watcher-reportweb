import { SET_RESOURCE } from '../config/actionType'

const resource = (state = [], action) => {
  switch (action.type) {
    case SET_RESOURCE:
      return Object.assign([], state, action.resource)
    default:
      return state
  }
}

export default resource
