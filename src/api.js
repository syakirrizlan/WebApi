//Node Express API with MSSQL


const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Setting Base directory
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
	//Enabling CORS 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
	next();
});

// Connection string parameters.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jobonline'
});

db.connect();


// var sqlSchema = "nodejs";

// Start server and listen on http://localhost:8081/
var server = app.listen(8888, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("app listening at http://%s:%s", host, port)
});

app.get('/api', (req, res) => {
    res.send("NodeJS API");
});

//GET API
app.get('/api/user', function (req, res) {
    var sql = 'SELECT * FROM userdata';
    db.query(sql, (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result)); // Result in JSON format
            console.log(JSON.stringify(result));
        }
        else {
            res.send(err);
            return res.send(404, { error: "Error to get data." });
            console.log(JSON.stringify(result));
        }
    });
});

//GET API
app.get('/api/job', function (req, res) {
    var sql = 'SELECT * FROM job';
    db.query(sql, (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result)); // Result in JSON format
            console.log(JSON.stringify(result));
        }
        else {
            res.send(err);
            return res.send(404, { error: "Error to get data." });
            console.log(JSON.stringify(result));
        }
    });
});

app.get('/api/admin', function (req, res) {
    var sql = 'SELECT * FROM admindata';
    db.query(sql, (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result)); // Result in JSON format
            console.log(JSON.stringify(result));
        }
        else {
            res.send(err);
            return res.send(404, { error: "Error to get data." });
            console.log(JSON.stringify(result));
        }
    });
});

//POST API
//Add
app.post('/api/user', function (req, res) {
    console.log(req.body.user);

	var firstname = req.body.user.firstname;
	var password = req.body.user.password;
    var email = req.body.user.email;
    var mobile = req.body.user.mobile;

    var sql = 'INSERT INTO userdata (firstname, password, email, mobile) VALUES ("'+firstname+'","'+password+'","'+email+'","'+mobile+'")';
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.send("Successfully insert new record");
            console.log(result);
        }
    });
});

app.post('/api/job', function (req, res) {
    console.log(req.body.user);

	var position = req.body.user.position;
	var jobscope = req.body.user.jobscope;
    var jobtype = req.body.user.jobtype;
	var cgpa = req.body.user.cgpa;
	var experience = req.body.user.experience;
	var salary = req.body.user.salary;
	var location = req.body.user.location;
	var description = req.body.user.description;


	var location = req.body.user.location;
    var sql = 'INSERT INTO job (position, jobscope, jobtype, cgpa, experience, salary, location, description) VALUES ("'+position+'","'+jobscope+'","'+jobtype+'","'+cgpa+'","'+experience+'","'+salary+'","'+location+'","'+description+'")';
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.send("Successfully insert new record");
            console.log(result);
        }
    });
});

//PUT API single data by id
app.put('/api/user/:id', function (req, res) {
    console.log(req.body);
	var id = req.body.id;
	var firstname = req.body.firstname;
	var password = req.body.password;
    var email = req.body.email;
    var mobile = req.body.mobile;

    var sql = 'UPDATE userdata SET firstname= "' + firstname + '", password= "' + password + '", email= "' + email + '", mobile= "' + mobile + '"  WHERE id= ' + req.params.id;
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.send("Successfully insert new record");
            console.log(result);
        }
    });
});

app.put('/api/job/:id', function (req, res) {
    console.log(req.body);
	var position = req.body.position;
	var jobscope = req.body.jobscope;
    var jobtype = req.body.jobtype;
	var cgpa = req.body.cgpa;
	var experience = req.body.experience;
	var salary = req.body.salary;
	var location = req.body.location;
	var description = req.body.description;

    var sql = 'UPDATE job SET position= "' + position + '", jobscope= "' + jobscope + '", jobtype= "' + jobtype + '", cgpa= "' + cgpa + '" , experience= "' + experience + '" , salary= "' + salary + '" , location= "' + location + '" , description= "' + description + '"  WHERE id= ' + req.params.id;
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.send("Successfully insert new record");
            console.log(result);
        }
    });
});



// DELETE API
app.delete('/api/user/:id', function (req, res) {
    console.log(req.body);

    var sql = 'DELETE FROM userdata WHERE id="' + req.params.id+'"';
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.send("Successfully insert new record");
            console.log(result);
        }
    });
});

app.delete('/api/job/:id', function (req, res) {
    console.log(req.body);

    var sql = 'DELETE FROM job WHERE id="' + req.params.id+'"';
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.send("Successfully insert new record");
            console.log(result);
        }
    });
});