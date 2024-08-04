const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

app.set('view engine','ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Config
dotenv.config()
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

// (()=>{ for(let i = 0;i < 100;i++){ let username = i;let password = i; let user = new User({username,password}); user.save()}
// })

//Routes
const route = require('./routes/routes');
app.use(route)

//Connecting to DB & Server.
mongoose.connect(MONGOURL).then(()=>{
   console.log("Database is connected.");
   app.listen(PORT,()=>{
      console.log(`Server is running on port ${PORT}`);
   });
}).catch((err) => console.log(err));