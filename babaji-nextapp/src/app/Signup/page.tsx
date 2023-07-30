'use client'
import React,{useEffect} from 'react';
import link from "next/link";
import { useRouter } from 'next/navigation';
import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';

// those who talk to databse use sync
export default function SignupPage(): React.JSX.Element
{
    const router=useRouter();
    const[user,setUser]=React.useState({
        email:"",
        password:"",
        username:"",
    })

    const [buttonDisabled,setButtonDisabled]=React.
     useState(false);
    const [loading, setLoading]=React.useState(false);
        const onSignup=async()=>{
            const response=await axios.post ("/api/user/login/signup", user);
            try{
                
               
                console.log("signup success",response.data);
                router.push("/login");
            }
            catch(error){
                
                console.log("signup success",response.data)
                // toast.error(error.message)
            }  
            finally{
                setLoading(false);
            }
        }


        useEffect(()=>{
            if(user.email.length>0&& user.password.length>
                0 && user.username.length>0)
                {
                    setButtonDisabled(false);
                }
                else{
                    setButtonDisabled(true);
                }
        }, [user]);
        return(
        <div className='text-center background to-black'>
            <h1>{loading?"processing":"Signup"}</h1>
            <Link href={"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/11/05/c486165b602df00f7ecdb26e0819fb9d.jpg?w=1366&quality=80&zoom=1&ssl=1"}>
            {/* <img id={"myImage"} src={"https://images.hindustantimes.com/img/2022/11/05/550x309/satsang_1667637552811_1667637571826_1667637571826.jpg"} alt={"babaji ka photo"}width={"800"} height={"600"}> */}
                </Link>
            
            <div className=' justify-center flex flex-col p-2 items-center gap-3'>
            <Image alt='hi' src={require("../../../public/next.svg")}/>
            <Image src={"https://images.hindustantimes.com/img/2022/11/05/550x309/satsang_1667637552811_1667637571826_1667637571826.jpg"} alt={"babaji ka photo"}width={"600"} height={"400"}/>
            </div>
            <form action="" className='flex justify-center items-center gap-3 flex-col p-2'>
                <label htmlFor="">username</label>
                <input className=' p2 border border-y-gray-300 rounded-lg-mb4 focus:outline-none focus- border-x-gray-600'
                id='username' 
                type='text'
                value={user.username}
                onChange={(e) => setUser({...user,username:e.target.value})}
                placeholder='username'/>
                <br />

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

            <div>
           <button 
           onClick={onSignup}
           className='p-2 border border-gray-50 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
           >{buttonDisabled?"No signup": "Signup"}</button>
           {/* window.location.href = "D:\\Web develop\\basics.html"; */}
           <Link href='/login'>
            Visit Login Page
           </Link>
           </div>
            </form>
        </div>
    )
}