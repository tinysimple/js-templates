const userService = require('@/service/user')

const userUrlPrefix = '/user';

module.exports = [{
    url: userUrlPrefix + '/login',
    method: 'post',
    param: {
        username: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            required: true
        }
    },
    handler: async function(ctx, next) {
        const { username, password } = ctx.body;
        ctx.body = userService.login(username, password);
        // next()
    }
}]