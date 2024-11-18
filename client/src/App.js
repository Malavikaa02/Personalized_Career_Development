// App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import Landing from "./pages/landing";
import HomePage from "./pages/HomePage";
import UserProfile from "./components/UserProfile";
import FrontendRM from "./pages/Frontendrm"
import FullstackRM from "./pages/Fullstackrm";
import AiEngineerRM from "./pages/AiEngineerrm";
import DevopsRM from "./pages/Devopsrm";
import BackendRM from "./pages/Backendrm";


export default function App() {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      // Save user data to MongoDB when authenticated
      axios
        .post("http://localhost:5000/saveUser", {
          name: user.name,
          email: user.email,
          picture: user.picture,
        })
        .then((response) => {
          console.log("User data saved:", response.data);
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
        });
    }
  }, [isAuthenticated, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <UserProfile /> : <Navigate to="/" replace />
          }
        />
        <Route path="/frontend-rm" element={<FrontendRM />} />
        <Route path="/full-stack-rm" element={<FullstackRM />} />
        <Route path="/ai-engineering-rm" element={<AiEngineerRM />} />
        <Route path="/devops-rm" element={<DevopsRM />} />
        <Route path="/backend-rm" element={<BackendRM />} />
      </Routes>
    </BrowserRouter>
  );
}
