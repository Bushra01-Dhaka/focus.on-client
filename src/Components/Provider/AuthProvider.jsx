import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    // const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log("current user: ", currentUser);
            // if(currentUser)
            // {
            //      //got token and store client
            //     const userInfo = {email: currentUser.email}
            //     axiosPublic.post('/jwt', userInfo)
            //     .then(res => {
            //         if(res.data.token){
            //             localStorage.setItem('access-token', res.data.token);
            //             setLoading(false);
            //         }
            //     })
            // }
            // else {
            //     //DONE: remove token (if token store in client side)
            //     localStorage.removeItem('access-token');
            //     setLoading(false);
            // }
            
        });
        return () => {
            return unSubscribe();
        }
    }, []);

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    } ;

    const googleSignIn = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider); 
    }
    
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
 


    const authInfo = {
           user,
           loading,
           createUser,
           signIn,
           logOut,
           updateUserProfile,
           googleSignIn,
           githubSignIn    

    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;