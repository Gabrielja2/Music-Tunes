import React from "react";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import AlbumPage from "./pages/Album/AlbumPage";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
