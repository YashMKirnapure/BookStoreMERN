import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => 
{
    const [authUser,setAuthUser] = useAuth()
    const handleLogout =()=>
    {
        try
        {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logged out successfully!")
            
        setTimeout(()=>{
          window.location.reload(); //using this we don't need to refresh our website to reflect change
        },3000)
        }
        catch(err)
        {
            toast.error("Error: "+err.message)
            setTimeout(()=>{},2000);
        }
    };
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>
            Logout
        </button>      
    </div>
  )
}

export default Logout
