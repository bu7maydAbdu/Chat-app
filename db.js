const mongoose = require("mongoose")

const dbURI="mongodb://localhost:27017/ChatAppV01"

mongoose.connect(dbURI)

const db = mongoose.connection 

db.on("error", ()=>{
    console.log("Error in MongoDB!!!")
})

db.on ("connected", ()=>{
    console.log("MongoDB IS CONNECTED...")
})