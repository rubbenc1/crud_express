const data = require('../sql3-data');

module.exports = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const success = await data.getUserById(id);
    if(success){
        res.status(200).json(success);
    }else {
        res.status(404).json({message: "User not found"})
    }
}