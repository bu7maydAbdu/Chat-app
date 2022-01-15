import React from 'react'

export default function registration() {
    return (
        <div className='registration-page'>
             <form className='registration-form'>
                 <input className='input-username-email-password' type="email" placeholder='write your email here'/>
                 <input className='input-username-email-password' type="text" placeholder='write your name here'/>
                 <input className='input-username-email-password' type="password" placeholder='enter your password here'/>

                   <button className='submit-button'>Submit</button>

                </form>
        </div>
    )
}
