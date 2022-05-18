const serverHandle = require('../app.js')
const http = require('http')
const PORT = 8000
const server = http.createServer(serverHandle) 
server.listen(PORT,()=>{
    console.log('server runing at 8000...')
})