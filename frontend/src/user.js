const {Schema, model} = require("mongoose")


const usernamechema = new Schema({
    username: String,
    email: {type:String, required=true , unique: true}
})

const Username=model("Username", usernamechema)

module.exports=Username