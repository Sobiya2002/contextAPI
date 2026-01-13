import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';

export default function App() {
  return (
    <>
      <header style={{ marginBottom: 16 }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/users">Users</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
    </>
  );
}
