/* eslint-disable react/jsx-no-constructed-context-values */
import uuid from 'react-uuid';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
        createUserWithEmailAndPassword,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        signOut,
        GoogleAuthProvider,
        signInWithPopup,
        signInWithGoogle,
        updateProfile,
} from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
        const [currentUser, setCurentUser] = useState('');
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState('');
        const provider = new GoogleAuthProvider();

        // * update user profile

        //* Auth with email, password

        const singup = async (email, password) => {
                const user = createUserWithEmailAndPassword(auth, email, password);

                try {
                        setIsLoading(true);
                        // ? Works with toast
                        await toast.promise(user, {
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

        // * Auth with Google
        const singUpWithGoogle = () => {
                signInWithPopup(auth, provider)
                        .then((result) => {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                const credential = GoogleAuthProvider.credentialFromResult(result);
                                const token = credential.accessToken;
                                // The signed-in user info.
                                const { user } = result;
                                // ...
                        })
                        .catch((error) => {
                                // Handle Errors here.
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                toast.error(errorMessage.slice(10), {});
                                // The email of the user's account used.
                                const { email } = error.customData;
                                // The AuthCredential type that was used.
                                const credential = GoogleAuthProvider.credentialFromError(error);
                                // ...
                        });
        };

        // #  WORKS FINE WITH BUTTON ON CLICK
        // # UPDATE diplayName of user
        const updateProfileName = async () => {
                try {
                        await updateProfile(auth?.currentUser, {
                                displayName: 'London',
                        });
                        console.log(currentUser);
                } catch (error) {
                        console.log(error.message);
                }
        };

        // * User data on change
        useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                        setCurentUser(user);
                });
        }, []);

        //* Auth context values
        const value = {
                currentUser,
                isLoading,
                setIsLoading,
                singUpWithGoogle,
                singup,
                login,
                logout,
                setError,
                error,
                updateProfileName,
        };

        return (
                <AuthContext.Provider value={value}>
                        {!isLoading && children}
                        <ToastContainer />
                </AuthContext.Provider>
        );
};
