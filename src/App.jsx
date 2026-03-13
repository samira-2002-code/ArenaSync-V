import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Card from "./components/Card";
import RegistrationForm from "./components/RegistrationForm";
import StatusBadge from "./components/StatusBadge";
import { tournamentData } from "./data/TournamentDB";



export default function App() {



  const [participants, setParticipants] = useState([]);

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
    console.log(participant);
  }


  return (
    <div>
      
      <Header/>
       <Input/>
       {tournamentData.map((t)=>( 

        <Card key={t.id}
        tournament={t}/>
       ))
       
      }
      <RegistrationForm onADDParticipant={addParticipant} />
        
          {participants.map((p, index) => (
        <div key={index}>
          {p.name} - {p.team} - {p.level}
        </div>
      ))}
    </div>
  );
}