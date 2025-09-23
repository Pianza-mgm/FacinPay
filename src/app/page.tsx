import styles from './home.module.scss';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.infoContainer}>
        <div className={styles.wrapper}>
          <h1>Você tem <span>controle</span> da sua vida <span>financeira</span>?</h1>
          <p className={styles.projectName}>Facin<span>Pay</span></p>
          <p className={styles.explanation}>O serviço de auxilio para gerenciamento de financias, uma ferramenta de organização e gestão de gastos!</p>
          <div className={styles.btnContainer}>
            <Link className={styles.linkBtn} href="/private/data/dashboard">Começar</Link>
            <Link className={styles.linkBtn} href="/public/plans">Explorar Planos</Link>
          </div>
          <p className={styles.advise}>Obtenha uma demonstração do serviço ou explore os planos!</p>
        </div>
      </div>
      <div className={styles.ilustrativeImgContainer}>
        <Image 
          src="/uploads/home_demo_card.png" 
          alt=""
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}
