import React from 'react'
import { useContext } from 'react'
import { BasketContext } from '../App'

const Basket = () => {
    const {basket,removeFromBasket,clearBasket} =useContext(BasketContext);

  return (
    <>
        <button className='bg-red-600 p-1 ms-2 rounded text-white' onClick={()=>clearBasket()}>Clear All </button>
        <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desc</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {
        basket && basket.map((item)=>{
            return(
            <tr>
      <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
      <td className="px-6 py-4 whitespace-nowrap w-24"><img src={item.imageUrl} alt="" /></td>
      <td className="px-6 py-4 whitespace-nowrap w-24"><button onClick={()=>removeFromBasket(item._id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
    </tr>)
        })
    }   
  </tbody>
</table>
    </>
  )
}

export default Basket