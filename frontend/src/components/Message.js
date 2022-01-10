import React from 'react'

export default function Message(props) {
    const {
        _id, 
        message
    }= props.messages
    return (
        <div className='message'>
            <p>{message}</p>
        </div>
    )
}
