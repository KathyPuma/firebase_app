import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../util/firebaseFunctions'
import firebase from 'firebase/app'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { uiConfig } from '../util/firebaseFunctions'


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            history.push('/')
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <h1>Login </h1>

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
                <button type='submit'>Log In</button>

                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </form>
        </>

    )
}