import React from "react";
import styles from "./banner.module.css";
import { Gallery } from "@/components/billbord/gallery";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";


const BillBord = () => {
  return (
    <div className={styles.mainBanner}>
      <div className={styles.subBanner}>
        <h1 className={styles.mainText}>Aeosp</h1>
        <div className={styles.subtext}>
          <p>Bar Soaps</p>
          <h2>A body care classic, reimagined </h2>
          <p>
            Breathing new life into the humble bar soap are Nurture, Polish and
            Refresh—three additions to the range, each imparting a unique
            constellation of benefits. 
          </p>
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillBord;
