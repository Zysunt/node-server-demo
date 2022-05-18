const {getList} = require('../controllers/blog')
const {SuccessModel} = require('../model/responseModel')
const handleBlogRoute = (req,res)=>{
    const method = req.method
    if(method==='GET' && req.path === '/api/blog/list'){
        const name = req.query.name||''
        const keyword = req.query.keyword||''

        const listData = [{name:'pp',age:20}]//getList(name,keyword)// 数据库查
        return new SuccessModel(listData)// 返回美化后的数据 code，msg
    }
    if(method === 'POST' && req.path ==='/api/blog/list'){
        return new SuccessModel(listData)
    }
}
module.exports = handleBlogRoute