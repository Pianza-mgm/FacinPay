"use client";
import { useState } from 'react';
import { InputProps, LinkProps, ContainerProps, AuthContainer} from "../components/auth_components";
import { api } from '@/lib/axios';
import { signIn } from 'next-auth/react';

export default function Page() {
  const[form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(form.password != form.confirmedPassword){ 
      alert("As senhas não coincidem");
      return;
    }
    try {
      const {confirmedPassword, ...payload} = form;
      await api.post("/user", payload);
      const res = await signIn("credentials", {
        redirect: true,
        callbackUrl: '/private/data/dashboard',
        email: form.email,
        password: form.password,
      });

      console.log(res?.ok ? "Usuário logado" : "Error" + res?.error);
      alert("Usuário registrado com sucesso!");

      setForm({ username: "", email: "", password: "", confirmedPassword: "" });  
    } catch (err: any) {
      alert("Erro ao registrar: " + err.response?.data?.error || err.message);
    }
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
      value: form.email,
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
      value: form.confirmedPassword,
      onChange: (e) => setForm({ ...form, ['confirmedPassword'] : e.target.value})
    },
  ];
  const redirectLink: LinkProps={
    text: "Já possui uma conta?",
    linkTitle: "Entrar",
    path: "/auth/login"
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