import React from 'react'
import Hero from '../components/Hero'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/api';
import ImmigrantCard from '../components/ImmigrantCard';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { BasketContext } from '../App';
import Features from '../components/Features';
import News from '../components/News';

const Home = () => {
    const [immigrants,setImmigrants]= useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const {addToBasket} = useContext(BasketContext);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const resp = await axios.get(BASE_URL);
            setImmigrants(resp.data.data)
            setFilteredData(resp.data.data)
            console.log(resp.data.data);
        }
        fetchData();
    },[]);

    function handleDelete(id){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(BASE_URL+`/${id}`)
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              window.location.reload();
            } else if (
             
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    };

    const filteredImmigrants = immigrants.filter((w) => w.name.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    const handleChange = (e) => {
        let sortedImmigrant = null;
        console.log(e.target.value);
        if (e.target.value === "asc") {
            sortedImmigrant = [...immigrants].toSorted((a, b) => a.name.localeCompare(b.name))
        } else if (e.target.value === "desc") {
            sortedImmigrant = [...immigrants].toSorted((a, b) => b.name.localeCompare(a.name))
        } else {
            sortedImmigrant = [...filteredData]
        }
        setImmigrants([...sortedImmigrant])
    }
  return (
    <>
        <Hero/>
        <div style={{textAlign:'center',marginTop:"36px"}}>
            <h2>Requirements to be Immigrants</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quibusdam dolorem nobis voluptatibus. Alias et repudiandae, magnam accusamus totam ab.</p>
        </div>
        <div className='container mt-3'>
            <div className='row'>
                <select name="" onChange={handleChange}>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                    <option value="default">default</option>
                </select>
                <input type="text" placeholder='search' onChange={(e)=>setSearchQuery(e.target.value)}/>
                {
                    filteredData.length>0 && filteredImmigrants.map((immigrant)=>{
                        return(
                            <div className='col-lg-4 col-md-6 col-sm-12' key={immigrant._id}>
                                <ImmigrantCard addBasket={()=>addToBasket(immigrant)} cardId={immigrant._id} name={immigrant.name} url={immigrant.imageUrl} description={immigrant.description} deleteCard={()=>handleDelete(immigrant._id)}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div style={{textAlign:'center',marginTop:"36px"}}>
            <h2>Our Unique Features that can impress you</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quibusdam dolorem nobis voluptatibus. Alias et repudiandae, magnam accusamus totam ab.</p>
        </div>
        <Features/>
        <div style={{textAlign:'center',marginTop:"36px"}}>
            <h2>Latest News from our Blog</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
        <News/>
    </>
  )
}

export default Home