import { useEffect } from "react"
import { useState } from "react"

export default function Users () {

    const [Users, setUsers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } , [])

    return(
        <div>
            <h3>Users: {Users.length} </h3>
        </div>
    )
}