
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App.jsx';
import { DataProvider } from './context/DataContext.jsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

const API = 'https://jsonplaceholder.typicode.com';

app.get('*', async (req, res) => {
  try {
    let users = [];
    if (req.path.startsWith('/users') || req.path === '/') {
      users = await fetchUsers(`${API}/users`);
    }

    const initialData = {
      users,
      lastUpdated: new Date().toISOString()
    };

    const appHtml = renderToString(
      <DataProvider initialData={initialData}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </DataProvider>
    );

    const html = buildHtml({ appHtml, initialData });
    res.status(200).send(html);
  } catch (err) {
    const initialData = {
      users: [],
      error: 'Failed to fetch users',
      lastUpdated: new Date().toISOString()
    };

    const appHtml = renderToString(
      <DataProvider initialData={initialData}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </DataProvider>
    );

    const html = buildHtml({ appHtml, initialData });
    res.status(502).send(html);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SSR server running on http://localhost:${PORT}`);
});

/** Helpers **/
async function fetchUsers(url) {
  const resp = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if (!resp.ok) throw new Error(`API ${url} failed: ${resp.status}`);
  return await resp.json();
}

function buildHtml({ appHtml, initialData }) {
  const safeJson = JSON.stringify(initialData).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SSR + Context API (No Props)</title>
  <style>
    html, body { margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif; }
    a { color: #0366d6; text-decoration: none; }
    a:hover { text-decoration: underline; }
    header { border-bottom: 1px solid #eee; margin-bottom: 16px; }
  </style>
</head>
<body>
  <div id="root">${appHtml}</div>
  <script>window.__INITIAL_DATA__ = ${safeJson};</script>
  /public/client.js</script>
</body>
</html>`;
}
``
