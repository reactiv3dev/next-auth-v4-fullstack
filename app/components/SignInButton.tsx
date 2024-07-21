"use client"
import { signIn, signOut, useSession } from "next-auth/react";


const SignInButton = () => {
    const { data: session } = useSession()
    
    if(session && session.user){
        console.log(session)
        return(
            <div className="flex gap-4 ml-auto">
                <p className="text-sky-600">{session.user.name}</p>
                <button onClick={() => signOut()} className="text-red-600">
                    SignOut
                </button>
            </div>
        )
    }
    return (
        <button onClick={() => signIn()} className="text-green-600 ml-auto">SignIn</button>
    )
}

export default SignInButton;