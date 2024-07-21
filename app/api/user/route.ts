import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt';

interface RequestBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(request: Request){
    const { email, name, password}:RequestBody = await request.json();
    const hashedPassword = await bcrypt.hash(password,10);

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }, 
            select:{
                name: true,
                email: true
            }
        })
         
        return NextResponse.json({ user: user }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: `User with given credentials already exist`}, { status: 400 });
    }
}