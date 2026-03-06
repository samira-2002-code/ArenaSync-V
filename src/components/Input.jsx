export default function Input(){
    return(
        <div className= {" bg-blue-500 flex justify-center items-center  p-2 mb-4"}>
            <input type="text" placeholder="search for a match !" 
            className={"px-7 py-3 border-2 border-black w-80  rounded-full py-3   md:rounded-full  md:w-full"} />
        </div>
    )
}

