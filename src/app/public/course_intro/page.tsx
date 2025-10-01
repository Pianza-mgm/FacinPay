import Link from "next/link";
import styles from "./course_intro.module.scss";
import cn from '@lib/clsx';

export default function Course(){
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.itemsScope}>
                    <div className={styles.contentContainer}>
                        <div className={styles.textContainer}>
                            <p className={styles.symbolicPath}>
                                <Link href="/" className="has-underbar">Home</Link>
                                {" > "}
                                <Link href="" className="has-underbar">Cursos</Link>
                            </p>
                            <h2 className={styles.titleDescription}><div className="bold">Cursos:</div> Aprenda a gerenciar suas financias!</h2>
                            <p className={styles.detailedDescription}>Aqui você aprenderá o processo administrativo que envolve planejar, controlar, analisar e executar as atividades financeiras para otimizar o uso de recursos, atingir metas e aumentar a sua lucratividade. Esse processo inclui a gestão do fluxo de caixa, o controle de receitas e despesas e o planejamento orçamentário.</p>   
                        </div>
                        <div className={styles.linkContainer}>
                            <Link href="./course_intro/courses" className={styles.link + " has-underbar"}>Básico</Link>
                            <Link href="./course_intro/courses" className={styles.link + " has-underbar"}>Intermediário</Link>
                            <Link href="./course_intro/courses" className={styles.link + " has-underbar"}>Avançado</Link>
                        </div>
                    </div>
                    <Card/>
                </div>
            </div>
        </div>
    )
}
export function Card(){
    return(
        <div className={cn(styles.card, "card")}>
            <div className={styles.cardDisplayer}>
            </div>
            <h2 className={styles.cardPrice}><div className={styles.measure}>R$</div>39,99</h2>
            <div className={styles.buttonContainer}>
                <div className={styles.upperSection}>
                    <Link href="/" className={cn(styles.buyButton, styles.cardButton)}>Comprar Plano</Link>
                    <button className={cn(styles.closeButton, styles.cardButton)}>X</button>
                </div>
                <Link className={cn(styles.planLink, styles.cardButton)} href="/public/plans">Verificar Outros Planos</Link>
            </div>
            <div className={styles.extraInfo}>
                <h4>Sobre Este Plano</h4>
                <div className={styles.infoContainer}>
                    <p>Lorem;</p>
                    <p>Lorem;</p>
                    <p>Lorem;</p>
                </div>
            </div>
        </div>
    )
}