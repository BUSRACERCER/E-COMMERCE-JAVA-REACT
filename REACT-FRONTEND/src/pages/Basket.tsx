import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Products, Result } from '../models/Products'
import { singleProduct } from '../service/service'

function Basket() {


  const navigate = useNavigate()
  const params = useParams()
  const pid = params.pid
  const title = params.title
  const price = params.price


    const [proArr, setProArr] = useState<string[]>([])
    useEffect(() => {
      const stArr = localStorage.getItem("basket")
      if(stArr) {
        const arr:string[] = JSON.parse(stArr) as string[]
        console.log('Arr : '+arr)
        setProArr(arr)
      }
    }, [])

    
   
    const [item, setItem] = useState<Result>()
    const [bigImage, setBigImage] = useState('')
    useEffect(() => {
      if(pid){
        singleProduct(pid).then( res => {
          setItem(res.data)
          setBigImage(res.data.thumbnail)
          
        }).catch(err => {
          //alert(err.message)
          navigate('/')
        })
      }
    }, [])
          
          
        
    
    const fncDelete =(index: number) => {
        const newArr = Object.assign([],proArr)
        newArr.splice(index, 1)
        setProArr(newArr)
        localStorage.setItem("basket", JSON.stringify(newArr))
    }

  return (
    <> 
       {proArr.map( (item, index) =>
            <div key={index}> {item}
            <img src={item} className='img-thumbnail'/>
            <span onClick={ () => fncDelete(index)} role='button' className='btn btn-danger' >Delete</span>
            </div>
        )} 
    </>
  )
}

export default Basket