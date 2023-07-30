/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{domains:["images.hindustantimes.com"]},
    redirects:()=>{
        return [
            {
                source:"/home",
                destination:"/Signup",
                permanent:false,
            }
        ]
    }
}

module.exports = nextConfig
