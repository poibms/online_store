const ApiError = require('../error/apiError');
const {User, Basket} = require('../models/models');
const bcrypt = require('bcrypt');

class UserService {
  async registration (email, password, role) {
    const checkLogin = await User.findOne({where: {email}});
    if(checkLogin) {
      throw ApiError.BadRequest('User with such login has already been found');
    }
    const hashPassword = await bcrypt.hash(password, 4);
    const user = await User.create({email,role, password: hashPassword})
    const basket = await Basket.create({userId: user.id});

    return user;
  }

  async login(email, password) {
    const user = await User.findOne({where: {email}});
    if(!user) {
      throw ApiError.BadRequest("Пользователь не найден");
    }
    let comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword) {
      throw ApiError.BadRequest("Указан неверный пароль");
    }
    return user;
  }
}

module.exports = new UserService();