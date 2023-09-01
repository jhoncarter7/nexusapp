import React from "react";
import styles from "./NavBar.module.css";

import SearchIcon from '@mui/icons-material/Search';
const NavBar = () => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.subNavbig}>
        <ul className={styles.firstNav}> 
          <li>Skin Care</li>
          <li>Body&Hand</li>
          <li>Hair</li>
          <li>Fragrance</li>
          <li>Home</li>
          <li>Kits & Travel</li>
          <li>Gifts</li>
          <li>Read</li>
          <li>Stores</li>
          <li>Facial Appointments</li>
          <SearchIcon/>
        </ul>
      
      </div>
      <div className={styles.subNavsmall}>
        <ul className={styles.firstNav}>
            <li>Log in</li>
            <li>Cabinet</li>
            <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
