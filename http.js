let http = require('http')

//req -> what we send to serve(params,queryParams, body)
//res - > what server sends in return
let server = http.createServer((req,res)=>{
     res.write('<h1> this is nodeJs Code Server</h1>')
     res.end()
})
server.listen(5600)


// static api 

// steps to install global packages 
//windows 
// open cmd as admin
// npm i -g nodemon