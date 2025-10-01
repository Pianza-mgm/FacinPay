import styles from './constants.module.scss';
import { daysInMonth, aleatoryMonthData } from '@private/data/layout';
import * as Chart from '@/app/components/chart';

export default function Page() {
  return (
    <div className={styles.page}>

      <div className={styles.section}>
        
        <div className={styles.subHeader}>
          <div className={styles.title}>Valores Constantes</div>
        </div>

        <div className={styles.chartsContainer}>
          <div className={styles.chartCard}>
            <div className={styles.chartCardHeader}>Distribuição de Gastos</div>
            <div className={styles.chartCardContent}>
              <Chart.DoughnutChart 
                labels={["Alimentação", "Transporte", "Lazer", "Educação", "Saúde", "Outros"]}
                datasets={[
                  {data:[20, 10, 30, 15, 15, 10]}
                ]}
                className={styles.chart}
              />
            </div>
          </div>
          <div className={styles.chartCard}>
            <div className={styles.chartCardHeader}>Gastos Mensais</div>
            <div className={styles.chartCardContent}>
              <Chart.BarChart 
                labels={daysInMonth}
                datasets={[
                  {data: aleatoryMonthData}
                ]}
                className={styles.chart}
              />
            </div>
          </div> 
        </div>

      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>Menu</div>
        <div className={styles.cardTitle}>Relação: Salário-Despesas</div>

        <div className={styles.cardData}>
          <div className={styles.generalData}>
            <p><span>Salário: </span>1000R$</p>
            <p><span>Despesas: </span>1000R$</p>
          </div>
          <div className={styles.dataSection}>
            <div className={styles.upperSection}>

              <div className={styles.item}>
                <div className={styles.itemHeader}>Visualização</div>
                <div className={styles.itemContent} style={{padding: "5px", backgroundColor: "hsl(175, 80%, 8%)", borderRadius: "2.5px"}}>
                  {<Chart.BarChart 
                    labels={["Salário", "Despesas"]}
                    datasets={[
                      {data:[2000, 800]}
                    ]}
                    className={styles.chart}
                  />}
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemHeader}>Opções</div>
                <div className={styles.itemContent}>
                  <div className={styles.button}>Adicionar</div>
                  <div className={styles.button}>Excluir</div>
                  <div className={styles.button}>Salário</div>
          
                </div>
              </div>

            </div>
            <div className={styles.lowerSection}>
              <div className={styles.lowerSectionTitle}>Dinheiro-Tempo (mês)</div>
              <div className={styles.chartContainer}>
                <Chart.BarChart 
                  labels={daysInMonth}
                  datasets={[
                    {data: aleatoryMonthData}
                  ]}
                  className="dark"
                />
              </div>    
            </div>
            <div className={styles.lastItem}>Economia Bruta: <span>500R$</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}