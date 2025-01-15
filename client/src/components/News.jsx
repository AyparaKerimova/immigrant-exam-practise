import React from 'react'
import styles from '../assets/css/News.module.css'

const News = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className={`${styles.newsCard} col-lg-6 col-md-12 col-sm-12`}>
                        <img className={styles.newsCardImg} src="https://media.glamourmagazine.co.uk/photos/651ed6cff0d2c7f4c5360ab8/16:9/w_1920,h_1080,c_limit/COZY%20AUTUMN%20MAKEUP%20051023%20default.jpg" alt="" />
                        <div className={styles.newsCardIcons}>
                            <button className={styles.newsBtn}>Travel</button>
                            <button className={styles.newsBtn}>Life Style</button>
                        </div>
                        <h1 className={styles.newsCardName}>Portable latest Fashion for young women</h1>
                        <p className={styles.newsCardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <p>31st January, 2018</p>
                    </div>
                    <div className={`${styles.newsCard} col-lg-6 col-md-12 col-sm-12`}>
                        <img className={styles.newsCardImg} src="https://media.glamourmagazine.co.uk/photos/651ed6cff0d2c7f4c5360ab8/16:9/w_1920,h_1080,c_limit/COZY%20AUTUMN%20MAKEUP%20051023%20default.jpg" alt="" />
                        <div className={styles.newsCardIcons}>
                            <button className={styles.newsBtn}>Travel</button>
                            <button className={styles.newsBtn}>Life Style</button>
                        </div>
                        <h1 className={styles.newsCardName}>Portable latest Fashion for young women</h1>
                        <p className={styles.newsCardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <p>31st January, 2018</p>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default News