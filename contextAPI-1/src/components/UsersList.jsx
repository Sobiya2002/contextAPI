import { Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext.jsx';

export default function UsersList() {
  const { users, isReady, error } = useUsers();

  if (error) return <p style={{ color: 'crimson' }}>Error: {error}</p>;
  if (!isReady) return <p>Loading users…</p>;

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {users.map((u) => (
        <li key={u.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
          <Link to={`/users/${u.id}`}>
            <strong>{u.name}</strong> <span style={{ color: '#666' }}>({u.email})</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
