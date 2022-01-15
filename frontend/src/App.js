import React , {useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import axios  from "axios"
import './App.css';
import Message from './components/Message';
import CreateMessage from './components/CreateMessage';
import OnlineUsers from './components/OnlineUsers';
import ProfileInfo from './components/ProfileInfo';
import Login from './components/Login';
import Registration from "./components/Registration"

function App() {


  useEffect(()=>{
    getMessages()
  },[])

 const [messages, setMessages] = useState([])

  const getMessages = ()=>{

  axios
  .get(`http://localhost:5000/messages`)
  .then((response) => {
    // console.log('RESPONSE: ', response);
    console.log("DATA: ", response.data);
    setMessages(response.data)
  })
  .catch((err) => {
    console.log("ERR: ", err);
  });
  }

  
  const createNewMessage = (body)=>{

    axios
    .post(`http://localhost:5000/messages`, body)
    .then((response) => {
      // console.log('RESPONSE: ', response);
      console.log("DATA: ", response.data);
getMessages()   
 })
    .catch((err) => {
      console.log("ERR: ", err);
    });
    }

  const mapOverMessages = messages.map((messagesObj, i)=>{
    return  <Message messages={messagesObj}/>
  })
  return (
    <div className="App">


      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/home" element={<div className='chat-page'>
      <ProfileInfo/>

      <div className='chat-window'>

      {/* <button onClick={
        getMessages
      }>getmessages</button> */}
      
      {mapOverMessages}
      

    <CreateMessage  createNewMessage={createNewMessage} />
    </div>

    <OnlineUsers/>

    
    </div>} />

      </Routes>
    


    </div>
  );
}

export default App;
