import React, { useEffect, useState } from "react";

export const UserForm1 = () => {
    const [users, setUsers] = useState([]);
    const [login, setLogin] = useState('');
    const apiUrl = `https://api.github.com/users/${login}`;
    
    useEffect(() => {
        async function getData() {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setUsers(data);
        }

        if (login) {
            getData();
        }
        
        console.log(users, 'login')
    }, [login]);

    const handleChange = (event) => {
        setLogin(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label> Git Hub User Query: 
            <input type="search" value={login} onChange={handleChange}/>
            <button type="submit">Click here</button>
            </label>
        </form>
        <p>User info: {users.login} </p> 
        </>
    );
}