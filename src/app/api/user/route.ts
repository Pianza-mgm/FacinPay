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

export async function GET(req: Request){
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "Email é obrigatório" }, { status: 400 });
  }
  const user = await prisma.user.findUnique({ where: { email } });
  console.log(user)
  return NextResponse.json(user);
}