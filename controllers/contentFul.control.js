const contentful = require("contentful");


const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.accessToken
})

const getContentFullData = async (req, res) => {
    try {
        const { content_type , limit, locales} = req.params
        const locale = (locales === 'default') ? 'en-US' : locales
        const resp =  (limit > 0) ? await client.getEntries({content_type, limit, locale}) : await client.getEntries({content_type, locale})
        
        return res.status(200).json(resp)

      } catch (error) {
        res.status(400).send({message: 'Bad Request', error})
      }
}

const getContentFullDataById = async (req, res) => {
    try {
        const { id, locales } = req.params
        const locale = (locales === 'default') ? 'en-US' : locales
        const resp = await client.getEntry(id, { locale });
        
        return res.status(200).json(resp)

      } catch (error) {
        res.status(400).send({message: 'Bad Request', error})
      }
}


module.exports = { getContentFullData, getContentFullDataById }