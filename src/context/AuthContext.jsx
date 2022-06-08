/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
        const [currentUser, setCurentUser] = useState('');
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState('');

        const singup = async (email, password) => {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
        };

        const login = async (email, password) => {
                try {
                        const user = await signInWithEmailAndPassword(auth, email, password);
                        console.log(user);
                } catch (error) {
                        console.log(error.message);
                }
        };

        const logout = async () => {
                await signOut(auth);
        };

        useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                        setCurentUser(user);
                });
        }, []);

        // useEffect(() => {
        //         singup();
        // }, []);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = { currentUser, isLoading, setIsLoading, singup, login, logout, setError };
        // const value = useMemo(
        //         () => ({ currentUser, isLoading, setIsLoading, singup, login, logout, setError }),
        //         [currentUser]
        // );

        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
