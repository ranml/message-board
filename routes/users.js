var express = require('express');
var db = require('../db.js');
var crypto = require('crypto');
var session = require('express-session');
var router = express.Router();
var app = express();


function md5(data) {
    return crypto.createHash('md5').update(data).digest('hex');
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect("/users/login");
});

//登录页面
router.get('/login', function(req, res, next) {
  console.log(req.session.userId);
  if(req.session.userId){
    //  res.send();
     //res.locals = { title: "您已经登录过了！"};
    res.redirect("../comments");
   
  }else{
    res.render('login', { title: '用户登录' });
  }
});

//注册页面
router.get('/register', function(req, res, next) {
  res.render('register', { title: '用户注册' });
});

//登录数据出口
router.post('/login', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password+"";

  password = md5(password);


  db.query("select * from user where username=?", username, function(err, rows){
    if(err){
      throw err;
    }else{
      console.log(rows);
      if(rows.length > 0){
        if(rows[0].password === password){
              req.session.userId = rows[0].id;
              req.session.username = username;
              res.redirect("/comments");
            }else{
              res.render('login', {msg: "用户名或密码错误"});
            }
      }else{
        res.render('login', {msg: "用户名或密码错误"});
      }
      
    }
  });
});

//退出登录
router.get('/logout', function(req, res, next) {
  if(req.session.userId){
    
   req.session.userId = "";
   req.session.username = "";
    res.redirect("/users/login");
  }
});

//注册
router.post('/register', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password+"";
  let repwd = req.body.repassword+"";

  if(username != ""){
    if(password === repwd){
     
      password = md5(password);
  
      db.query('insert into user set ?', {username: username, password: password}, function(err){
          if(err){
              console.log(err);
          }else{
            res.render('login', {msg: "注册成功! 请登录 ^_^"});
          }
      });
    }else{
      res.render('register', {msg: "两次密码不一致"});
    }
  }else{
    res.render('register', {msg: "用户名不能为空"});
  }
});
 
module.exports = router;
