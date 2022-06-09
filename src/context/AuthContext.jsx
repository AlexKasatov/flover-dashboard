/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
        const [currentUser, setCurentUser] = useState('');
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState('');

        const singup = async (email, password) => {
                // const user = await createUserWithEmailAndPassword(auth, email, password);
                try {
                        await toast.promise(createUserWithEmailAndPassword(auth, email, password), {
                                pending: 'Wait a sec...',
                                success: `Hi, you're all set! 👌`,
                        });
                } catch (error) {
                        toast.error(error.message.slice(10), {
                                position: toast.POSITION.TOP_CENTER,
                        });
                }
        };

        const login = async (email, password) => {
                try {
                        await toast.promise(signInWithEmailAndPassword(auth, email, password), {
                                pending: 'Wait a sec...',
                                success: `Hi, you're logged in! 👌`,
                        });
                } catch (error) {
                        toast.error(error.message.slice(10), {
                                position: toast.POSITION.TOP_CENTER,
                        });
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

        return (
                <AuthContext.Provider value={value}>
                        {children}
                        <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                        />
                </AuthContext.Provider>
        );
};
