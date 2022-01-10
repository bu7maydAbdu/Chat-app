import React , {useState} from 'react';
import axios  from "axios"
import './App.css';
import Message from './components/Message';

function App() {

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

  const mapOverMessages = messages.map((messagesObj, i)=>{
    return  <Message messages={messagesObj}/>
  })
  return (
    <div className="App">

      <button onClick={
        getMessages
      }>getmessages</button>
      
      {mapOverMessages}
    </div>
  );
}

export default App;
