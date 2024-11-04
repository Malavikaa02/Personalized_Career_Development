import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Landing from "./pages/landing";
import LoginButton from "./components/LoginButton";
import home from "./components/Home";
import UserProfile from "./components/UserProfile";
import axios from "axios";

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
        {/* Public Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Protected Route - Redirects to Login if not authenticated */}
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <UserProfile />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>

    </BrowserRouter>
  );
}
