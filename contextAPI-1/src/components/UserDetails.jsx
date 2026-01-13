import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

export default function UserDetails() {
  const { id } = useParams();
  const { getUserById } = useUsers();
  const user = getUserById(id);

  if (!user) {
    return (
      <>
        <h1>User not found</h1>
        <p>No user with id <code>{id}</code> in the pre-fetched data.</p>
        <p><Link to="/users">Back to users</Link></p>
      </>
    );
  }

  return (
    <>
      <h1>{user.name}</h1>
      <div className="card">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        {user.address && (
          <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        )}
        {user.company && (
          <p><strong>Company:</strong> {user.company.name}</p>
        )}
      </div>
      <p><Link to="/users">← Back to users</Link></p>
    </>
  );
}
