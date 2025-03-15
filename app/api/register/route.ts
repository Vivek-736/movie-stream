import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, password } = body;

        if (!email || !name || !password) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(existingUser) {
            return new NextResponse("User already exists", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date()
            }
        });

        return NextResponse.json(user);
    }
    catch (error) {
        return new NextResponse((error as Error).message, { status: 500 });
    }
}