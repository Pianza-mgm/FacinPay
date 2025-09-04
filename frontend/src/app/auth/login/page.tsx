"use client";
import { useState } from 'react';
import { InputProps, LinkProps, ContainerProps, AuthContainer} from "../components/auth_components";
import { signIn } from "next-auth/react";

export default function Page() {
  const[form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: true,
      callbackUrl: '/private/data/dashboard',
      email: form.email,
      password: form.password,
    });

    if (res?.error) {
      alert("Credenciais inválidas");
    } else {
      alert("Login realizado com sucesso!");
    }
  };


  const inputs: InputProps[]=[
    {
      type: "text",
      placeholder: "Email",
      value: form.email,
      onChange: (e) => setForm({ ...form, ['email'] : e.target.value})
    },
    {
      type: "password",
      placeholder: "Senha",
      value: form.password,
      onChange: (e) => setForm({ ...form, ['password'] : e.target.value})
    },
  ];
  const redirectLink: LinkProps={
    text: "Não possui uma conta?",
    linkTitle: "Cadastrar",
    path: "/auth/signup"
  }
  const containerProps: ContainerProps={
    title: 'Log In',
    inputs: inputs,
    redirectLink: redirectLink,
    btnTitle: 'Confirmar',
    onSubmit: handleSubmit
  }

  return ( 
    <div id="login">
      <AuthContainer {...containerProps}/> 
    </div>
  );
}