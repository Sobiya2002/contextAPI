import { useParams, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext.jsx';

export default function UserDetails() {
  const { id } = useParams();
  const user = useUser(String(id));

  if (!user) {
    return (
      <div>
        <p>User not found in context.</p>
        <Link to="/users">← Back to users</Link>
      </div>
    );
  }

  return (
    <article>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      {user.address && (
        <p>
          <strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city} {user.address.zipcode}
        </p>
      )}
      {user.company && <p><strong>Company:</strong> {user.company.name}</p>}
      <p><Link to="/users">← Back</Link></p>
    </article>
  );
}
