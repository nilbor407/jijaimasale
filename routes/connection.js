var mysql=require("mysql")
var util=require('util')


var conn=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

conn.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected Successfully');
    }
});

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;

