const ReturnResult = require('@/dto/ReturnResult');
const ReturnEnum = require('@/dto/ReturnEnum');

module.exports = [{
    url: '(.*)',
    method: 'all',
    handler: async (ctx, next) => {
        // 根据路由匹配搜索规则，一个请求url访问时，从设定的路由数组中找到第一个匹配url规则的路由进行处理，不再继续进行匹配
        // 也就是说当请求url在查找完所有的路由数组中都不匹配时，设定一个默认的404是非常有必要的，使程序可控、保持健壮性。
        // console.log('匹配路由遵守第一匹配原则，即命中存在符合url规则的路由后停止继续匹配，404匹配是为程序健壮性考虑而引入，是存放在路由数组中的最后一个路由');
        ctx.body = new ReturnResult(ReturnEnum.NOTFOUNT);
    }
}] 