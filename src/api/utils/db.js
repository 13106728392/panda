/* 
* @Author: Marte
* @Date:   2018-04-18 15:57:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-01 13:50:37
*/

const MongoClient=require('mongodb').MongoClient;
const apiResult=require('./apiResult');
const url='mongodb://localhost:27017';
var db=null;
MongoClient.connect(url,(error,client)=>{
    db=client.db('panda');
})
module.exports={
    async select(_collection,_condition={}){
        try{
            let items=await db.collection(_collection).find(_condition).toArray();
            return apiResult(items.length>0,items);
        }catch(err){
            return apiResult(false,err);
        }
    },
    async insert(_collection,_data){
        try{
            let result=await db.collection(_collection).insert(_data);
            return apiResult(result.insertedCount,result.result);
        }catch(err){
            return apiResult(false,err);
        } 
    },
    async update(_collection,_condition={},_cont={}){
        try{
            let result=await db.collection(_collection).update(_condition,_cont);
            return apiResult(result.nModified>0,result);
        }catch(err){
            return apiResult(false,err);
        } 
    },
    async delete(_collection,_condition={}){
        try{
            let result=await db.collection(_collection).remove(_condition);
            return apiResult(result.n>0,result);
        }catch(err){
            return apiResult(false,err);
        } 
    }
}