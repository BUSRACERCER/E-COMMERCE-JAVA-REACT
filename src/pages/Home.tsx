import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import { allProduct } from '../service'
import { Product } from '../models/DummProducts'

function Home() {
    const [arr, setArr] = useState<Product[]>([])

    useEffect(() => {

        allProduct().then(res =>{
           
            setArr(res.data.products)
        }).catch(err => {

        })
    
      }, [])
    
      return (
        <>
            <h2>Products</h2>
            <div className='row' >
            { arr.map( (item, index) => 
                <div className='col-sm-4' key={index}>
                    <div className="card">
                        <img src={item.thumbnail} className="card-img-top" style={{height:150}}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.category}</p>
                            <p className="card-text">{item.price}$</p>
                            <NavLink to={'/detail/'+item.id} className="btn btn-primary">Detail</NavLink>
                           
                        </div>
                    </div>
                </div>
            )}
            </div>
        </>
      )
    }
    
    export default Home