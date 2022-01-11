const ApiError = require('../error/apiError');
const userService = require('../service/userService');
const tokenService = require('../service/tokenService');


class UserControllers {
  async registration(req, res, next) {
    try {
      const {email, password, role} = req.body;
      const user = await userService.registration(email, password, role);
      const token = tokenService.generate({id: user.id, email, role: user.role})
      return res.json(token)
    } catch(e) {
      next(e)
    }
  }

  async login(req, res, next) {
    try{
      const {email, password} = req.body;
      const user = await userService.login(email, password);
      const token = tokenService.generate({id: user.id, email, role: user.role});
      return res.json({token})
    } catch(e) {
      next(e)
    }
  }

  async check(req, res, next) {
   const token = tokenService.generate({id: req.user.id, email: req.user.email, role: req.user.role})
    return res.json({token});
  }
}

module.exports = new UserControllers()