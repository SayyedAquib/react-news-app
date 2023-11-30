import { auth } from '../firebase';

// Functions for user registration and login
export const register = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
