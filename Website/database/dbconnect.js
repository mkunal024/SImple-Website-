var mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"root123",
    "port":3306,
    "database":"world"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("Error Occured"+json.stringify(err));
    }
    else{
        console.log("connection done port is running on 3302");
    }
})

module.exports=mysqlconnection;