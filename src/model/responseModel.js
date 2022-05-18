class BaseModel {
    constructor(data, message) {
        // 3 兼容处理
        if(typeof data ==='string'){
            this.message = data
            data = null
            message = null
        }
        // 1 传对象
        if(data) {
            this.data = data
        }
        // 2 字符串的情况
        if(message){
            this.message = message
        }
    }
}
// 成功
class SuccessModel extends BaseModel{
    constructor(data,message){
        // 继承父类
        super(data,message)
        // 成功 0
        this.error = 200
        this.msg = '成功'
    }
}
// 失败
class ErrorModel extends BaseModel{
    constructor(data,message){
        // 继承父类
        super(data,message)
        // 失败 0
        this.error = -1
        this.msg = '失败'
    }
}
module.exports = {
    SuccessModel,ErrorModel
}