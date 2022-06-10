// Iteration #1
const mongoose = require ('mongoose')
const Drones = require ('../models/Drone.model')

const drones = [
    {
      name: "Creeper XL 500",
      propellers: 3,
      maxSpeed: 12,
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20,
      },
      {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18,
      }
  
  ];
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  
  /*
  mongoose.connect('mongodb://localhost/lab-express-cinema')
  .then(x=> console.log(`connected to ${x.connection.name}`))
  .then(()=> {
      return Movies.create(movies)
  })
  .catch (e=> console.log(e))
  .finally (() => {
      mongoose.connection.close()
  })
  */


  // ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose


// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    return Drones.create(drones)
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err); 
  })
  .finally (() => {
    mongoose.connection.close()
}
  );

