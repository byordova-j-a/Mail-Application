const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app=express();
const jsonParser=express.json();

let corsOption ={
  origin:"http://localhost:3000",
};

app.use(cors(corsOption));
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"-1SqBd34G92DAFk89kr",
  database:"mailsbd"
});

app.post("/folder", jsonParser,(req,res)=>{
  
  if(!req.body) return res.sendStatus(400);
  
  let {Folder}=req.body;

  connection.query("SELECT * FROM Mails WHERE Folder=?",[Folder],function(err,result){
    if (err) console.log(err);

    res.json(result);
    });
});

app.post("/search", jsonParser,(req,res)=>{

  if(!req.body) return res.sendStatus(400);

  let {Search}=req.body;

  Search=`%`+`${Search}`+`%`;
 
  connection.query("SELECT * FROM Mails WHERE  ((Author LIKE ? ) OR (Title LIKE ? ) OR (MailText LIKE ? ))",[Search,Search,Search],function(err,result){
    if (err) console.log(err);
  
    res.json(result);
    });
});

app.listen(PORT,()=>{console.log(`Server works on the port ${PORT}`)});