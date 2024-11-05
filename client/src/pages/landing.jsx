// src/pages/Landing.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Team } from "../components/Team";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import LoginButton from "../components/LoginButton";
import "./css/landing.css";

const Landing = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    setLandingPageData(JsonData);
    // Redirect to /home if the user is already authenticated
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      
      {/* "Continue with Google" login button */}
      <div className="login-container">
        <LoginButton /> {/* This component will render the Google login button */}
      </div>
    </div>
  );
};

export default Landing;
