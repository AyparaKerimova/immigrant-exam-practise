import React from 'react'
import styles from '../assets/css/Hero.module.css'

const Hero = () => {
  return (
    <>
        <div className={styles.hero}>
            <div className={styles.textBox}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, inventore.</p>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <button className={styles.bookBtn}>Book Consultancy</button>
            </div>
            <img className={styles.girlImage} src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="woman" />
        </div>
    </>
  )
}

export default Hero