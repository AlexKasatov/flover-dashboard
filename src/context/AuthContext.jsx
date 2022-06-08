import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
        const [currentUser, setCurentUser] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        const singup = async (email, password) => {
                try {
                        const user = await createUserWithEmailAndPassword(auth, email, password);
                        console.log(user);
                } catch (error) {
                        console.log(error.message);
                }
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

        onAuthStateChanged(auth, (user) => {
                if (user) {
                        setCurentUser(user);
                } else {
                        setCurentUser('');
                }
        });

        // useEffect(() => {
        //         singup();
        // }, []);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = useMemo(() => ({ currentUser, isLoading, singup, login, logout }), [currentUser]);

        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
