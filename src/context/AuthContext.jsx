import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
        const [curentUser, setCurentUser] = useState('');

        const registerUser = async (email, password) => {
                try {
                        const user = await createUserWithEmailAndPassword(auth, email, password);
                        console.log(user);
                } catch (error) {
                        console.log(error.message);
                }
        };

        const login = async () => {};

        const logout = async () => {};

        // useEffect(() => {
        //         singup();
        // }, []);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = useMemo(() => ({ curentUser, setCurentUser, registerUser }), [curentUser]);

        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
