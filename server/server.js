var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
const router = express.Router(); 
const mysql = require('mysql');
var nodemailer = require('nodemailer');
var order_number;

var app = express();

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;


// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'edocs'
});
// connect to database
dbConn.connect(); 
app.post('/sign', function (req, res) {
  var postData  = req.body;
  var pass= postData.Password;
  var username= postData.Email;
  console.log(pass +"      "+username);
  dbConn.query('SELECT Email,Password FROM user WHERE Email="'+username+'" and Password="'+pass+'" ', function (error, results, fields) {
   if (error) {
     throw error;
       var r="login";
       res.end(JSON.stringify(r));
}
else if (results.length>0) {
  console.log("Correct Password");
    var r="home";
  res.end(JSON.stringify(r));
}
else{
  console.log("Wrong Password");
  var r="passwordf";
  res.end(JSON.stringify(r));
}
 });
});
// Retrieve all Data
app.get('/allData/:Email', function (req, res) {
  console.log("am here");
  var v=req.params.Email;
  console.log(v);
  console.log(v);



  dbConn.query('SELECT * FROM internalorder i inner join internalorder_items l on i.ID=l.ID_Key WHERE AuthorisedBy="'+v+'" AND Approved=0', function (error, results, fields) {
      if (error){
        throw error;

      } 
      else{
        return res.send( results);

      }
      
  });
});
/////////////////////////////Data to issue
app.get('/allDataToIssue/:Email/:Department', function (req, res) {
  var v=req.params.Email;
  var d=req.params.Department;
  //var d="PIR";
  console.log(v);
  console.log(d);



  dbConn.query('SELECT * FROM internalorder i inner join internalorder_items l  on i.ID=l.ID_Key WHERE DptTo="'+d+'" AND Approved=1 AND Collected=0', function (error, results, fields) {
      if (error){
        throw error;

      } 
      else{
        return res.send( results);

      }
      
  });
});
/////////////////////////////Data to issue
app.get('/dpt/:Email', function (req, res) {
  console.log("am here");
  var v=req.params.Email;
  console.log(v);
  console.log(v);



  dbConn.query('SELECT Department FROM user  WHERE Email ="'+v+'" ', function (error, results, fields) {
      if (error){
        throw error;

      } 
      else{
        console.log(results[0].Department);
        var r= JSON.stringify(results[0].Department);
        var a = "am chiu";
        console.log(r);
       return res.send(r);

      }
      
  });
});
/////////////////////////////Data to issue
app.get('/order', function (req, res) {
        var r= this.order_number;
        console.log("inside order_number "+ r);
       return res.send(r);
});
// Retrieve all Data
app.get('/allPendingData/:Email', function (req, res) {
  console.log("am here");
  var v=req.params.Email;
  console.log(v);
  console.log(v);



  dbConn.query('SELECT * FROM internalorder i inner join internalorder_items l on i.ID=l.ID_Key WHERE RequestedByEmail="'+v+'" AND Approved=0 ', function (error, results, fields) {
      if (error){
        throw error;

      } 
      else{
        return res.send( results);

      }
       
  });
});
//rest api to create a new record into mysql database
app.post('/adds', function (req, res) {
  var postData  = req.body;
  var email= postData.Email;

  console.log(postData);
  dbConn.query('INSERT INTO internalorder SET ?', postData, function (error, results, fields) {
   if (error) {
     throw error;
   }
   else{
     console.log((JSON.stringify(results.insertId)));
     order_number=JSON.stringify(results.insertId);
     var id=JSON.stringify(order_number);
     console.log(id);
        res.end(id);
        richy();
   }
 });
});
function richy(){
  console.log("chifamba"+ JSON.stringify(order_number));
}
app.post('/additems', function (req, res) {
  var postData  = req.body;
  var email= postData.Email;

  console.log(postData);
  dbConn.query('INSERT INTO internalorder_items SET ?', postData, function (error, results, fields) {
   if (error) {
     throw error;
   }
   else{
        res.end(JSON.stringify(results));
   }
 });
});
//rest api to insert new users 
app.post('/changePassword', function (req, res) {
  var postData  = req.body;
  var cpass=postData.PasswordC;
  var npass=postData.PasswordNew;
  var email=postData.Email;
  console.log(cpass);
  console.log(npass);
  console.log(email);

  dbConn.query('UPDATE user SET Password="'+npass+'" WHERE Email="'+email+'" AND Password="'+cpass+'"', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
/////////////////////////////Data to issue
app.get('/approveR/:ID_Key', function (req, res) {
  console.log("am here");
  var ID_K=req.params.ID_Key;
  console.log(ID_K);



 dbConn.query('UPDATE  internalorder_items SET Approved=1 WHERE ID_Key="'+ID_K+'" ', function (error, results, fields) {
   if (error) {
     throw error;
   }
   else{
     sendApproval(ID_K);
      res.end(JSON.stringify(results));
   }
  
 });
});
function sendApproval(ID_Number){

  dbConn.query('SELECT * FROM internalorder  WHERE ID ="'+ID_Number+'" ', function (error, results, fields) {
      if (error){
        throw error;

      } 
      else{
        console.log(results[0].Department);
         var email= JSON.stringify(results[0].RequestedByEmail);
         var date= JSON.stringify(results[0].Date);
         var authoriser= JSON.stringify(results[0].AuthorisedBy);
        var q='"';
        var e='';
          var mail=email.split(q).join(e);
          var dat=date.split(q).join(e);
          var auth=authoriser.split(q).join(e);
       
        console.log("kkkkkkkkkkkkk" +mail);
        console.log("kkkkkkkkkkkkk" +dat);
        console.log("kkkkkkkkkkkkk" +auth);


  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'richardchifamba4@gmail.com',
    pass: '54321012345'
  }
});
var mailOptions = {
  from: 'richardchifamba4@gmail.com',
  to: mail,
  subject: 'APPROVAL OF AN INTERNAL ORDER',
  text: 'Good day,  Your internal order which was made on '+dat+'was approved by '+auth+'. Bring your order number ('+ID_Number+').'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.end(JSON.stringify("succesfull"));
  }
});
      }
      
  });

}










/////////////////////////////Data to issue
app.get('/issueR/:ID_Key', function (req, res) {
  console.log("am here");
  var ID_K=req.params.ID_Key;
  console.log(ID_K);



 dbConn.query('UPDATE  internalorder_items SET Collected=1 WHERE ID_Key="'+ID_K+'" ', function (error, results, fields) {
   if (error) throw error;
   var a="issue";
   res.end(JSON.stringify(a));
 });
});/////////////////////////////Data to issue
app.get('/rejectR/:ID_Key', function (req, res) {
  console.log("am here");
  var ID_K=req.params.ID_Key;
  console.log(ID_K);



 dbConn.query('UPDATE  internalorder_items SET Collected=2 WHERE ID_Key="'+ID_K+'" ', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});