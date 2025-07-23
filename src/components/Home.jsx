import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'

const Home = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      // console.log(response)
      setData(response.data)
    } catch (error) {
      // console.log(error)
    }
  }
  console.log(data)
  useEffect(()=>{
    fetchData()
  },[])
  return data.length >0 ?  (
    <>
    
      <Product data={data} key={data.id} />
   
    </>
  ) : <h1>Loading</h1>
}

export default Home