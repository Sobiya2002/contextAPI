import React , { createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({initialData, children}) => {
    const [users] = useState(initialData);

    return (
        <UserContext.Provider
        value = {{ users }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => useContext(UserContext);