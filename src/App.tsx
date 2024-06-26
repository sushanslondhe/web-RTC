import { useEffect, useState } from "react";
// import Chat from "./components/Chat";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Login/Signup";
import Signin from "./components/Login/Signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";


export default function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{
      console.log(user);
    });
    return ()=>{
      unsub();
    }

  },[])
  

  if (loading) {
    setTimeout(()=>{
       setLoading(false);

    },3000)
    return (
      <div className="flex  pt-[15rem] justify-center items-center">
        <img className=" animate-bounce duration-700 h-[70px]" src="/messenger.png" />
        <img className="h-[200px]" src="/loading.svg" />


      </div>
    )
    
  }





  return(
    <>
    
    <BrowserRouter>
    <Routes>

    
      <Route element={<Signin />} path="/signin" ></Route>
      <Route element={<Signup />} path="/signup" ></Route>
      <Route element={<Home />} path="/" ></Route>

    </Routes>
    
    </BrowserRouter>


    
    

    </>
  )

  
}
