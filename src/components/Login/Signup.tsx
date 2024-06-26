import { Label } from "@radix-ui/react-dropdown-menu";
import backgroundImage from "/bg.jpg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, dB } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";


export default function Signup(){
    
    

    
            
    const handleResgister = async (e)=>{
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const { Username,Email, Password} = Object.fromEntries(formData);

        try {
            
            const res = await createUserWithEmailAndPassword(auth,Email,Password);
            await console.log(res.user.email)

            await setDoc(doc(dB,"users",res.user.uid),{
                Username,
                Email,
                id:res.user.uid,
                Password,
                blocked:[]
                
            });
            await setDoc(doc(dB,"userChats",res.user.uid),{
                
                chats:[]
                
            });
            
        } catch (error) {
            console.error(error);
            
        }

    }
    
    
    
    return(
        
        <div className=" flex justify-center items-center h-screen   "style={{backgroundImage: `url(${backgroundImage})`}}>
         <div className=" max-sm:w-[80%] max-md:w-[60%] flex justify-start  rounded-lg h-[80%] md:w-[50%] lg:w-[45%] xl:w-[30%] bg-gray-900 bg-opacity-80 backdrop-blur-sm ">
            <div className=" flex flex-col gap-5  items-center   m-[3rem] w-[80%]">
                <div className="flex flex-col items-center gap-3 mt-4 h-[15%]">
                    <img className=" h-full" src='/msg.png' />
                    <Link to='/signin'>
                    <Button  className='text-md font-semibold font-mono tracking-tight text-blue-300 ' variant='link'>Already have an account? Sign in</Button>
                    </Link>
                </div>
                <form onSubmit={handleResgister} className="flex flex-col gap-4 text-lg text-white  w-full h-full   mt-8">
                <Label>Name</Label>
                <Input className=" bg-transparent " type='text' placeholder="your name" name="Username" required />
                <Label>Email</Label>
                <Input className=" bg-transparent " type='email' placeholder="yourexample@mai.com" name="Email" required />
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