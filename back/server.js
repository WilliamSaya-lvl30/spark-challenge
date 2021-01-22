const express=require('express')
const volleyball=require('volleyball')
const bodyParser=require('body-parser')
const rutas=require("./routes")
const logger = volleyball.custom({ debug: true })
const cookieParser=require('cookie-parser')
const session=require('express-session')
const passport=require('passport')
require('./auth/localStrategy')

const app=express()

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({secret:"spark-challenge", resave:false, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session());
app.use(logger)
app.use(volleyball)

app.use("/api",rutas)

app.get('/*', function(req, res){
  res.sendFile(__dirname +"/public/index.html");
}); 

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});


app.listen(5000, () => console.log(" listenning on port 5000"));


