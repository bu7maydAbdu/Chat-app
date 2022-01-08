const {Schema, model} = require("mongoose")


const messageSchema = new Schema({
    message: String
})

const Message=model("Message", messageSchema)

module.exports=Message