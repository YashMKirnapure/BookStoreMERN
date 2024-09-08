import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
// import list from "../../public/list.json";
// import Link from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try
      {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      }
      catch(error)
      {
        console.log("error: ",error);
      }
    };
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-orange-300">here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam
            provident amet rem nemo adipisci, dolorum voluptatum odio nostrum
            mollitia!
          </p>
          
          {/* <Link to="/"> */}
            <button className="mt-6 px-4 py-2 rounded-md bg-orange-300 text-white border-4 hover:bg-orange-500 duration-300">
              Back
            </button>
          {/* </Link> */}

        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
