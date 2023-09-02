import React from 'react'
import {Gallery} from '../firstSlider/gallery'
import styles from './slider.module.css'

const Slider = () => {

  return (
    <section className={styles.mainContainer}>
        <div className={styles.mainSlider}>
           {
            Gallery.map((item) => {
              return (
                <div className={styles.sliderimg}>
                        <img src={item.imageUrl} alt={item.title} />
                        </div>
              )
            })
           }

        </div>
    </section>
  )
}

export default Slider