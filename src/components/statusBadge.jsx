  export function StatusBadge(status){
    let colorClass="";
    switch(status){
        case "on going":colorClass="bg-green-500";
        break;
        case "upcoming":colorClass="bg-blue-500";
        break;
        case "pending":colorClass="bg-orange-500";
        break;
        default:colorClass="bg-gray-400";
    
    }
    retun `<span class "text-white px-2 py-1 rounded-full ${colorClass} " >${status}</span>`
  }


