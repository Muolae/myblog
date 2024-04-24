const express=require("express");
console.log(123)
const mysql=require('mysql')

const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'108913lc',
    database:'myblog'
})
//接口文件配置
const app=express();
app.use(express.urlencoded({extended:false}))

const coes=require('cors')
app.use(coes())
app.use(express.static('static'))
app.get('/',(req,res)=>{
    console.log(222)
    //res.sendFile(`${__dirname}/htmlfile/Yunnote/index.html`)
    res.redirect(`/login.html`)

})
//登陆账号查询
app.get('/login',(req,res)=>{
    
    //console.log(req.query)
    db.query("SELECT uname FROM user WHERE userid = ? AND passwd=?",[req.query.userid,req.query.pwd] ,(err,results)=>{
    if(err) return console.log(err)
    else console.log(results)
    res.send(results)
})
})
//博客查询
app.get('/blog',(req,res)=>{
    
    //console.log(req.query)
    db.query("SELECT * FROM blog",[] ,(err,results)=>{
    if(err) return console.log(err)
    else console.log(results)
    res.send(results)
})
})
//个人博客查询
app.get('/blog',(req,res)=>{
    
    //console.log(req.query)
    db.query("SELECT * FROM blog where userid=?",[req.query.userid] ,(err,results)=>{
    if(err) return console.log(err)
    else console.log(results)
    res.send(results)
})
})
//评论查询
app.get('/comments',(req,res)=>{
    
    //console.log(req.query)
    db.query("SELECT * FROM comments where blogid=?",[req.query.blogid] ,(err,results)=>{
    if(err) return console.log(err)
    else console.log(results)
    res.send(results)
    })
})
//新建博客
app.post("/newblog",(req,res)=>{
    db.query("INSERT INTO comments(blogid,username,content) VALUES(?,?,?)",[req.query.blogid] ,(err,results)=>{
        if(err) return console.log(err)
        else console.log(results)
        res.send(results)
        })

})
app.listen(80,()=>{
    console.log("服务器已启动在http://127.0.0.1")
})

