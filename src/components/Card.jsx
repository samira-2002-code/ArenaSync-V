import {useState} from "react";
import StatusBadge from "./StatusBadge";

export default function Card({ tournament }) {
  const [isRegistered,setisRegistered]= useState(false);
  const toggleRegistered =()=>{
    setisRegistered(!isRegistered);
  };

  return (
    <div className="border bg-gray-200 ml-4 p-8 mr-4 rounded-lg mb-8">
      <h2>{tournament.title}</h2>

      <p>{tournament.description}</p>

      <div>
        <i className="fa-regular fa-user"></i>
        <p>{tournament.participantsCount}</p>

        <StatusBadge status={tournament.status} />
      </div>

     <button
            onClick={toggleRegistered}
            className={`mt-4 px-4 py-2 rounded-full text-white ${
             isRegistered ? "bg-red-500" : "bg-blue-500"
            }       `}
>
            {isRegistered ? "Se désinscrire" : "S'inscrire"}
    
    </button>
    </div>
  );
};
