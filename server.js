const express=require('express');
const path=require('path');

const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/name',(req,res)=>{
    res.send('<h1>姓名:xiaoming</h1>');
});

app.get('/age',(req,res)=>{
    res.send('<h1>年龄:18</h1>');
});

app.listen(3000,()=>{
    console.log('服务器已启动......');
})