import React, { useEffect, useState } from 'react'
import { API_URL } from '../api'
import { Link } from 'react-router-dom'

const FirmCollection = () => {
    const [firmData, setFirmData] = useState([])
    
    const firmDataHandler = async ()=>{
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)
        const newFirmData = await response.json()
        setFirmData(newFirmData.vendors)
        console.log("firm data: ", newFirmData)
        } catch (error) {
            alert("Firm data not fetched")
            console.log("Firm data not fetched:", error)
        }
    }

    useEffect(()=>{
        firmDataHandler()
    },[])

  return (
    <>
    <h3>Restaurants with online food delivery in Bangalore</h3>
        <section className='firmSection'>
        {firmData.map((apple)=>{
            return(
                <>
                    {apple.firm.map((item)=>{
                        return(
                            <Link to={`/products/${item._id}`}>
                            <div className='firmGroupBox'>
                            <div className="firmGroup">
                                <img src={`${API_URL}/uploads/${item.image}`} />
                               <div className="firmOffer">
                               {item.offer}
                               </div>
                            </div>
                            <div className='firmDetails'>
                            <strong>
                            {item.firmName}
                            </strong><br />
                            <div className='firmArea'>{item.region.join(', ')}</div>
                            <div className='firmArea'>{item.area}</div>
                            </div>
                            </div>
                            </Link>
    
                        )
                    })}
                </>
            )
        })}
      </section>
    </>
  )
}

export default FirmCollection
