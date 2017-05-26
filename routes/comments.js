var express = require('express');
var db = require('../db.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session);
    if(!req.session.userId){
         res.render('login', { msg: '您还没登录呢!' });
    }else{
       
        let userInfo = {
            username: req.session.username,
            userId: req.session.userId
        };
        getData(function(data){
            console.log(data);
            res.render('comments', { userInfo: userInfo, rows:  data});
        });
    }
    
});

function getData(callback){
    db.query("select * from comment", function(err, rows){
        if(err){
            console.log(err);
        }else{
           callback(rows);
           
        }
  });
}
router.post('/leave', function(req, res, next) {
    var body = req.body;
    let comment = {
        username: body.username,
        comment: body.comment,
        userId: body.userId,
        createAt: (new Date()).getTime()
    };
    console.log(comment);
    db.query('insert into comment set ?', comment, function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect('/comments');
        }
    });
});

router.post('/modify', function(req, res){
    var d = req.body;
    console.log(d);
    db.query("update comment set comment = ? where id =?", [d.comment, d.id], function(err){
        if(err){
            console.log("更新数据失败", err);
            let msg = {
                status: 0,
                msg: "数据更新失败...."
            };
            res.contentType('json');//返回的数据类型  
            res.send(JSON.stringify(msg));//给客户端返回一个json格式的数据  
            res.end();  
            
        }else{
            console.log("OK.....");
             let msg = {
                status: 1,
                msg: "数据更新成功...."
            };
            res.contentType('json');//返回的数据类型  
            res.send(JSON.stringify(msg));//给客户端返回一个json格式的数据  
            res.end();  
        }
    });
});
module.exports = router;
