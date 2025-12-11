// import React, { useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";
// import { AuthContext } from "./AuthContext";
// import axios from "axios";

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [firebaseUser, setFirebaseUser] = useState(null);
//   const [dbUser, setDbUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const registerUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const signInGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logOut = () => {
//     setLoading(true);
//     setDbUser(null);
//     return signOut(auth);
//   };

//   const updateUserProfile = (profile) => {
//     return updateProfile(auth.currentUser, profile);
//   };

//   // observe firebase auth user
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setFirebaseUser(currentUser);
//       if (currentUser?.email) {
//         // fetch role from MongoDB
//         const res = await axios.get(
//           `http://localhost:5000/users?email=${currentUser.email}`
//         );
//         setDbUser(res.data);
//       } else {
//         setDbUser(null);
//       }
//       setLoading(false);
//     });

//     return () => unSubscribe();
//   }, []);

//   // merge: firebaseUser + dbUser
//   const user = {
//     uid: firebaseUser?.uid,
//     email: firebaseUser?.email,
//     displayName: dbUser?.name || firebaseUser?.displayName,
//     photoURL: dbUser?.photoURL || firebaseUser?.photoURL,
//     role: dbUser?.role || "Student",
//   };

//   const authInfo = {
//     user,
//     loading,
//     registerUser,
//     signInUser,
//     signInGoogle,
//     logOut,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // firebase + role merged here
  const [loading, setLoading] = useState(true);

  // REGISTER
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // EMAIL LOGIN
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GOOGLE LOGIN
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // LOGOUT
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // OBSERVE USER STATE (FIREBASE)
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        // Fetch role from DB
        try {
          const res = await fetch(
            `http://localhost:5000/users/${currentUser.email}`
          );
          const dbUser = await res.json();

          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            role: dbUser?.role || "Student",
          });
        } catch (error) {
          console.log("Role fetch error:", error);
          setUser(currentUser); // fallback
        }
      } else {
        setUser(null); // LOGOUT
      }

      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    signInGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
