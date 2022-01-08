const express = require("express")
const app = express()

const db = require("./db")
const Message = require("./message")

app.use(express.json())


app.get("/messages", (req, res)=>{
    Message.find({},(err, data)=>{
        if(err){
            console.log("error")
        }else{
            res.json(data)
        }
    } )
})