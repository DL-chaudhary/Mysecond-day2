const express=require('express')
const app=express()
app.set("view engine",'ejs')

app.get('/',(req,res)=>{
    res.render('home.ejs');

})
app.get('/about',(req,res)=>{
    const data={
        name:'kamal',
        countary:'nepal'
    }
    
        const nama={
            age:25,
            collage:'softech'
        }
    
    res.render('test/tess.ejs',{
        haha:data,
        hihi:nama
    });


})
app.get('/home',(req,res)=>{
    res.render("page.ejs");

})



app.use(express,static(public/))

app.listen(3000,()=>{
    console.log('hellow project suru vyo');
})