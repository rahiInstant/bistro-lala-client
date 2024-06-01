import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic()
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser) {
        // TODO: request for token
        const userInfo ={ email: currentUser.email}
        axiosPublic.post('/jwt',userInfo ).then(res => {
          localStorage.setItem('access_token', res.data.access_token)
        })
      } else {
        // TODO: remove token
        localStorage.removeItem('access_token')
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  console.log(user);

  const createUser = (mail, pass) => {
    return createUserWithEmailAndPassword(auth, mail, pass);
  };

  const manualSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, loading, manualSignIn, googleSignIn, logOut, createUser};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
