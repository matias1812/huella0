import { auth } from "../../fireBase";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) {
        console.log("errpr creating auth context")
    }
    return context;
}



export function AuthProvaider ({children}) {
    const [user, setUser] = useState("")

    const register = async (email, password) =>{
        const response = await  createUserWithEmailAndPassword(auth, email, password)
        console.log(response)  
    };
    const login = async (email, password) => {
        const response= await signInWithEmailAndPassword(auth, email, password)
        console.log(response);
    }
    const loginWhithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, responseGoogle)
    }
    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    }  
    useEffect(()=>{
        const suscibed = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
            console.log("no paso")
            setUser("")
            } else{
                setUser(currentUser)
            }
        })
        return () => suscibed()
    }, [])
    return <authContext.Provider value={{
        register,
        login,
        loginWhithGoogle,
        logout
    }}
    >{children}</authContext.Provider>
}