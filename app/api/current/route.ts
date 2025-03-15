import { NextResponse, NextRequest } from "next/server";
import serverAuth from "@/lib/serverAuth";

export const GET = async (req: NextRequest) => {
    try {
        const currentUser = await serverAuth(req);
        return NextResponse.json(currentUser, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Unauthorized' }, { status: 400 });
    }
}