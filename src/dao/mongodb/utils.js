// 获取下一个序列值（id自增）
exports.getNextSequenceValue = async function (sequenceName, db) {
    var sequenceDocument = await db.collection('counters').findOneAndUpdate(
        { id: sequenceName },
        { $inc: {sequence_value: 1}}
    )
    return sequenceDocument.value.sequence_value;
}
