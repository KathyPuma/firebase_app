import React, { useState, useEffect, useContext } from 'react'
import { apiURL } from '../util/apiURL'
import axios from 'axios'
import { AuthContext } from '../providers/AuthContext'
export default function UsersIndex() {
    const [users, setUsers] = useState([])
    const API = apiURL()
    const { token } = useContext(AuthContext)

    useEffect(() => {
        console.log("Happened now")
        const fetchUser = async () => {
            let res = await axios({
                method: 'get',
                url: `${API}/api/users`,
                headers: {
                    'AuthToken': token
                }
            })
            setUsers(res.data.users)
            console.log(res.data.users, "users")
        }


        fetchUser()
    }, [])


    return (
        <div>
            <h1>All users. You are seeing this if you are logged in </h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}> {user.email}</li>
                })}
            </ul>
        </div>
    )
}