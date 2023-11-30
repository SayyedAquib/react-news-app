import React from "react";
import { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";

function AuthLayout() {
  const { onAuthStateChanged, auth, setUser } = useContext(NewsContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => (user ? setUser(user) : setUser(null)));
  }, []);
}

export default AuthLayout;
