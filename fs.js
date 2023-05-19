
let fs = require("fs")

// console.log(fs);cls

// fs.writeFile('mycode.txt', "this is my data of node \t", (err)=>{
//     if(err) throw err;
//     console.log('Task Done')
// })

// fs.appendFile('mycode.txt', " code from node FS", (err)=>{
//     if(err) throw err;
//     console.log('file append Done')
// })

// fs.readFile('mycode.txt','UTF-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.readFileSync('mycode.txt','UTF-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.readFile('city.json','UTF-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.readFileSync('city.json','UTF-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// let data = fs.readFileSync('city.json',{encoding:'utf-8', flag:'r'})

// console.log("sync"+data)

// let data1 = fs.readFileSync('mycode.txt',{encoding:'utf-8', flag:'r'})

// console.log("sync"+data1)


// fs.unlink("mycode12.txt", (err)=>{
//     if(err) throw err
//     console.log("file deleted")
// })

fs.unlink("mycode1.txt", (err)=>{
    if(err) throw err
    console.log("file deleted")
})

// fs.rename('mytest.txt','myFile.xml',(err)=>{
//     if(err) throw err
//     console.log('file renamed')
// })















