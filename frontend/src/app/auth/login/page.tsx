"use client";
import { useState } from 'react';
import { InputProps, LinkProps, ContainerProps, AuthContainer} from "../components/auth_components";
import { signIn } from "next-auth/react";

export default function Page() {
  const[form, setForm] = useState({
    username: "",
    password: "",
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/private/data/dashboard",
      username: form.username,
      password: form.password,
    });
  }


  const inputs: InputProps[]=[
    {
      type: "text",
      placeholder: "Username",
      value: form.username,
      onChange: (e) => setForm({ ...form, ['username'] : e.target.value})
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