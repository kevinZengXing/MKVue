let fileTxt = `
    module.exports = {
        api : true
    }
`
require('fs').writeFile(require('path').join(__dirname , './api-conf.js') , fileTxt)