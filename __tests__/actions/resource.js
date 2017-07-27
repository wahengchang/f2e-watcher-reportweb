import resourceActionCreator from '../../src/actions/resource.js'

describe('resourceActionCreator', () => {
  it('should create an action for resource', () => {
      const dispatch = jest.fn();    
      
      const _resource = [{a: 'a'}];

      resourceActionCreator.setResource(_resource)(dispatch);

      // console.log(' dispatch: ', dispatch)
      expect(dispatch).toBeCalledWith({ 
        type: 'SET_RESOURCE',
        resource: _resource
      });
  })
})
