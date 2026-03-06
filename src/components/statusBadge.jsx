export default function StatusBadge({ status }) {
  const styles = {
    "On Going": "bg-green-500 text-white w-40",
    "Upcoming": "bg-blue-500 text-white w-40",
    "Pending": "bg-red-500 text-white w-40",
    "Confirmed": "bg-green-100 text-green-700 w-40",
  };

  return (
    <p
      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${
        styles[status] ? styles[status] : "bg-gray-400 text-white w-40"
      }`}
    >
      {status}
    </p>
  );
}