class ReturnEnum{
    static SUCCESS = new ReturnEnum(2000, 'success');
    static SUCCESSWITHMESSAGE = new ReturnEnum(2001, 'success with message');
    static PARAMSERROR = new ReturnEnum(4000, 'request params error');
    static LOGINERROR = new ReturnEnum(4001, 'username or password error');
    static PARAMSVALIDATEERROR = new ReturnEnum(4002, 'request params validate error');
    static UNAUTHORITY = new ReturnEnum(4010, 'user not unauthority');
    static FORBIDDEN = new ReturnEnum(4030, 'user access forbidden');
    static NOTFOUNT = new ReturnEnum(4040, 'resource not found');
    static ERROR = new ReturnEnum(5000, 'server error');
    
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}

module.exports = ReturnEnum
