import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,} from 'firebase/auth';
import { auth } from '../firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const updateUser = (updatedData) => {
       return updateProfile(auth.currentUser, updatedData);
     };
     
   
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
     } 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log("inside useeffect on auth state changed",currentUser);

            setUser(currentUser);
            setLoading(false)

})

        return ()=>{
            unSubscribe()
        }
     },[])


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updateUser
        }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;