const express = require("express")
const res = require("express/lib/response")
const app = express()
const cors = require('cors')


const db = require("./db")
const Message = require("./message")

app.use(express.json())
app.use(cors())


app.get("/", (req, res)=>(
    console.log("get is working/")
))

//get function to  get all the messages from database
app.get("/messages", (req, res)=>{
    Message.find({},(err, data)=>{
        if(err){
            console.log("error")
        }else{
            res.status(201).json(data)
        }
    } )
})


//post a message in the chat
app.post("/messages", (req, res)=>{
    Message.create(req.body, (err, newMessage)=>{
       if(err){
           console.log("Error")
       }else{
           res.status(201).json( newMessage)
           console.log(newMessage)
       }
    })
})




  //registration function

  app.post('/users/register', (req, res)=>{
    User.create(req.body, (err, newUser)=>{
                if(err){
                  console.log("ERROR", err)
                }else {
                  res.status(201).json({message:"Created new user successfully", newUser})
                  console.log("Created new user successfully", newUser)
                }
    })

    })





//login function 
app.post("/users/login", (req, res)=>{
    User.find({email: req.body.email}, (err, arrUserFound)=>{
           if(err){

             console.log("ERROR", err)

           }else {

             if(arrUserFound.length===1){

                 if(req.body.password === arrUserFound[0].password) {

                  res.status(200).json({
                    message: "Login Successfully",
                    username: arrUserFound[0].username
                  });

                 }else{

                      res.status(400).json({message: "wrong password"})
                 }
           }else{

             res.json({message: "email is not registered"})

           }
          }
    })
  })








app.listen(5000, ()=>{
    console.log("server is working")
})