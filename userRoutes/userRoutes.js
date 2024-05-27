const url = require('url');
const listUsers = require('./listUsers');
const createUser = require('./createUser');
const getUserById = require('./getUser');
const deleteUser = require('./deleteUser');
const updateUser = require('./updateUser')

const userRoutes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parseUrl.pathname;

    res.setHeader('Content-type', 'application/json');

    if (path === '/users' && method === 'GET'){
        listUsers(req, res);
    }else if(path === '/users' && method === 'POST'){
        createUser(req, res);
    }else if(path.startsWith('/users/') && method === 'GET'){
        getUserById(req, res);
    }else if(path.startsWith('/users/') && method === 'PUT'){
        updateUser(req, res);
    }else if (path.startsWith('/users/') && method === 'DELETE'){
        deleteUser(req, res);
    }else {
        res.writeHead(404);
        res.end(JSON.stringify({message: 'Route not found in users'}))
    }
}

module.exports = userRoutes;