import React from "react";
import {useNavigate} from 'react-router-dom'

const Service = ({ service }) => {
  const {id, name, price, description, img } = service;
  const navigate = useNavigate();
  const handleDetail = (id)=>{
       navigate(`/service/${id}`)
  }
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg p-6">
      <img className="w-full" src={img} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base font-semibold">Price: ${price}</p>
      </div>
      <div className="grid md:grid-cols-1">
        <button onClick={()=>handleDetail(id)} className="">
          <span className="w-full bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700">
            {name}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Service;
