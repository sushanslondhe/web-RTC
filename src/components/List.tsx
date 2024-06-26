import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import UserList from "./UserList";

export default function List(){
    return(
       <section className="">
        <div className=" z-50 sticky  top-0">
        <div className="  shadow-md rounded-md flex items-center bg-slate-300 pt-2 pb-3">
            <Avatar className="  px-2">
                <AvatarFallback className=" hover:bg-slate-400 h-12 w-[50px]">
                    <span className=" font-bold text-slate-800">SL</span>
                </AvatarFallback>
            </Avatar>
            <h1 className=" text-2xl font-mono text-gray-800">Sush</h1>

        </div>
        <div  className="   mx-3  flex items-center justify-center p-2">
            {/* <Search className=" bg-slate-200 h-10" /> */}
            <input className="  bg-slate-200 border-none h-[35px] w-full rounded-xl focus:ring-0 focus:outline-none  " placeholder="Search Users..." />

        </div>
        <div className=" py-1 border-b border-gray-400" />
        </div>
        <div className=" flex flex-col ">
            <UserList userName="Aser1" />
            <UserList userName="Bser1" />
            <UserList userName="Cser1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            <UserList userName="User1" />
            
        </div>
        
       </section>

        
    )
}