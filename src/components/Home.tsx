import Chat from "./Chat";
import Detail from "./Detail";
import List from "./List";
import backgroundImage from "/bg.jpg";

export default function Home(){
    return(
        
   <div className=" flex justify-center items-center h-screen   "style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="flex justify-start  rounded-lg h-[85%] w-[89%] bg-gray-900 bg-opacity-80 backdrop-blur-md ">
        <div className=" max-sm:w-[30%] max-lg:w-[45%] border w-[25%] border-white bg-white max-h-screen  overflow-auto" >
        <List />
        </div>
        <div className="  max-sm:w-[70%] w-[60%]  max-lg:w-full border border-white overflow-auto">
        <Chat />
        </div>
        <div className=" max-lg:hidden w-[20%] border border-white">
        <Detail />
        </div>
        
        </div>
        
        
        
    </div>

    )
    
}