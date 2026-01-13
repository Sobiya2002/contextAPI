import { Routes, Route, Navigate, Link } from 'react-router-dom';
import UsersList from './components/UsersList.jsx';
import UserDetails from './components/UserDetails.jsx';

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <header style={{ marginBottom: 16 }}>
        <h2>Users</h2>
        <nav>
          <Link to="/users">Users</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<p>404 — Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}
