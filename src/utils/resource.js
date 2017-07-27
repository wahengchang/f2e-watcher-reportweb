
var fs = require('fs');

var fileList = function fileList(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readdir(filePath, function (err, files) {
            if (err) resolve([]);else resolve(files);
        });
    });
};

var _read = function _read(fullFileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fullFileName, 'utf8', function (err, data) {
            if (err) reject(err)
            else resolve(data);
        });
    });
};

var fetchResourceData = () => {
    return new Promise((resolve, reject)=>{
        const resourcePath = '../resources/'
        return fileList(resourcePath).then(
            (list)=> {
                Promise.all( list.map(fileName => _read(resourcePath + fileName)))
            }
        ).then(
            (readResult)=> resolve(readResult)
        )
    })
}

module.exports = fetchResourceData