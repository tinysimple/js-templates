module.exports = {
    // 根据type返回value的值
    getValueByType(value, type) {
        switch(type) {
            case 'number':
                return Number(value);
            case 'null':
                return null;
            case 'undefined':
                return undefined;
            case 'string':
                return '"' + String(value) + '"';
            case 'boolean':
                return Boolean(value);
            default:
                return value;       
        }
    }
}
