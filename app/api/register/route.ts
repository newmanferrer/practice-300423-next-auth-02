import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma/db/client'
import type { User } from '@prisma/client'
import { hash } from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const userToRegister: User = await req.json()
    const { name, image, email, password } = userToRegister
    const hashedPassword = await hash(password, 12)

    const registeredUser = await prisma.user.create({
      data: { name, image, email, password: hashedPassword }
    })

    return NextResponse.json({
      user: {
        id: registeredUser.id,
        name: registeredUser.name,
        image: registeredUser.image,
        email: registeredUser.email,
        password: registeredUser.password
      }
    })
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      statusText: 'Internal Server Error'
    })
  }
}
