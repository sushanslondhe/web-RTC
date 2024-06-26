import { CircleUser } from "lucide-react"

type typeUser = {
    userName:string
}

export default function UserList({
userName
}:typeUser){
    return(
        <div className="flex border-b h-20">
            <div className=" shadow-md flex items-center justify-center my-3 mx-2 border h-[3rem] w-[18%]  rounded-full">
                <span className=" font-mono text-zinc-600]">
                    <CircleUser  width={100} height={50} className=" text-stone-500 opacity-60" />
                </span>

            </div>

            <div className="flex flex-col justify-around items-center">
                <div className=" font-semibold text-xl pl-10">

                {userName}
                </div>
                <div className=" text-gray-500 ">
                    message...
                </div>

            </div>
            
        </div>
    )
}