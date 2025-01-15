import React from 'react'
import styles from '../assets/css/Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h5>We believe we helps people
                    for happier lives
                </h5>
                <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
                <div className={styles.number}>
                    <p>+880 123 12 658 439 </p>
                    <div className={styles.phone}>
                        <i className="fa-solid fa-phone" style={{color:"white"}}></i>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header