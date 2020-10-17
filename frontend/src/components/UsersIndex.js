import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL'
import axios from 'axios'
export default function UsersIndex() {
    const [users, setUsers] = useState([])
    const API = apiURL()

    useEffect(() => {
        const fetchUser = async () => {
            let res = await axios({
                method: 'get',
                url: `${API}/api/users`
            })
            setUsers(res.data.users)
        }


        fetchUser()
    }, [])


    return (
        <div>
            <h1>All users. Ypu are seeing this if you are logged in </h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}> {user.email}</li>
                })}
            </ul>
        </div>
    )
}