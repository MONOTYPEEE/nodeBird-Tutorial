const http = require('http');
const srv = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.end('Hello, Node!');
});

srv.listen(3065,()=>{
    console.log('서버 굴러간다');
});