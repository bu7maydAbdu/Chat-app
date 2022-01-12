import React , {useState, useEffect} from 'react';
import axios  from "axios"
import './App.css';
import Message from './components/Message';
import CreateMessage from './components/CreateMessage';

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

      {/* <button onClick={
        getMessages
      }>getmessages</button> */}
      
      {mapOverMessages}

    <CreateMessage  createNewMessage={createNewMessage} />
    </div>
  );
}

export default App;
