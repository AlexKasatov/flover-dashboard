/* eslint-disable react/jsx-no-constructed-context-values */
import uuid from 'react-uuid';
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
                        setIsLoading(true);
                        await toast.promise(createUserWithEmailAndPassword(auth, email, password), {
                                pending: 'Wait a sec...',
                                success: `Hi, you're all set! 👌`,
                                toastId: uuid(),
                        });
                } catch (error) {
                        setError(error);
                        toast.error(error.message.slice(10), {
                                position: toast.POSITION.TOP_CENTER,
                                toastId: uuid(),
                        });
                } finally {
                        setIsLoading(false);
                }
        };

        const login = async (email, password) => {
                try {
                        setIsLoading(true);
                        await toast.promise(signInWithEmailAndPassword(auth, email, password), {
                                pending: 'Wait a sec...',
                                success: `Hi, you're logged in! 👌`,
                                toastId: uuid(),
                        });
                } catch (error) {
                        toast.error(error.message.slice(10), {
                                position: toast.POSITION.TOP_CENTER,
                                toastId: uuid(),
                        });
                } finally {
                        setIsLoading(false);
                }
        };

        const logout = async () => {
                try {
                        setIsLoading(true);
                        await toast.promise(signOut(auth), {
                                pending: 'Wait a sec...',
                                success: `Hi, you're logged out! 👌`,
                                toastId: uuid(),
                        });
                } catch (error) {
                        await setError(error);
                        toast.error(error.message.slice(10), {
                                position: toast.POSITION.TOP_CENTER,
                                toastId: uuid(),
                        });
                } finally {
                        setIsLoading(false);
                }
        };

        useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                        setCurentUser(user);
                });
        }, []);

        // eslint-disable-next-line react-hooks/exhaustive-deps

        const value = { currentUser, isLoading, setIsLoading, singup, login, logout, setError, error };

        // const value = useMemo(
        //         () => ({ currentUser, isLoading, setIsLoading, singup, login, logout, setError, error }),
        //         // eslint-disable-next-line react-hooks/exhaustive-deps
        //         [currentUser]
        // );

        return (
                <AuthContext.Provider value={value}>
                        {children}
                        <ToastContainer />
                </AuthContext.Provider>
        );
};
