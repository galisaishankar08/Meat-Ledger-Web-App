const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql')
const app = express();

app.use(cors());

// parse application/json
app.use(bodyParser.json());
  
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2010030054',
  database: 'meatledger',
  connectionLimit : 100,
  wait_timeout : 28800,
  connect_timeout :10,
  port: '3306'
});
 
app.listen(3001, () => { 
  console.log("Server running successfully on 3001");
});

app.get("/", (req,res)=>{
    res.send("Hello");
})

//connect to database
conn.connect((err) =>{
  if(err) console.log(err);
  console.log('Database Connected...');
});

//add new user
app.post('/herdsman/signup/new',(req, res) => {
  const userid = Math.floor(100000 + Math.random() * 900000);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const contact = req.body.contact;
  const address = req.body.address;
  const usertype = req.body.usertype;

  console.log(name, email, password, contact, address);
  
  conn.query("INSERT INTO users (userid,name,email,password,contact, address, usertype) values (?,?,?,?,?,?,?)", [userid, name,email, password, contact,address, usertype],
    (err,result) => {
      if(err){
        console.log(err);
        res.status(409).send("Email Already Exist");
      }
      else{
        res.send("Registered Successfully");
        console.log(result);
      }
    })
});

app.post('/herdsman/signup/validatereferal',(req, res) => {
  const userid = Math.floor(100000 + Math.random() * 900000);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const contact = req.body.contact;
  const address = req.body.address;
  const usertype = req.body.usertype;
  const referralid = req.body.referralid;

  console.log(userid, name, email, password, contact, address, referralid, usertype);

  const flag = false;
  
  conn.query("select userid from users where userid=?", [referralid],
    (err,result) => {
      if(err){
        console.log(err);
        res.status(409).send("Invalid Referral ID");
      }
      else{
        console.log("valid Refer", result[0].userid, referralid)
        if(result[0].userid === referralid){
          console.log("same");
          
          conn.query("INSERT INTO users (userid,name,email,password,contact, address, usertype) values (?,?,?,?,?,?,?)", [userid, name,email, password, contact,address, usertype],
            (err,result) => {
              if(err){
                console.log(err);
                res.status(409).send("Email Already Exist");
              }
              else{
                res.send("Registered Successfully");
                console.log(result);
              }
            })
        }
        else{
          res.status(409).send("Invalid Referral ID");
        }
      }
    })
});


//user login

app.post('/login/log',(req, res) => {

  const loginemail = req.body.loginemail
  const loginpassword = req.body.loginpassword;

  console.log(loginemail,loginpassword);
  
  conn.query(
    "SELECT count(*), name, email, password FROM user WHERE email LIKE ?",
    [loginemail],
    (err,result) =>{

      const count = result[0]['count(*)'];
      const userpassword = result[0].password;
      const username = result[0].name;
      const useremail = result[0].email;

      if(count == 0){
        res.status(409).send("Email Does Not Exist");
      }
      else if(userpassword != loginpassword){
        res.status(409).send("Invalid Password"); 
      }
      else{
        res.send({token:"token",username:username,useremail:useremail});
      }
    }
  )
});


app.get("/users", (req, res) => {
  conn.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});