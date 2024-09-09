import React from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => 
  {
    const userInfo = {
      email : data.email,
      password : data.password,
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data)
      {
        toast.success("Logged in Successfully!");
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
      if(err.response)
      {
        console.log(err);
        toast.error("Error: "+err.response.data.message);
      }
    });
  }

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            
            {/* Email */}
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true})}
                />
                <br />
                 {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input type="text" placeholder="Enter your password" className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true})}
                />
                <br />
                {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4 ">
                <button className="bg-orange-300 text-white rounded-md px-3 py-1 hover:bg-orange-500 duration:200">Login</button>
                <p>Not registered? 
                  <span className="underline text-blue-400 cursor-pointer">
                    Signup
                  </span>
                </p>
            </div>
                
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
