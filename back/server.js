const express=require('express')
const volleyball=require('volleyball')
const bodyParser=require('body-parser')
const cors = require("cors");
const rutas=require("./routes")
const logger = volleyball.custom({ debug: true })

const app=express()

app.use(cors());

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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


