import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../assets/css/Navbar.module.css'

const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <Link className={styles.navbarItem} to='/'>Home</Link>
            <Link className={styles.navbarItem} to='basket'>Basket</Link>
            <Link className={styles.navbarItem} to='add-immigrant'>Add Immigrant</Link>
        </div>
    </>
  )
}

export default Navbar