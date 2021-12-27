// 定义方式一：当中间件需要外部传递参数时
module.exports = function(args) {
    return async(ctx, next) => {
        console.log('自定义中间件start');
        await next();
        console.log('自定义中间件end');
    } 
}

// 定义方式二：当中间件不需要外部传递参数时
// module.exports = async(ctx, next) => {

// }