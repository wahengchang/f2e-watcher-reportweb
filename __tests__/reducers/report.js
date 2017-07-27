import reducer from '../../src/reducers'

import { createStore } from 'redux'
let store = createStore(reducer, {})

describe('github reducer', () => {
  it('should return the initial state', (done) => {
    const _report = [{a: 'a'}];

    store.dispatch({
        type: 'SET_REPORT',
        report: _report
    });    

    expect(
      JSON.stringify(store.getState().report)
    ).toBe(
      JSON.stringify(_report)
    )
    
    done()
  })
})