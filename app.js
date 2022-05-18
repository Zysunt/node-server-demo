const querystring = require('querystring')
const handleBlogRoute = require('./src/routes/blog')
const serverHandle = (req,res)=>{
    res.setHeader('Content-Type','application/json')// 设置返回数据的中文乱码,能接受json
    const url = req.url
    req.path = url.split('?')[0]// 地址路径
    req.query = querystring.parse(url.split('?')[1])// 参数
    const blogData = handleBlogRoute(req,res)
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }
    // 异常
    // res.writeHead(404,{'Content-Type':'text/plain'})
    res.writeHead(404,{'Content-Type':'application/json'})
    res.write('小郑写的404!!')
    res.end()
}
module.exports = serverHandle