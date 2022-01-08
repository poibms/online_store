const ApiError = require('../error/apiError');

class UserControllers {
  async registration(req, res) {

  }
  async login(req, res) {

  }

  async check(req, res, next) {
    const {id} = req.query;
    if(!id) {
      return next(ApiError.badRequest("Не задан id"))
    }
    res.json(id)
  }
}

module.exports = new UserControllers()