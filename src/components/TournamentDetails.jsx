import StatusBadge from "./StatusBadge";

const participants = [
  { id: "u1", name: "Ethan Miler", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u1" },
  { id: "u2", name: "Noah Smith", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u2" },
  { id: "u3", name: "James Ande", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u3" },
  { id: "u4", name: "Daniel Hal", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u4" }
];

export default function TournamentDetails() {
  return (
    <>
      {participants.map((participant, index) => {
        return (
          <div key={index} className=" bg-blue-100 flex items-center justify-between mb-3 p-4 mt-2">
            
            <div className="flex items-center gap-8">
              <img
                src={participant.avatar}
                className="w-10 h-10 rounded-full"
                alt="player"
              />
              <span className="font-medium">{participant.name}</span>
            </div>

            <StatusBadge status={participant.status} />

          </div>
        );
      })}
    </>
  );
}