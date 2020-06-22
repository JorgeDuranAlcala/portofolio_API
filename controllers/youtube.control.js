require('dotenv').config()
const URI = `https://www.googleapis.com/youtube/v3/search?channelId=${process.env.channelId}&maxResults=3&part=snippet&type=video&sort=viewCount&key=${process.env.API_KEY}`
const reqHelper = require('../RequesHelper')


const getDataFromYtb = async (req, res) => {
    try{
       let data = JSON.parse( await reqHelper(URI) );
        return res.status(200).json(data)
    } catch(error) {
        return res.status(400).send({message: 'Bad', error})
    }
}

module.exports = getDataFromYtb