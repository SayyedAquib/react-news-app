import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import NewsContainer from "./components/NewsContainer";
import Signup from "./components/Signup";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import NewsCard from "./components/NewsCard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsContextProvider from "./context/NewsContextProvider";

function App() {
  return (
    <Router>
      <NewsContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/news" element={<NewsContainer />} />
            <Route path="/article" element={<NewsCard />} />
          </Route>
        </Routes>
      </NewsContextProvider>
    </Router>
  );
}

export default App;
