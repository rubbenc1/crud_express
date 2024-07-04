const data = require('../sql3-data')

module.exports = async (req, res) => {
    res.status(200).json(await data.getUsers())
}