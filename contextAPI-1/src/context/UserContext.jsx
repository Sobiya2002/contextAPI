
import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext({
  usersById: {},
  userIds: [],
  isReady: false,
  error: null,
  lastUpdated: null,
});

export function DataProvider({ initialData, children }) {
  const [state] = useState(() => {
    const normalized = normalizeUsers(initialData?.users || []);
    return {
      usersById: normalized.usersById,
      userIds: normalized.userIds,
      isReady: Boolean(initialData),
      error: initialData?.error || null,
      lastUpdated: initialData?.lastUpdated || null,
    };
  });

  const value = useMemo(() => state, [state]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}

export function useUsers() {
  const { userIds, usersById, isReady, error } = useUserContext();
  const users = useMemo(() => userIds.map((id) => usersById[id]), [userIds, usersById]);
  return { users, isReady, error };
}

export function useUser(id) {
  const { usersById } = useUserContext();
  return usersById[String(id)] || null;
}

function normalizeUsers(users) {
  const usersById = {};
  const userIds = [];
  for (const u of users) {
    usersById[String(u.id)] = u;
    userIds.push(String(u.id));
  }
  return { usersById, userIds };
}
