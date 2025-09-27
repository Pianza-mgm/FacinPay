import styles from './dashboard.module.scss';
import cn from '@lib/clsx';

export default function Page(){
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.subHeader}>
                    <p className={styles.subHeaderItem}><span className="hl-txt">Disponível:</span>R$10000</p>
                    <p className={styles.subHeaderItem}><span className="hl-txt">Valor Corrente:</span>R$10000</p>
                    <p className={styles.subHeaderItem}><span className="hl-txt">Metas:</span>10</p>
                    <p className={styles.subHeaderItem}><span className="hl-txt">Entradas Este Mês:</span>10</p>
                    <p className={styles.subHeaderItem}><span className="hl-txt">Saídas Este Mês:</span>10</p>
                </div>
                <div className={styles.contentContainer}>

                    <div className={styles.leftSection}>
                        <div className={cn(styles.spendings, styles.card)}>
                            <div className={styles.cardHeader}>Despesas</div>
                        </div>
                        <div className={cn(styles.savings, styles.card)}>
                            <div className={styles.cardHeader}>Economias</div>
                        </div>
                    </div>

                    <div className={cn(styles.goals, styles.card)}>
                        <div className={styles.cardHeader}>Metas</div>
                        <div className={styles.goalWrapper}>
                            <div className={styles.goal}></div>
                            <div className={styles.goal}></div>
                            <div className={styles.goal}></div>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={cn(styles.inflowCard, styles.card)}>
                            <div className={styles.cardHeader}>Entradas</div>
                        </div>
                        <div className={cn(styles.outflowCard, styles.card)}>
                            <div className={styles.cardHeader}>Saídas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}