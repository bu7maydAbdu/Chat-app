import React, {useState} from 'react'

export default function CreateMessage(props) {

const [newMessage, setNewMessage] = useState("")

    const addMessage = ()=>{
      props.createNewMessage({message: newMessage})
    }
    return (
        <div className='create-message'>
            <input className='type-message' type="text" onChange={(e)=>{
                setNewMessage(e.target.value)
            }}/>
            <button className="send-button" onClick={addMessage}>Send</button>
        </div>
    )
}
