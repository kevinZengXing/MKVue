let fileTxt = `
    module.exports = {
        api : false
    }
`

require('fs').writeFile(require('path').join(__dirname , 'api-conf.js'), fileTxt)