import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
        const [curentUser, setCurentUser] = useState('');

        const singup = async () => {};

        const login = async () => {};

        const logout = async () => {};

        useEffect(() => {
                singup();
        }, []);

        // const value = {
        //         curentUser,
        // };

        return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
