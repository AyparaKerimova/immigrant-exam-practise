import React from 'react'
import styles from '../assets/css/Card.module.css'
import { Link } from 'react-router-dom'

const ImmigrantCard = ({url,name,description,addBasket,deleteCard,cardId}) => {
  return (
    <>
        <div className={styles.card}>
            <img className={styles.cardImg} src={url} alt="" />
            <div className={styles.cardIcons}>
                <Link to={`details/${cardId}`}><i className="fa-solid fa-info text-warning"></i></Link>
                <button onClick={deleteCard}><i className="fa-solid fa-trash text-danger"></i></button>
                <button onClick={addBasket}><i className="fa-solid fa-basket-shopping text-dark"></i></button>
            </div>
            <h1 className={styles.cardName}>{name}</h1>
            <p className={styles.cardDesc}>{description}</p>
        </div>
    </>
  )
}

export default ImmigrantCard