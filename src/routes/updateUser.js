const data = require('../sql3-data');

module.exports = async (req, res) => {
    const id = parseInt(req.params.id, 10 );

    const parsedBody = req.body;
    const updatedData = {};
    for (let key in parsedBody){
        updatedData[key] = key === 'age' ? parseInt(parsedBody[key]) : parsedBody[key];
    };
    const updatedUser = await data.updateUser(id, updatedData);;
    if(updatedUser){
        res.status(200).json(updatedUser);
    }else {
        res.status(404).json({message: 'User not found'});
    }
}