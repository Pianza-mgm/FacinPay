import styles from './dashboard.module.scss';
import cn from '@lib/clsx';
import * as Chart from '@/app/components/chart';
import { daysInMonth, aleatoryMonthData } from '@private/data/layout';

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
                            <div className={styles.cardBody}>
                                <Chart.DoughnutChart
                                    labels={["data1", "data2", "data3", "data4", "data5"]}
                                    datasets={[
                                        {label: "", data: [20, 10, 30, 30, 40]}
                                    ]}
                                    className="chart doughnut"
                                />
                            </div>
                        </div>
                        <div className={cn(styles.savings, styles.card)}>
                            <div className={styles.cardHeader}>Economias</div>
                            <div className={styles.cardBody}>
                                <Chart.LineChart
                                    labels={["data1", "data2", "data3", "data4", "data5"]}
                                    datasets={[{
                                        data:[10, 40, 82, 12, 53]
                                    }]}
                                    className="chart"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cn(styles.goals, styles.card)}>
                        <div className={styles.cardHeader}>Metas</div>
                        <div className={styles.goalWrapper}>
                            <div className={styles.goal}>
                                <div className={styles.goalTitle}>Meta 1</div>
                                <div className={styles.goalDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis modi magnam saepe esse ipsum, impedit assumenda ex dignissimos, sint, officia doloribus nulla delectus nostrum.</div>
                            </div>
                            <div className={styles.goal}>
                                <div className={styles.goalTitle}>Meta 2</div>
                                <div className={styles.goalDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis modi magnam saepe esse ipsum, impedit assumenda ex dignissimos, sint, officia doloribus nulla delectus nostrum.</div>
                            </div>
                            <div className={styles.goal}>
                                <div className={styles.goalTitle}>Meta 3</div>
                                <div className={styles.goalDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis modi magnam saepe esse ipsum, impedit assumenda ex dignissimos, sint, officia doloribus nulla delectus nostrum.</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={cn(styles.inflowCard, styles.card)}>
                            <div className={styles.cardHeader}>Entradas</div>
                            <div className={styles.cardBody}>
                                <Chart.BarChart
                                    labels={daysInMonth}
                                    datasets={[
                                        {data: aleatoryMonthData}
                                    ]}
                                    className="chart doughnut"
                                />
                            </div>
                        </div>
                        <div className={cn(styles.outflowCard, styles.card)}>
                            <div className={styles.cardHeader}>Saídas</div>
                            <div className={styles.cardBody}>
                                <Chart.BarChart
                                    labels={daysInMonth}
                                    datasets={[
                                        {data: aleatoryMonthData}
                                    ]}
                                    className="chart doughnut"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}