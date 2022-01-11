const ApiError = require('../error/apiError');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if(req.method === "OPTIONS") {
    next();
  }
  try{
    const token = req.headers.authorization.split(' ')[1]; //Bearer afsafasfsaf
    if(!token) {
      throw ApiError.UnauthorizedError();
    }
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decodeToken);
    req.user = decodeToken;
    next()
  } catch (e) {
    throw ApiError.UnauthorizedError();
  }


}