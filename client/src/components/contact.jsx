
export const Contact = () => {
  return (
    <div id="footer" style={{ backgroundColor: "#333", padding: "10px 20px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {/* Left side - Gmail ID */}
      <div style={{ fontSize: "14px" }}>
        <span>📧 yourname@gmail.com</span>
      </div>

      {/* Right side - Social media links */}
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "16px" }}>
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "16px" }}>
          GitHub
        </a>
      </div>
    </div>
  );
};
