import React from 'react'

export default function Login() {
    return (
        <div className='login-page'>

            <form className='login-form'>

            <input className='input-username-email-password' type="email" placeholder='write your name here'/>
            <input className='input-username-email-password' type="password" placeholder='enter your password here'/>
            <button className='submit-button'>Submit</button>

            </form>
        </div>
    )
}
