const express = require("express")
const res = require("express/lib/response")
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



app.post("/messages", ()=>{
    Message.create(req.body, (err, newMessage)=>{
       if(err){
           console.log("Error")
       }else{
           res.status(201).json(newMessage)
           console.log(newMessage)
       }
    })
})