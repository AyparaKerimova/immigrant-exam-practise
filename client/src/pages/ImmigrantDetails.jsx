import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/api';
import styles from '../assets/css/Details.module.css'

const ImmigrantDetails = () => {
    const {id} = useParams();
    const [immigrant,setImmigrant] = useState({});
    useEffect(()=>{
        async function fetchData(){
            const resp = await axios.get(BASE_URL+`/${id}`);
            console.log(resp.data.data);
            setImmigrant(resp.data.data)
        }
        fetchData();
    })
  return (
    <>
       <div className="bg-gray-900 py-20">
    <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                    Welcome <br className="hidden md:block" />
                    <span className="text-indigo-500">{immigrant.name}</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                {immigrant.description}
                </p>
                
            </div>
            <div className={styles.detailsImg}>
                <img src={immigrant.imageUrl} alt="Hero Image" className="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default ImmigrantDetails