import { useSession } from "next-auth/react";
import { NextResponse } from "next/server"
export { default } from 'next-auth/middleware';
 

// export function middleware(request: Request){
//     console.log("I'm in middleware");

//     // const authentication = request.headers.get('authentication');
//     // if(!authentication){
//     //     return NextResponse.redirect(new URL("/api/auth/signin", request.url));
//     // }
//     return NextResponse.next();
// };

export const config = {
    matcher: ["/UserPost/:path*"]
}