const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('any kaam ji sir');

})
app.get('/about',(req,res)=>{
    res.send('this is about page');

})
app.get('/home',(req,res)=>{
    res.send("this home page to");

})





app.listen(3000,()=>{
    console.log('hellow project suru vyo');
})