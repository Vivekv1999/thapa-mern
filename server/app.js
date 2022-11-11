const express=require('express')
const app=express();

const middleware= (req,rez,next)=>{
    console.log('middle ware is runnig');
    next()
}

app.get('/',(req,res)=>{
    res.send("hello world from the server")
})

app.get('/about',middleware,(req,res)=>{
    console.log('heelo abou');
    res.send("msg from about page , about page is this")
})

app.get('/contact',(req,res)=>{
    res.send("msg from contactc page , about page is this")
})

app.listen(3000,()=>{
    console.log('lister is runng');
})