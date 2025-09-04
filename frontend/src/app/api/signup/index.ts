import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request){
  try {
    const { username, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username: username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ error: "Erro ao registrar usuário" }, { status: 400 });
  }
}