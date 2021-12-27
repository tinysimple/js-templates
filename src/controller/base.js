
const ReturnResult = require('../dto/ReturnResult.js');
const ReturnEnum = require('../dto/ReturnEnum.js')

module.exports = [{
    url: '/',
    method: 'get',
    handler: async function(ctx, next) {
        ctx.body = new ReturnResult(ReturnEnum.SUCCESS);
    }
}]
