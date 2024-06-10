import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

               // or
               
    // const [data,setdata] =useState([])
    // useEffect(()=>{
    //    fetch('https://api.github.com/users/sidd1562')
    //    .then(response => response.json())
    //    .then(data =>{
    //     console.log(data);
    //       setdata(data)
    //    })
    // },[])

  return (
    <div className='text-center m-4 bg-slate-600 text-white p-4 text-3xl'>
       GitHub Follwers : {data.followers}

       <img src={data.avatar_url} alt='Git picture' width={300}></img>

    </div>
  )
}

export default Github

export const githubinfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/sidd1562')
    return response.json()
}