var mysql = require('mysql');

var link = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "comments"
});


link.connect(function(err){
    if(err){
        console.log("Database connection failed："+ err.stack);
        return ;
    }
    console.log("The database connection is successful.");
});

module.exports = link;