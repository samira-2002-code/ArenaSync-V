import {useState} from "react";
export default function RegistrationForm({ onADDParticipant}){
  
    const[name,setName] =useState("");
    const[team,setTeam] =useState("");
    const[level,setLevel] =useState("");

    const handelSubmit =(e) =>{
        e.preventDefault();

        if(name.length <3)
            return
        const newParticipant ={
          name,
          team,
          level};
        onADDParticipant(newParticipant);
        setName("");
        setTeam("");
        setLevel("");
    };
     return (
    <form onSubmit={handelSubmit} className="flex flex-col gap-6 border p-6 rounded shadow-lg w-84 bg-blue-100 ml-4 mr-4 mt-4  mb-8  md:ml-20">

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-full"
      />

      <input
        type="text"
        placeholder="Équipe"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        className="border p-2 rounded-full"
      />

      <input
        type="text"
        placeholder="Niveau"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="border p-2 rounded-full"
      />

      <button
        type="submit"
        disabled={name.length < 3}
        className={`p-2 rounded text-white ${
          name.length < 3 ? "bg-gray-500 cursor-not-allowed rounded-full w-40 ml-6  " : "bg-blue-500"
        }`}
      >
        Valider
      </button>

    </form>
  );
}