const mongoose = require("mongoose");

mongoose.set('returnOriginal', false);

mongoose.connect("mongodb://localhost/spark-challenge", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

//evento que muestra cuando se conecta la base de datos 
db.once("open", _ => {
  console.log("Database is connected");
});

// para detectar el error que detubo la coneccion
db.on("error", err => {
  console.log(err);
});