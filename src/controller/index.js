const userController = require('./user');
const baseController = require('./base');
const notFountController = require('./404');

module.exports = [...baseController, ...userController, ...notFountController];
