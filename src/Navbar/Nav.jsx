import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Nav.css";
import DarkMode from "../components/DarkMode/DarkMode";
const Nav = ({ handleInputChange, query }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <ToastContainer />
      <nav>
        <div className="nav-container">
          {isAuthenticated && <h5>Hello {user.name}</h5>}
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
          {isAuthenticated ? (
            <button
              className="nav-btn"
              onClick={(e) => {
                toast.success("Successfully logged out");
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="nav-btn"
              onClick={(e) => {
                toast.success("Successfully logged in");
                loginWithRedirect();
              }}
            >
              Login
            </button>
          )}
          <a href="">
            <DarkMode className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
