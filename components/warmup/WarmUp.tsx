import React from 'react'
import styles from "./WarmUp.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from 'next/image';

const WarmUp = () => {
  return (
   <section  className={styles.mainBanner}>

      <div className={styles.subBanner}>
        <div className={styles.subtext}>
          <p>Bar Soaps</p>
          <h2>A body care classic, reimagined </h2>
          <p>
          In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.
          </p>
         <button className={styles.btn}>
          Discover Bar Soap
          <ArrowForwardIcon />
         </button>
        </div>
      </div>
  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80" alt="logo" style={{width: '30vw'}}/>
   </section>
  )
}

export default WarmUp