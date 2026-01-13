# contextAPI

## Overview
The contextAPI project is a React application that implements server-side rendering (SSR) for fetching user data. It utilizes the Context API to manage and provide user data across components without passing props directly. The application consists of two main components: a list of users and detailed views of individual users.

## Project Structure
```
contextAPI
├── src
│   ├── App.jsx                # Main application component with routing
│   ├── components
│   │   ├── Users.jsx          # Component to display a list of users
│   │   └── UserDetails.jsx     # Component to display details of a specific user
│   ├── context
│   │   └── UserContext.jsx     # Context API for user data management
│   └── index.js               # Entry point for the React application
├── server
│   └── index.js               # Express server for handling SSR
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Sobiya2002/contextAPI.git
   cd contextAPI
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   - For development (client-side rendering):
     ```bash
     npm start
     ```
   - For server-side rendering:
     ```bash
     npm run server
     ```

## Features
- **Server-Side Rendering**: The application fetches user data on the server before rendering the React components, improving performance and SEO.
- **Context API**: User data is managed using the Context API, allowing components to access data without prop drilling.
- **Routing**: The application uses React Router for navigation between the user list and user details.

## Additional Notes
- Ensure that the API endpoint for fetching user data is correctly configured in the server/index.js file.
- The Context API does not make API calls directly; it receives data from the server and provides it to the components.