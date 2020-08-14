var express = require('express');
var app = express();
var path = require('path');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));
app.get('/infozibralink', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public','info.html'));
})

app.get('/regform', (req,res)=>{
    res.sendFile(path.join(__dirname, 'App.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'Form.html'));
})
app.get('/projectinfo', (req,res)=>{
    res.sendFile(path.join(__dirname, 'picture', 'project.html'));
})
app.get('/contact', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public','contact.html'));
})

app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public','Home.html'));
})
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public','front.html'));
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
})
