import React, { useState } from "react";
import style from "./SmallBanner.module.css";
const SmallBanner = () => {
  // useState()
  return (
    <div className={style.mainbanner}>
      <div className={style.banner1}>
        <p>
          Trained Aesop consultations are available to provide bespoke skin care
          advise. <a  href="/">Book a video consultation</a>
        </p>
      </div>
      <div className={style.banner2}>
       <p>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400</p>
      </div>
    </div>
  );
};

export default SmallBanner;
