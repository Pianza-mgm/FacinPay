"use client";

import styles from './profile.module.scss';
import { useState } from 'react';
import cn from '@lib/clsx';

type InputProps = {
  label: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: string,
  placeholder?: string,
}
function TabInput({label, value, onChange, type = "text", placeholder = ""} : InputProps) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input 
        type={type} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
export default function Page() {
  const [userData, setUserData] = useState({
    username: "johndoe",
    name: "",
    email: "",
    goalsQnt: 0,
    avatarUrl: "",
    totalCredicted: 0,
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={cn(styles.profileCard, styles.glow)}>
          <div className={styles.profilePic}></div>
          
          <div className={styles.cardInfo}>
            <div className={styles.userName}>@username</div>
            <div className={styles.userPlan}>Nível do Plano</div>
          </div>

        </div>
        <div className={styles.profileInfo}>
          <div className={cn(styles.tab, styles.glow)}>Perfil</div>
          <div className={cn(styles.tabContent, styles.glow)}>
            <div className={styles.tabHeader}>
              <h2>Informações do Perfil</h2>
              <button className={cn(styles.editButton, styles.button)}>Editar</button>
            </div>
            <div className={styles.tabBody}>
              <TabInput
                label="Nome de Usuário"
                value={userData.username}
                onChange={(e) => setUserData({...userData, username: e.target.value})}
                placeholder='Username'
              />
              <TabInput
                label="Nome Completo"
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                placeholder='Nome'
              />
              <TabInput
                label="Email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                placeholder='Email'
              />
              <TabInput
                label="Metas"
                type='number'
                value={userData.goalsQnt}
                onChange={(e) => setUserData({...userData, goalsQnt: parseInt(e.target.value)})}
                placeholder='Quantidade de Metas'
              />
              <TabInput
                label="Valor Total Creditado"
                type='number'
                value={userData.totalCredicted}
                onChange={(e) => setUserData({...userData, totalCredicted: parseInt(e.target.value)})}
              />
            </div>
            <div className={styles.tabFooter}>
              <button className={cn(styles.cancelButton, styles.button)}>Cancelar</button>
              <button className={cn(styles.button, styles.saveButton)}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}