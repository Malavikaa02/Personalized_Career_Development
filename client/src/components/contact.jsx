import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import companyLogo from "/home/jenesha/Desktop/Personalized_Career_Development/client/src/images/mainlogo.png"; // Import your company logo image

export const Contact = () => {
  return (
    <div
      id="footer"
      style={{
        backgroundColor: "#fff", // Changed to white
        padding: "20px 30px",
        color: "#000000", // Changed text color to dark for better visibility on white background
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Company Logo and Name */}
      <div style={{ display: "flex", alignItems: "center", fontSize: "20px" }}>
        <img
          src={companyLogo} // Company logo source
          alt="Company Logo"
          style={{ width: "40px", height: "30px", marginRight: "10px" }} // Style the logo
        />
        <span>CAREER DEV</span> {/* Replace with your company name */}
      </div>

      {/* Social Media Icons */}
      <div style={{ display: "flex", gap: "15px" }}>
        <a
          href="https://www.linkedin.com/in/arunesh04/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", fontSize: "16px" }} // Changed text color to dark for better visibility
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Malavikaa02/Personalized_Career_Development"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", fontSize: "16px" }} // Changed text color to dark for better visibility
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};
