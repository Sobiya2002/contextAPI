require('@babel/register')({
  extensions: ['.js', '.jsx']                 
});

const path = require('path');
const express = require('express');
const axios = require('axios').default;
const serialize = require('serialize-javascript');

const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');

const App = require('../src/App').default;
const { UserProvider } = require('../src/context/UserContext');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the client bundle
app.use('/static', express.static(path.join(__dirname, '..', 'public')));

// Sample API
const USERS_API = 'https://jsonplaceholder.typicode.com/users';

app.get('*', async (req, res) => {
  try {
    // SSR-only fetch; Context never fetches directly
    const { data: users } = await axios.get(USERS_API, { timeout: 8000 });

    const jsx = React.createElement(
      StaticRouter,
      { location: req.url },
      React.createElement(
        UserProvider,
        { initialUsers: users },               // provide SSR data to Context
        React.createElement(App, null)
      )
    );

    const appHtml = renderToString(jsx);

    const html = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Manual SSR + Context API</title>
          <style>
            body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial; margin: 24px; }
            a { color: #0b5ed7; text-decoration: none; }
            .container { max-width: 960px; margin: 0 auto; }
            .card { padding: 12px 16px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 8px; }
          </style>
        </head>
        <body>
          <div id="root" class="container">${appHtml}</div>
          <script>window.__INITIAL_USERS__ = ${serialize(users, { isJSON: true })};</script>
          /static/client.bundle.js</script>
        </body>
      </html>
    `;

    res.status(200).send(html);
  } catch (err) {
    console.error('SSR error:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`SSR server listening on http://localhost:${PORT}`);
});
``
