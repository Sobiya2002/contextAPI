import React from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

export default function UsersList() {
  const { getUsers } = useUsers();
  const users = getUsers();

  return (
    <>
      <h1>Users</h1>
      {users?.length ? (
        users.map((u) => (
          <div key={u.id} className="card">
            <div style={{ fontWeight: 600 }}>{u.name}</div>
            <div style={{ color: '#555' }}>{u.email}</div>
            <div><Link to={`/users/${u.id}`}>View details →</Link></div>
          </div>
        ))
      ) : (
        <p>No users available. (SSR seeds this list.)</p>
      )}
    </>
  );
}
