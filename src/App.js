import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <BrowserRouter history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {`${
                    currentUser.username[0].toUpperCase() +
                    currentUser.username.slice(1)
                  }`}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container bg-white p-4 mt-5">
          <Routes>
            <Route exact index path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
