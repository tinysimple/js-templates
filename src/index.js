const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body')
// 应用require别名规则，在package.json中配置具体查找规则
require('module-alias/register');
const CSRF = require('koa-csrf');
const koaStatic = require('koa-static');
const logger = require('koa-logger')
const koaRouterSimple = require('koa-router-simple');
const validator = require('response-validator')
// 本地文件
const allRoutes = require('./controller/index');
const ReturnResult = require('./dto/ReturnResult');
// 项目中自定义的中间件 example
const HelloMiddleware = require('@/middleware/hello');
// 常量
const { PROJECT_NAME } = require('@/utils/constant');

// 实例化koa
const app = new Koa();

app.keys = ['session key', 'csrf example'];
app.use(koaBody());
// app.use(new CSRF());

app.use(logger());

app.use(koaStatic(path.resolve(__dirname, '../', './public/')))

app.use(validator(ReturnResult));

app.use(HelloMiddleware(app));

app.use(koaRouterSimple(allRoutes));

// 集中式错误处理逻辑，可以进行日志记录
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

app.listen(3000, () => {
    console.log(`${PROJECT_NAME}, 访问地址：http://127.0.0.1:3000`)
});
