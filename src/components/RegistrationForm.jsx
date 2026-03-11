import {useState} from "react";
export default function RegistrationForm({ onADDParticipant}){
  
    const[name,setName] =useState("");
    const[team,setTeam] =useState("");
    const[level,setLevel] =useState("");

    const handelSubmit =(e) =>{
        e.preventDefault();

        if(name.length <3)
            return
        const newParticipant ={name,team,level};
        onADDParticipant(newParticipant);
        setName("");
        setTeam("");
        setLevel("");
    };
     return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4 rounded shadow-lg w-96">

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Équipe"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Niveau"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={name.length < 3}
        className={`p-2 rounded text-white ${
          name.length < 3 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
        }`}
      >
        Valider
      </button>

    </form>
  );
}