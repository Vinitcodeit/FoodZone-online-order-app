import React, { useEffect, useState } from 'react'
import { API_URL } from '../api'
import { useParams } from 'react-router-dom'

const ProductMenu = () => {
    const [products, setProducts] = useState([])
    const {firmId} = useParams()

    const productHandler = async()=>{
        try {
            const response = await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductData = await response.json()
            setProducts(newProductData.products)
            console.log(newProductData)
        } catch (error) {
            console.error("Failed to fetch product", error);
            
        }
    }

    useEffect(()=>{
        productHandler()
    },[])

  return (
    <div>
     <h3>This is firm Id {firmId}</h3>
    </div>
  )
}

export default ProductMenu
