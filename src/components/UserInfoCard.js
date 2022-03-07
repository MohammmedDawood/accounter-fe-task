import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserInfoCard = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    // user UserInfoCard card
    <div className="border border-dark mt-4 p-3 rounded-3">
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>
              {currentUser.username[0].toUpperCase() +
                currentUser.username.slice(1)}
            </strong>{" "}
            Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>CreatedAt:</strong> {currentUser.createdAt}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default UserInfoCard;
