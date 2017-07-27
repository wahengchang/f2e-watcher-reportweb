import {fetchResourceData} from '../../src/utils/resource'

describe('Search for json in ../resources', () => {
  it('should return some json', (done) => {
      
    fetchResourceData().then(
        (result) => done()
    )

  })
})