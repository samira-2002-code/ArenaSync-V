import StatusBadge from "./StatusBadge";

export default function Card({ tournament }) {
  return (
    <div className="border bg-gray-200 ml-4 p-8 mr-4 rounded-lg mb-8">
      <h2>{tournament.title}</h2>

      <p>{tournament.description}</p>

      <div>
        <i className="fa-regular fa-user"></i>
        <p>{tournament.participantsCount}</p>

        <StatusBadge status={tournament.status} />
      </div>
    </div>
  );
}