const data = require('../sql3-data');

module.exports = async (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const success = await data.deleteUser(id);
    if(success){
        res.writeHead(204);
        res.end(JSON.stringify(success));
    }else {
        res.writeHead(404);
        res.end(JSON.stringify({message: "User not found"}));
    }
}