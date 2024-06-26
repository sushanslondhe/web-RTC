import { formattedDate } from "@/lib/utils";
import {  ChevronUpCircle, CircleUser, Ellipsis, PhoneCall, SmilePlus, Video } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import UserChats from "./UserChats";
import { useEffect, useRef } from "react";


export default function Chat(){

    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        
        endRef.current?.scrollIntoView({behavior:"smooth"});
    },[])

 
    return(
       <section className=" flex flex-col  ">
        <div className=" flex justify-between items-center border-b h-[4rem] bg-slate-300 z-50 sticky  top-0">
                <div className=" font-mono text-zinc-600]">
                    <CircleUser  width={100} height={50} className=" text-zinc-500 opacity-60" />
                </div>
                <div className=" flex-1">
                    <h1 className="  text text-xl tracking-tight text-gray-500">New User</h1>
                    <h2 className=" text-white font-serif font-light text-sm">Last seen online at {formattedDate}</h2>

                </div>
                <div className=" flex gap-5 pr-10 " >
                    <PhoneCall className=" text-white"  />
                    <Video className=" text-white" />
                    <Ellipsis className=" text-white" />
                </div>

        </div>
        <div className=" border pb-[5rem] ">
            <div>
               
                <UserChats msg="Hello, how can I assist you today?" msgPosition="left" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="left" />
                
                <UserChats msg="Hello, how can I assist you today?" msgPosition="left" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="left" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="left" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="left" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="left" />
                <UserChats msg="Hello, how can I assist you today?" msgPosition="right" />
                
            </div>
             

        </div>
            <div ref={endRef} /> 
        {/* bottom */}
        <div className=" bg-white sticky bottom-0  rounded-md flex justify-center items-center gap-5 h-[3.5rem] mt-2">
            <div className=" flex items-center text-black gap-3 h-fit px-5  ">
                <SmilePlus className=" cursor-pointer h-7  w-full" />
                <ChevronUpCircle className=" cursor-pointer h-7 w-full"  />
            </div>
            <Input placeholder="Type a message..." className=" mt- cursor-text bg-transparent border-none w-[70%] h-full" />
            <Button variant='default' className=" w-fit h-full ">Send Message</Button>

        </div>
       
      
       </section>

        
    )
}