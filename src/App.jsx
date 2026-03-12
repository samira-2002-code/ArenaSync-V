import Header from "./components/Header";
import Input from "./components/Input";
import Card from "./components/Card";
import RegistrationForm from "./components/RegistrationForm";

import StatusBadge from "./components/StatusBadge";
import { tournamentData } from "./data/TournamentDB";



export default function App() {




  return (
    <div>
      
      <Header/>
       <Input/>
       {tournamentData.map((t)=>( 

        <Card key={t.id}
        tournament={t}/>
       ))
       
      }
      <RegistrationForm />
    </div>
  );
}