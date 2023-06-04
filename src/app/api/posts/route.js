import { NextResponse } from "next/server"
import connect from "@/utils/db"


export const GET =  async (request) => {
    //fetch

    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(posts, {status: 200})
    } catch (error) {
        
        return new NextResponse('Database Error!', {status: 500})
    }

} 