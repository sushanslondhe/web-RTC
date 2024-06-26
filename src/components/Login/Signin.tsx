import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import backgroundImage from "/bg.jpg";
import { Link } from "react-router-dom";
import { auth } from "@/lib/firebase";


export default function Signin(){

    const handleLogin =async (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const { Email, Password } = Object.fromEntries(formData);

        try {
           await signInWithEmailAndPassword(auth,Email,Password);
            
        } catch (error) {
            console.error(error)
            
        }

        

    }
    return(
        
        <div className=" flex justify-center items-center h-screen   "style={{backgroundImage: `url(${backgroundImage})`}}>
         <div className=" max-sm:w-[80%] max-md:w-[60%] flex justify-start  rounded-lg h-[70%] md:w-[50%] lg:w-[45%] xl:w-[30%] bg-gray-900 bg-opacity-80 backdrop-blur-sm ">
            <div className=" flex flex-col gap-5  items-center   m-[3rem] w-[80%]">
                <div className=" flex flex-col items-center gap-3 mt-4 h-[15%]">
                    <img className=" h-full" src='/msg.png' />
                    <Link to='/signup'>
                    <Button  className='text-md font-semibold font-mono tracking-tight text-blue-300 ' variant='link'>Don't have an account ? Signup Here</Button>
                    </Link>
                </div>
                <form onSubmit={handleLogin}  className=" flex flex-col gap-4 text-lg text-white  w-full h-full   mt-16">
                <Label>Email</Label>
                <Input className=" bg-transparent " type='email' placeholder="yourexample@mail.com" name="Email" required />
                <Label>Password</Label>
                <Input className=" bg-transparent " type='password'  placeholder="password" name="Password" minLength={8} required  />
                <Button onClick={()=>{
                
                }} variant='destructive'>Submit</Button>
                {/* Google auth */}
                {/* <Button onClick={handleGoogle}>Sign in with google</Button> */}
                </form>


            </div>
        
        
        
        
         </div>
        
        
        
    </div>
            
        
        
        
    )
}