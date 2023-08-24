import React, { useEffect, useState } from 'react'
import { allCategories, allProduct } from '../service/service'
import { Category, Result } from '../models/Products'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { IUser } from '../models/IUser'
import { decrypt } from '../util'
import { ICategory } from '../models/ICategory'
import '../App.css';



function Home() {

  const [arr, setArr] = useState<Result[]>([])
  const [catArr, setCatArr] = useState<ICategory[]>([])
  

    useEffect(() => {
      allProduct().then( res =>{
          setArr(res.data.result)
      }).catch(err => {

      })
    }, [])

    useEffect(() => {
      allCategories().then( res =>{
          setCatArr(res.data)
      }).catch(err => {

      })
    }, [])


    const navigate = useNavigate()
    const stSession = sessionStorage.getItem('user')
    var user:IUser
    if( stSession !== null ){
        const plainText = decrypt(stSession)
        user = JSON.parse(plainText) as IUser
    }
    

  return (
    <>
        <Navbar user={user!}/>
        
         <div className='row'>
        
            <div className='col-sm-4'>
                
              {catArr.map((item,index) =>
                <ul key={index} className="list-group">
                  <NavLink style={{marginTop:10}} className="list-group-item"  to={'/category/'+item.name} aria-current="true">{item.name}</NavLink>
                </ul>  
              )}
            </div>
        
        { arr.map((item,index)=>
          <div className='col-sm-4' key={index}>
            <div style={{marginTop:10}} className="card">
              <img src={item.thumbnail} style={{height: 220,}} className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>     
                <p className="card-text">{item.detail}</p>
                <p className="card-text">{item.price}$</p>
                <NavLink to={'/detail/'+item.pid} className="btn btn-primary" >Detail</NavLink>
              </div>
            </div>
          </div>
          
        ) }
        </div>
    </>
  )
}

export default Home