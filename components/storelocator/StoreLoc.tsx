import React, { useState } from "react";
import { Gallery } from "../firstSlider/gallery";
import styles from "./StoreLoc.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const StoreLoc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevCurrentIndex: number) =>
      prevCurrentIndex === Gallery.length - 1 ? 0 : prevCurrentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevCurrentIndex: number) =>
      prevCurrentIndex === 0 ? Gallery.length - 1 : prevCurrentIndex - 1
    );
  };
  return (
    <section className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h2>Store locator </h2>
        <p>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </p>
        <button className={styles.btn}>
          Find a nearby store
          <ArrowForwardIcon />
        </button>
      </div>
       {/* <div className={styles.arrowbtn} onClick={prevSlide}>
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div> */}
      <div className={styles.imgContainer}>
       
        <div className={styles.imgList}>
          {Gallery.map((item, index) => {
            return (
              <div key={index} className={styles.image}>
                <img src={item.imageUrl} alt={item.title} />
              </div>
            );
          })}
        </div>
        {/* <div className={styles.arrowbtn2} onClick={nextSlide}>
          <div className={styles.arrow2}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default StoreLoc;
