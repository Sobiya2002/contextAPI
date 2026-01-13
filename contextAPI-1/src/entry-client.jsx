import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { DataProvider } from './context/UserContext.jsx';

const container = document.getElementById('root');
const initialData = window.__INITIAL_DATA__ || null;

const app = (
  <DataProvider initialData={initialData}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);

if (container && container.hasChildNodes()) {
  hydrateRoot(container, app);
} else if (container) {
  createRoot(container).render(app);
}
