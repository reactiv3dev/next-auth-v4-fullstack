import { verifyJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";
import {  NextResponse } from "next/server";


export async function GET(request: Request, { params }: { params: { id: string }}) {

    const accessToken = request.headers.get('authorization');
    
    if(!accessToken || !verifyJwtAccessToken(accessToken)){
        return NextResponse.json(
            {
                error: "unauthorized"
            },
            {
                status: 401
            }
        )
    }
    try{
    const id = parseInt(params.id);
    if(!id) throw new Error('Not valid ID format');
        const userPosts = await prisma.post.findMany({
            where: {
                authorId: id
            },
            include: {
                author:{
                    select:
                    { 
                        email: true,
                        name: true
                    }
                }
            }
        })
        return new Response(JSON.stringify(userPosts), { status: 200 });
    }catch(error){
        return NextResponse.json({ message: `Error` }, { status: 400 })
    }
}