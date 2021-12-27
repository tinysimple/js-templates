const DB = require('./mongodb/Db');
const { getNextSequenceValue } = require('./mongodb/utils');
// import { getNextSequenceValue } from './mongodb/utils';

// 集合的名字（等于mysql中的表概念）
const collectName = 'user';
// mongodb 自增表中配置的自增记录名（在集合counters中），根据该记录的值进行id自增
const sequenceName = 'userId';

// 新增记录
module.exports.add = async (user) => {
    const db = await DB.connect();
    user.id = await getNextSequenceValue(sequenceName, db);
    return await db.collection(collectName).insertOne(user);
}

// 根据id查找记录
module.exports.findById = async (userId) => {
    let findOperation = { id: userId };
    const db = await DB.connect();
    const res = await db.collection(collectName).findOne(findOperation);
    return res;
}

// 根据用户名、密码查询记录
module.exports.login = async (username, password) => {
    let findOperation = { username: username, password: password };
    const db = await DB.connect();
    const res = await db.collection(collectName).findOne(findOperation);
    return res;
}