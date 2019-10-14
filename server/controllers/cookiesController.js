const db = require('../../database/database');

const cookieController = {};

/**
 * @description adds a session cookie to the user on successful login
 * @requirements : a owner_id stored inside req.body
 * @optionals : 
 * @body : { res.cookie: {session: ...} }
 */
cookieController.addCookie = (req, res, err) => {

}

module.exports = cookieController;
