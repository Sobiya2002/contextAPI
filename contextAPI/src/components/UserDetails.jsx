import React from "react";
import { useParams} from 'react-router-dom';
import {useUsers} from '../context/UserContext';

export default function UserDetails(){
    const {id} = useParams();
    const {users} = useUsers();

    const user = users.find( u => u.id === Number(id));

    if(!user) return <p> User Not Found</p>;

    return (
        <>
        <h2> {user.name}</h2>
        <p> {user.email}</p>
        </>
    )
}