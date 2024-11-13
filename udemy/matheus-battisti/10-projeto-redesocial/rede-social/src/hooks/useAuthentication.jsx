import { db } from '../firebase/config';

import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
   signOut,
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);

   // cleanup
   // deal with memory leak
   const [cancelled, setCancelled] = useState(false);

   const auth = getAuth();

   function checkIfIsCancelled() {
      if (cancelled) return;
   }

   // Register
   const createUser = async data => {
      checkIfIsCancelled();

      setLoading(true);
      setError(null);

      try {
         const { user } = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
         );

         await updateProfile(user, {
            displayName: data.displayName,
         });

         setLoading(false);

         return user;
      } catch (err) {
         const errorMessage = err.message;
         let systemErrorMessage;

         if (errorMessage.includes('Password')) {
            systemErrorMessage =
               'A senha precisa conter pelo menos 6 caracteres.';
         } else if (errorMessage.includes('email-already')) {
            systemErrorMessage = 'E-mail já cadastrado.';
         } else {
            systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.';
         }

         setLoading(false);
         setError(systemErrorMessage);
      }
   };

   // Logout - Sign out
   const logout = () => {
      checkIfIsCancelled();
      signOut(auth);
   };

   // Login - Sign in
   const login = async data => {
      checkIfIsCancelled();
      setLoading(true);
      setError(false);

      try {
         await signInWithEmailAndPassword(auth, data.email, data.password);
         setLoading(false);
      } catch (err) {
         const errorMessage = err.message;
         let systemErrorMessage;
         console.log(err)

         if (errorMessage.includes('invalid-credential')) {
            systemErrorMessage = 'Login ou senha inválida';
         } else {
            systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.';
         }

         setError(systemErrorMessage);
         setLoading(false);
      }
   };

   useEffect(() => {
      return () => setCancelled(true);
   }, []);

   return {
      auth,
      createUser,
      error,
      loading,
      logout,
      login
   };
};
