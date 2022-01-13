const {Schema, model} = require("mongoose")


const usernamechema = new Schema({
    username: String
})

const Username=model("Username", usernamechema)

module.exports=Username