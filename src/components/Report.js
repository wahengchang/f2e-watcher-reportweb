import React, { PropTypes } from 'react'
import classNames from 'classnames'
import style from './Report.css'
import hiddenText from '../utils/hiddenText.js'

const FileDetailRow = ({file}) => {
  return <div> 
    <span className={classNames(style['fileSize'])}>{file.size/1000 + 'kb'} </span>
    <span className={classNames(style['fileTime'])}>{file.durationTime/1000 + 's'} </span>
    <span className={classNames(style['fileUrl'])}>
      <a href={file.url} >{hiddenText(file.url)}</a>
    </span>
  </div>
}

const FilesDetail = ({files}) => {
  return <span className={classNames(style['tooltiptext'])}>
            {files.map( (file, index) => <FileDetailRow key={index} file={file} />)}
        </span>
}

const ReportRow = ({re, res}) => {
  return <tr>
          <td>
            <a href={re.url} >{re.url}</a>
          </td>
          <td>{re.totalTime/1000 + 's'}</td>
          {/*<td>{re.initTime/1000 + 's'}</td>*/}
          <td>{re.httpResponseTime/1000 + 's'}</td>
          <td  className={classNames(style['tooltip'])}>
              <span className={classNames(style['tooltipTitle'])}>
                {res.files.length + ' files'}
              </span>
              <FilesDetail files={res.files} />
          </td>
          <td>{re.headerJSImageTime/1000 + 's'}</td>
          <td>{re.headerReceivedSize/1000 +'kb'}</td>
          <td>{re.renderingTime/1000 + 's'}</td>
        </tr>

}

const ReportHeader= () => {
  return <tr>
          <th>URL</th>
          <th>Total</th>
          {/*<th>Init</th>*/}
          <th>HTTP Response</th>
          <th>Header JS/Image</th>
          <th>Header </th>
          <th>Header Size</th>
          <th>Rendering</th>
        </tr>
}

/*
Output
{
  url:
  files: [
    url: ,
    size: ,
    durationTime: 
  ]
}
*/
const ParseFileJson = (resource) => {
  const filesData = resource.map( (_res) => {
    const {url} = _res
    const files = _res.data.map(file => {
      const {url, durationTime, bodySize} = file
      return {url, durationTime, size: bodySize}
    })
    return {url,files}
  })

  return filesData
}

const Report = ({report, resource }) => {
  // console.log(' ==== report: ', report)
  const _res = ParseFileJson(resource)
  return (
    <div>
      <div>
        <h1 className={classNames(style['title'])}>
          Web Performance Report
        </h1>
      </div>
      <table className={classNames(style['tftable'])}>
        <tbody>
          <ReportHeader />
          {report.map( (_re, index) => <ReportRow 
            key={index} 
            re={_re} 
            res={_res.filter(__res => __res.url === _re.url)[0]}
          />)}
        </tbody>
      </table>
      {/*<button onClick={onClick}>Click</button>*/}
    </div>
  )
}

Report.propTypes = {
  // onClick: PropTypes.func.isRequired,
  report: PropTypes.array.isRequired,
  resource: PropTypes.array.isRequired
}

export default Report
