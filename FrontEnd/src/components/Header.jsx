import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from "./Header.module.css"; // Assuming you have a CSS module for styling

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
<nav className={styles.navbar}>
  <h1 className={styles.navTitle}>Welcome to Piece of Cake Bakery!</h1>
  <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/customPage">Order Cake</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/paymentPage">Payment</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/Auth">Login/Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
