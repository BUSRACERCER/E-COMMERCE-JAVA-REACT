import React, { useEffect, useState } from 'react'

function Basket() {
    const [proArr, setProArr] = useState<string[]>([])
useEffect(() => {
  const stArr = localStorage.getItem("basket")
  if(stArr){
    const arr:string[]=JSON.parse(stArr) as string[]
    console.log(arr)

    setProArr(arr)
  }

}, [])
const fncDelete = (index:number)=>{
    // Object.assign =>yeni referans oldu silme işlemini yeni referansa göre yap const newArr = Object.assign([],proArr)
    const newArr = Object.assign([],proArr)
    newArr.splice(index,1)
    setProArr(newArr)
    localStorage.setItem("basket",JSON.stringify(newArr))

}


  return (
    <>
    {
    
        proArr.map((item,index) =>
        <div key={index}>{item}<span onClick={() => fncDelete(index)} role='button'>Delete</span></div>
        )  }
    </>
  )
}

export default Basket