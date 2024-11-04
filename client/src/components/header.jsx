import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton'; // Import the login button

export const Header = (props) => {
  const { isAuthenticated } = useAuth0();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {!isAuthenticated && (
                  <LoginButton /> // Render login button if not authenticated
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
