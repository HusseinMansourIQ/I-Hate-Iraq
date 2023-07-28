import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
export const dynamic = "force-dynamic"

export async function GET() {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')
    
    const posts = await prisma.Post.findMany({
        skip: (page-1)*2 ,
        take: page*2
    });

return NextResponse.json(posts)
}