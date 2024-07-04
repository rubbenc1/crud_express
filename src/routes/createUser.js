const data = require('../sql3-data');


module.exports = async (req, res) => {
    const {name, age} = req.body;

    if(name && age){
        const user = {name, age: parseInt(age)};
        const createdUser = await data.addUser(user);
        res.status(201).json(createdUser);
    }else {
        res.status(400).json({message: 'Name and age are required'})
    }
};