const jwt = require('jsonwebtoken');

class TokenService {
  generate(payload) {
    const token = jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {expiresIn: '12h'});
    return token
  }
}

module.exports = new TokenService();