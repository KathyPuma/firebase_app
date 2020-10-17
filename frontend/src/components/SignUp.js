import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import { useHistory } from 'react-router-dom'
import { signUp } from '../util/firebaseFunctions';

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const history = useHistory()
    const API = apiURL()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let res = await signUp(email, password);
            await axios.post(`${API}/api/users`, { id: res.user.uid, email })
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