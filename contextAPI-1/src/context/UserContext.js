import React, { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ initialUsers = [], children }) {
  const [users, setUsers] = useState(initialUsers);

  const usersById = useMemo(() => {
    const map = new Map();
    for (const u of users) map.set(String(u.id), u);
    return map;
  }, [users]);

  const value = useMemo(() => ({
    users,
    usersById,
    getUsers: () => users,
    getUserById: (id) => usersById.get(String(id)) || null,
    setUsers, // optional if you ever update client-side
  }), [users, usersById]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUsers() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUsers must be used within <UserProvider>');
  return ctx;
}
