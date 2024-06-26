import { CircleUser } from "lucide-react"
import { formattedDate } from "@/lib/utils"
type userMessages = {
     msgPosition:string,
    msg:string
}
export default function UserChats(
    {
     msgPosition,
    msg
    }:userMessages
) {
    if (msgPosition === 'left') {
        return(
            <div className=" h-[5rem] justify-start items-baseline flex  gap-2">
              <div className=" px-1">
              <CircleUser />
              </div>
              <p className="shadow-md shadow-gray-500 text-white rounded-lg text-center py-2 border border-r-2 h-fit w-[40%] tracking-tight capitalize">
                {msg}
    
              </p>
              <h3>{formattedDate}</h3>
    
            </div>
        )
    }
    else{

        return(
            <div className=" pr-4 h-[5rem] justify-end items-baseline flex gap-2 ">
              
              <h3>{formattedDate}</h3>
    
            
            
              <p className=" shadow-md shadow-gray-500 text-white border-r-2  rounded-lg text-center py-2   border h-fit w-[40%] tracking-tight capitalize">
                {msg}
    
              </p>
              <CircleUser />
    
            </div>
        )
    }
    
}