const jwt = require('jsonwebtoken');
const userdb = require('./users.json'); 
const { SECRET_KEY } = require('../env');

const expiresIn = '3h';

function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

function verifyToken(token){
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err);
}

function isAuthenticated({email, password}){
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

module.exports = {
  createToken,
  verifyToken,
  isAuthenticated,
};

