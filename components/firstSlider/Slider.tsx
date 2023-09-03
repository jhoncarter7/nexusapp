import React, { useRef } from "react";
import { Gallery } from "../firstSlider/gallery";
import styles from "./Slider.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider = () => {
  const sliderRef =  useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const handlePreviousClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };
  return (
    <section className={styles.mainContainer}>
      <div className={styles.arrowbtn} onClick={handlePreviousClick}>
      <div className={styles.arrow} >
        <span></span>
        <span></span>
        <span></span>
    </div>
      </div>
      
      <div className={styles.mainSlider} ref={sliderRef} >
        <div className={styles.subtext}>
          <p>For the body</p>
          <h2>An expression of care </h2>
          <p>
            Aesop formulations offer the body deserving care, to cleanse,
            replenish, and nourish skin. Each product is a sensory pleasure to
            use with its own delightful aroma.
          </p>
          <button className={styles.btn}>
            See all Body Care
            <ArrowForwardIcon />
          </button>
        </div>
        {Gallery.map((item, index) => {
          return (
            <div className={styles.sliderimg} key={index}>
              <img src={item.imageUrl} alt={item.title} />
            </div>
          );
        })}
         
      </div>
      <div className={styles.arrowbtn2} onClick={handleNextClick}>
      <div className={styles.arrow2} >
        <span></span>
        <span></span>
        <span></span>
    </div>
      </div>
    </section>
  );
};

export default Slider;
