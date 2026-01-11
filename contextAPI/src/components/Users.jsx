import React from 'react';
import {Link} from 'react-router-dom';
import { useUsers } from '../context/UserContext';

export default function Users(){
    const {users} = useUsers();

    return (
        <ul>
            {users.map(user => {
                <li key = {user.id}>
                    <Link to = {`/users/{$user.id}`}>{user.name}
                    </Link>
                </li>
            })}
        </ul>
    )
}