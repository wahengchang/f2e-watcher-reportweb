import { connect } from 'react-redux'
import Report from './../components/Report'
import reportActionCreator from '../actions/report'
import resourceActionCreator from '../actions/resource'
// import {fetchResourceData} from '../utils/resource'

var _mockReport = require('../../../report.json')
var _mockResource = require('../../../resources.json')

const mapStateToProps = (state, ownProps) => {
  return {
    report: state.report,
    resource: state.resource
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onClick: () => {
    //   dispatch(reportActionCreator.setReport());
    // }
  }
}

const preloadHello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Report)

preloadHello.initState = (store,req,res) => {
    return (dispatch, getState) => {
      return new Promise( (resolve, reject)=> {

        // fetchResourceData().then(
        //   (resourceList) => {
        //     const reportData = _mockReport
        //     dispatch(resourceActionCreator.setResource(resourceList))
        //     dispatch(reportActionCreator.setReport(reportData))
        //     resolve(1)
        //   }
        // )
            const resourceData = _mockResource
            dispatch(resourceActionCreator.setResource(resourceData))
            const reportData = _mockReport
            dispatch(reportActionCreator.setReport(reportData))
            resolve(1)
      })
    }
}

// preloadHello.getInitState = (isServer) => {
//   return (isServer) ? initState : null
// }

export default preloadHello