const mysql = require("mysql2")

const db = mysql.createPool({
    host:"database-2.c1fuze3vyeka.ap-northeast-2.rds.amazonaws.com",
    user:"taeyang",
    password:"taeyang112",
    database:"taeyang"
})

module.exports = db;