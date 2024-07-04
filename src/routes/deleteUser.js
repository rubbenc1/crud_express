const data = require('../sql3-data');

module.exports = async (req, res) => {
    const id = parseInt(req.params.id);
    const success = await data.deleteUser(id);
    if(success){
        res.status(204).json(success);
    }else {
        res.status(404).json({message: "User not found"});
    }
}