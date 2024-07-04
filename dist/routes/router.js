"use strict";
const express = require('express');
const listUsers = require('./listUsers');
const createdUser = require('./createUser');
const getUser = require('./getUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const router = express.Router();
router.get('/', listUsers);
router.post('/', createdUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.use((req, res, next) => {
    res.status(404).json({ message: "Route not found in users" });
});
module.exports = router;
