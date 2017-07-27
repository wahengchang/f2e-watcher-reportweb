import reducer from '../../src/reducers'

import { createStore } from 'redux'
let store = createStore(reducer, {})

describe('Resource reducer', () => {
  it('SET_RESOURCE', (done) => {
    const _resource = [{a: 'a'}];

    store.dispatch({
        type: 'SET_RESOURCE',
        resource: _resource
    });    

    expect(
      JSON.stringify(store.getState().resource)
    ).toBe(
      JSON.stringify(_resource)
    )
    
    done()
  })
})