const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas Successfully connected with pfserver");
}).catch((err)=>{
    console.log(`mongoDB Connection Failed !! error:${err}`);
})