import React, { useState } from "react";

export const Features = (props) => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <br />
          <br />
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>

                  {/* Dropdown Toggle Button */}
                  <button onClick={() => toggleDropdown(i)}>
                    Read More
                  </button>

                  {/* Dropdown Content */}
                  {openDropdown === i && (
                    <div className="dropdown-content">
                      <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                      </ul>
                    </div>
                  )}

                  <br />
                  <br />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
