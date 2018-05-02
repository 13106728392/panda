/* 
* @Author: Marte
* @Date:   2018-04-18 16:15:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-26 17:13:20
*/
// const express=require('express');
// const bodyParser=require('body-parser');
// const path=require('path');
// const apiResult = require('./utils/apiResult');
// const db=require('./utils/db');
// const app=express();
// app.listen(66);
// app.use(express.static(path.join(__dirname,'/html/')));
// var bp=bodyParser.urlencoded({extends:false});
// app.post('/register',bp,async (req,res)=>{
//     let username=req.body.username;
//     let password=req.body.password;
//     let result=await db.insert('users',{username,password});
//     // console.log(result);
//     res.send(result);
//     res.end();
// })
// app.post('/login',bp,async (req,res)=>{
//     let username=req.body.username;
//     let password=req.body.password;
//     console.log(username,password);
//     let result=await db.select('users',{username,password});
//     // console.log(result);
//     res.send(result);
//     res.end();
// })
// app.get('/test',async (req,res)=>{
//     // let username=req.body.username;
//     // let password=req.body.password;
//     let result=await db.update('users',{username:"wine"},{username:"weimi"});
//     res.send(result);
//     console.log(result);
//     res.end();
// })
const router=require('./router/index.js');
router.start();