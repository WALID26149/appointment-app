"use client"

import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Api from './../_utils/Api'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {
    const [categoryList,setGategoryList] = useState([])

    useEffect(()=>{
        getCategoryList()
    },[])
    const getCategoryList=()=>{
        Api.getCategory().then(resp =>{
            setGategoryList(resp.data.data)
            console.log(resp.data.data)
        })
    }
  return (
    <div className='mb-10 items-center flex flex-col'>
        <h2 className='font-bold text-4xl mb-7 '><span className='text-lime-600'>Search</span>    Categories</h2>

        <div className='flex w-full max-w-sm items-center'>
        <Input type="email" placeholder="Email"/>
        <Button type="submit">Subscribe</Button>
        </div>

        <div className='grid  md:grid-cols-3 sm:grid-cols-1 mt-8'>

         {categoryList.map((cat,index) =>(
            <Link href={`/search/${cat.name}`} key={index} className='flex flex-col text-center items-center p-5 bg-lime-200 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'>
                <Image src={`http://localhost:1337${cat?.icon[0]?.url}`}
                    width={70}
                    height={70}
                    alt={cat.name}
                />
                <label>{cat?.name}</label>

            </Link>

         ))}
           </div>
    </div>
  )
}

export default CategorySearch