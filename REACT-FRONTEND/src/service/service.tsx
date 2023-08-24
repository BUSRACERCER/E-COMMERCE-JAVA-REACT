import axios from "axios";
import {Category, Products, Result } from "../models/Products";
import { ICategory } from "../models/ICategory";


const config = axios.create({
    baseURL:'http://localhost:8090/',
    timeout: 15000,
    auth: {
        username: "bc@bc.com",
        password: "123"
      }
})

export const login = (email: string, password: string) => {
    const sendObj = {
        email: email,
        password: password
    }
    return config.post('user/login', sendObj)
}
export const register = (name:string,surname:string,age:string,email:string,password:string) => {
    const sendObj = {
        name: name,
        surname: surname,
        age: age,
        email:email,
        password:password 
    }
    return config.post('user/register',sendObj)
}

export const allProduct = () => {
    return config.get<Products>('product/list')
}

export const singleProduct = (pid: string) => {
    return config.get<Result>('product/list/'+pid)
}

export const addCard = (userEmail: string, pid: string,title:string,price:string,image:string) => {
    const sendObj = {
            userEmail: userEmail,
            products: [
                {
                    pid:pid,
                    title:title,
                    price:price,
                    image:image
                }
            ]
        }
      
      return config.post('carts/add',sendObj)
}

export const allCategories = () => {
    return config.get<ICategory[]>('category/list')
}

export const categoryProduct = (name:string) =>{
    return config.get<Result[]>('product/category/'+name)
}

export const productAdd = (title:string,detail:string,price:string,images:string,thumbnail:string) => {
    const sendObj = {
        title: title,
        detail: detail,
        price: price,
        images:images,
        thumbnail:thumbnail
    }
    return config.post('product/save',sendObj)
}

export const categoryAdd = (name:string) => {
    const sendObj = {
       name:name
    }
    return config.post('category/save',sendObj)
}