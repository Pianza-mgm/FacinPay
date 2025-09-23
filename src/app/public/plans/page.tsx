'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import './plans.scss';

type Plan = {
    level: String;
    price: String;
    relationFeatureLevel: 2 | 3 | 5;
};
const planArray: Plan[]=[
    {level: "Gratuito", price: '0.00', relationFeatureLevel: 2},
    {level: "Padrão", price: '9.99', relationFeatureLevel: 3},
    {level: "Completo", price: '39.99', relationFeatureLevel: 5},
]
const associatedValue: {[key: string]: String}={
    "Free"    : "Gratuito",
    "Standard": "Padrão",
    "Complete": "Completo"
}
const features: String[]=[
    "Organização com gráficos;",
    "Metas (limite de três);",
    "Divisão de despesas;",
    "Acesso aos cursos;",
    "Metas ilimitadas.",
]

export default function Plan(){
    return(
        <div id="card-container">
            {planArray.map((values, index)=>(
                <Card key={index}{...values}/>
            ))}
        </div>
    )
}
function Card({level, price, relationFeatureLevel}: Plan){
    const { data: session } = useSession();
    return(
        <div className="card">
            <div id="price-container">
                <h2><div id="measure"></div>{price}</h2>
            </div>
            <div id="main-container">
                <div id="features-display">
                    {features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <div className={relationFeatureLevel>index ? "icon yes-icon" : "icon not-icon"}></div>
                        <div id="feature-text">{feature}</div>
                    </div>  
                    ))}
                </div>
                <Link href={session ? ('') : ('/auth/login')} id="buy-button">
                {session 
                ? (associatedValue[session.user.userPlan] === level ? "Continuar com" : "Mudar para")
                : ("Adquirir")
                } este</Link>
            </div>
            <div id="level-container">
                <h2 id="plan-level">{level}</h2>
            </div>
        </div>
    )
}