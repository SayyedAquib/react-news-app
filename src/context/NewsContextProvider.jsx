import NewsContext from "./NewsContext";
import { useState, useEffect } from "react";
import { getNews } from "../utils/NewsApi";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBdcGyKaMukUVzMUZ-PjlLuPA8MCoDFXIc",
  authDomain: "react-news-app-50599.firebaseapp.com",
  projectId: "react-news-app-50599",
  storageBucket: "react-news-app-50599.appspot.com",
  messagingSenderId: "317952529898",
  appId: "1:317952529898:web:1b6fdeb7c31232789cce93",
  measurementId: "G-ZGJCB1TWZR",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const NewsContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [news, setNews] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/news");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/news");
        }
      });
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    signOut(auth);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        isGrid,
        setIsGrid,
        createUser,
        loginUser,
        email,
        setEmail,
        password,
        setPassword,
        auth,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
