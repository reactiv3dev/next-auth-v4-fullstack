import { NextRequest, NextResponse } from "next/server";
import prisma from '../../lib/prisma';
import * as bcrypt from 'bcrypt';
import { signJwtAccessToken } from "@/app/lib/jwt";

interface requestBody {
    email: string;
    password: string;
} 

export async function POST (request: Request){
    const { email, password }: requestBody = await request.json();

    const user = await prisma.user.findUnique({ where: { email }});

     

    if(user && (await bcrypt.compare(password, user.password
    ))){
        const { password, ...userWithoutPass } = user;
        const accessToken = signJwtAccessToken(userWithoutPass,);

        const result = { ...userWithoutPass, accessToken };
        return new Response(JSON.stringify(result));
    } else {
        const response = NextResponse.json({ error: "Unauthorized Wrong Credentials"}, { status: 400 });
        return response;
    }
}