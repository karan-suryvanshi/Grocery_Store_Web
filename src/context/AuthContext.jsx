import React, { useState } from 'react';
import { AuthContext } from './authContextValue';

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const register = ({ name, email, password }) => {
        const normalizedEmail = email.trim().toLowerCase();
        if (users.some((user) => user.email === normalizedEmail)) {
            return { success: false, error: 'An account with this email already exists in this demo.' };
        }

        const newUser = { name: name.trim(), email: normalizedEmail, password };
        setUsers((existingUsers) => [...existingUsers, newUser]);
        setCurrentUser({ name: newUser.name, email: newUser.email });
        return { success: true };
    };

    const login = ({ email, password }) => {
        const normalizedEmail = email.trim().toLowerCase();
        const matchingUser = users.find(
            (user) => user.email === normalizedEmail && user.password === password,
        );

        if (!matchingUser) {
            return { success: false, error: 'Email or password is incorrect, or the demo account has not been registered yet.' };
        }

        setCurrentUser({ name: matchingUser.name, email: matchingUser.email });
        return { success: true };
    };

    const logout = () => setCurrentUser(null);

    return (
        <AuthContext.Provider value={{ currentUser, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
