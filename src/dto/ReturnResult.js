const ReturnEnum = require('./ReturnEnum.js')
// 正常返回情况下的返回格式，会被格式化为json字符串
module.exports = class ReturnResult {
    // this.code;
    // this.message;
    // this.data = null;
    constructor(returnEnum, data) {
        if (!(returnEnum instanceof ReturnEnum)) {
            throw new Error('第一个参数必须为ReturnEnum的实例')
        }
        this.code = returnEnum.code;
        this.message = returnEnum.message;
        this.data = data || null;
    }
    setData(data) {
        this.data = data || null;
    }
}