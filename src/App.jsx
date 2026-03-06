import Header from "./components/Header";
import Input from "./components/Input";
import StatusBadge from "./components/StatusBadge";
import { tournamentData } from "./data/TournamentDB";



export default function App() {


  const badges = [];

  for (let i = 0; i < tournamentData.length; i++) {
    badges.push(
      <StatusBadge key={i} status={tournamentData[i].status} />

    );
  }

  return (
    <div>
      
      <Header/>
       <Input/>
      {badges}
    </div>
  );
}