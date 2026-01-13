import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

const initialUsers = (typeof window !== 'undefined' && window.__INITIAL_USERS__) || [];

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <UserProvider initialUsers={initialUsers}>
      <App />
    </UserProvider>
  </BrowserRouter>
);

