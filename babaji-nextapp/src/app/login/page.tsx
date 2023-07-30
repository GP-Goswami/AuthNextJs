"use client";
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function loginPage():React.JSX.Element
{
    const[user,setUser]=React.useState({
        email:"",
        password:"",
        
            })
            const onLogin=async()=>{

            }
    
    return(
        <div className='flex text-center text-stone-700'>
            <h1 >Login</h1>

                <label htmlFor="">email</label>
                <input className='p2 border border-y-gray-300 rounded-lg-mb4 focus:outline-none focus- border-x-gray-600'
                id='email' 
                type='email'
                value={user.email}
                onChange={(e) => setUser({...user,email:e.target.value})}
                placeholder='email'/>
                <br />

                <label htmlFor="">password</label>
                <input className='p2 border border-y-gray-300 rounded-lg-mb4 focus:outline-none focus- border-x-gray-600'
                id='password' 
                type='password'
                value={user.password}
                onChange={(e) => setUser({...user,password:e.target.value})}
                placeholder='password'/>
                <br />

                <button
                onClick={onLogin}
                className="p-2 border border-gray-50 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login
                </button>
           {/* window.location.href = "D:\\Web develop\\basics.html"; */}
           <Link href='/Signup'>
            Visit Signup Page
           </Link>
        </div>
    )

}