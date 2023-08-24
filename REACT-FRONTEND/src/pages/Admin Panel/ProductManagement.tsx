import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../../components/Navbar'
import { Products } from '../../models/Products'
import { productAdd } from '../../service/service'
import '../../App.css';

function ProductManagement() {

  const navigate =  useNavigate()


  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [image, setImage] = useState('')

  const sendForm = (evt:React.FormEvent) =>{
    evt.preventDefault()
    productAdd(title,detail,price,thumbnail,image).then( res => {
      const stData = JSON.stringify(res.data)
      toast.success("Product Add!")
      navigate('/home')
    }).catch(err => {
      console.log(err.message)
      toast.error("Error")
    })

  }

  return (
    <>
     <div style={{color:"orangered"}}>
       <h2 className='header1' style={{marginTop:20}} >Product Add</h2>
      <form onSubmit={sendForm} className='col-sm-5'>
          <div className='mb-3'>
              <input onChange={(evt) => setTitle(evt.target.value)} className='form-control' placeholder='Title' />
          </div>
          <div className='mb-3'>
              <input onChange={(evt) => setDetail(evt.target.value)} className='form-control' placeholder='Detail' />
          </div>
          <div className='mb-3'>
              <input onChange={(evt) => setPrice(evt.target.value)} className='form-control' placeholder='Price' />
          </div>
          <div className='mb-3'>
              <input onChange={(evt) => setThumbnail(evt.target.value)} className='form-control' placeholder='İmage' />
          </div>
          <div className='mb-3'>
              <input onChange={(evt) => setImage(evt.target.value)} className='form-control' placeholder='Image' />
          </div>
          <button className='btn btn-danger' >Product Add</button>
      </form>
      </div>
    </>
  )
}

export default ProductManagement