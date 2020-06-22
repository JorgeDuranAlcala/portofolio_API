const request = require('request')

const RequestHelper = url => {
    return new Promise( (resolve, reject) => {
            request(url, (error, res, body) => {
                if(!error && res.statusCode === 200) {
                    resolve(body)
                }
                reject(error)
            })
    } )
}

module.exports = RequestHelper