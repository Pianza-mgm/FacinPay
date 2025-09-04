"use client";
import { useState } from 'react';
import { InputProps, LinkProps, ContainerProps, AuthContainer} from "../components/auth_components";

export default function Page() {
  const[form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }
  
  const inputs: InputProps[]=[
    {
      type: "text",
      placeholder: "Username",
      value: form.username,
      onChange: (e) => setForm({ ...form, ['username'] : e.target.value})
    },
    {
      type: "email",
      placeholder: "Email",
      value: form.username,
      onChange: (e) => setForm({ ...form, ['email'] : e.target.value})
    },
    {
      type: "password",
      placeholder: "Senha",
      value: form.password,
      onChange: (e) => setForm({ ...form, ['password'] : e.target.value})
    },
    {
      type: "password",
      placeholder: "Confirmar Senha",
      value: form.password,
      onChange: (e) => setForm({ ...form, ['confirmedPassword'] : e.target.value})
    },
  ];
  const redirectLink: LinkProps={
    text: "Já possui uma conta?",
    linkTitle: "Entrar",
    path: "/auth/signup"
  }
  const containerProps: ContainerProps={
    title: 'Sign Up',
    inputs: inputs,
    redirectLink: redirectLink,
    btnTitle: 'Enviar',
    onSubmit: handleSubmit
  }

  return ( 
    <div id="login">
      <AuthContainer {...containerProps}/> 
    </div>
  );
}