const ReturnResult = require('@/dto/ReturnResult');
const ReturnEnum = require('@/dto/ReturnEnum');
const userDao = require('@/dao/user');

// 登录的业务逻辑，写在service层下，供controller层调用
exports.login = async (username, password) => {
    // 业务逻辑代码
    const userInfo = await userDao.login(username, password);
    if (userInfo) {
        return new ReturnResult(ReturnEnum.SUCCESS)
    } else {
        return new ReturnResult(ReturnEnum.LOGINERROR);
    }
}