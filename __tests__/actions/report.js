import reportActionCreator from '../../src/actions/report.js'

describe('reportActionCreator', () => {
  it('should create an action for Report', () => {
      const dispatch = jest.fn();    
      
      const _report = [{a: 'a'}];

      reportActionCreator.setReport(_report)(dispatch);

      // console.log(' dispatch: ', dispatch)
      expect(dispatch).toBeCalledWith({ 
        type: 'SET_REPORT',
        report: _report
      });
  })
})
