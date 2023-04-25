const express = require('express')
const db = require("../management/server/db")
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', (req, res) => {
    res.send({message:'Hello express'})
})

app.get('/api/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.query("select * from user", (err, data) => {
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.post('/api/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const name = req.body.name 
    const phone_number = req.body.phone_number 
    const region = req.body.region 
    const description = req.body.description

    const sqlQuery = `INSERT INTO taeyang.user(name, phone_number, region, description) VALUES (?, ?, ?, ?);`
    
    db.query(sqlQuery, [name, phone_number, region, description], (err, data) => {
        if(!err){
            alert("신청이 완료되었습니다.")
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

let corsOptions = {
  origin: "*", 
  credential: true, 
};

app.use(cors(corsOptions));
app.listen(port, () => console.log(`Listening on port ${port}`))
