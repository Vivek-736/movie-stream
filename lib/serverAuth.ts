/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from "next/server";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prismadb";

const serverAuth = async (req: NextRequest) => {
    const session = await getSession({ req: { headers: req.headers as any } });
    
    if(!session?.user?.email) {
        throw new Error("Not signed in");
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if(!currentUser) {
        throw new Error("Not signed in");
    }

    return { currentUser };
}

export default serverAuth;
