import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import '../CSS/NavBar.css'
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import { useHistory } from 'react-router-dom'

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const history = useHistory()
    const API = apiURL()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            //Signup with firebase and sent results to our backend
            history.push('/')
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <h1>Sign Up</h1>

            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                >
                </input>

                <input
                    placeholder='Password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    autoComplete='on'
                >
                </input>
                <button type='submit'>Sign Up</button>

            </form>
        </>

    )
}