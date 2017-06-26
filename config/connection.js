var mysql=require('mysql');
var serverName='L5-HEALTH-HP8';
var dbName='burger_db';
var sqlLogin='customer';
var sqlPwd='P@55w0rd';

if (process.env.JAWSDB_URL) {
     connection=mysql.createConnection(process.env.JAWSDB_URL);
    }
    else {
        connection=mysql.createConnection({
                host: serverName,
                user: sqlLogin,
                password: sqlPwd,
                database: dbName
    })
}

module.exports=connection;