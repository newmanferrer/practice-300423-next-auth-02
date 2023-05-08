import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'You are not logged in!!!' })
  }

  return NextResponse.json({ message: `Hello, ${session.user?.name}` })
}
