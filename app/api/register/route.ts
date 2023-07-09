import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import prisma from "@/config/db"

export async function POST(request: Request) {
  const { email, name, password } = await request.json()

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: { email, name, hashedPassword }
  })

  return NextResponse.json(user)
}
