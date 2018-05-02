/* 
* @Author: Marte
* @Date:   2018-04-19 11:12:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-01 15:06:37
*/
var db=require('../utils/db');
const jwt = require('jsonwebtoken');
const apiResult=require('../utils/apiResult')
module.exports={
    register(app){
        app.post('/register',async (req,res)=>{
            let username=req.body.username;
            let password=req.body.password;
            let result=await db.insert('admin_users',{username,password});
            res.send(result);
            res.end();
        })
    },
    login(app){
        app.post('/login',async (req,res)=>{
            let username=req.body.username;
            let password=req.body.password;
            let result=await db.select('admin_users',{username,password});
            if(result.status){
                let token = jwt.sign({username},'123456', {
                'expiresIn': 60*60*10 //置过期时间, 24 小时
                })
                let ar=apiResult(result.status,token);
                res.send(ar);
            }else{
                res.send(result);
            }
            res.end();
        })
    },
    product_manage(app){ 
        app.get('/product_manage',async (req,res)=>{
            let result = await db.select('products');
            res.send(result);
        })
    },
    //种类tab标签切换
    tabchange(app){
    	app.post('/tabs',async(req,res)=>{
    		let tabname = req.body.tabname;
    		console.log('tabname'+tabname);
    		let result = await db.select('tabs',{title:tabname});
    		res.send(apiResult(result.status,result.data))
    	})
    }
}
