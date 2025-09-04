import './home.scss';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div id='home'>
      <div id="info-container">
        <div id="wrapper">
          <h1>Você tem <span>controle</span> da sua vida <span>financeira</span>?</h1>
          <p id="project-name">Facin<span>Pay</span></p>
          <p id="explanation">O serviço de auxilio para gerenciamento de financias, uma ferramenta de organização e gestão de gastos!</p>
          <div id="btn-container">
            <Link className="link-btn" href="/private/data/dashboard">Começar</Link>
            <Link className="link-btn" href="/public/plans">Explorar Planos</Link>
          </div>
          <p id="advise">Obtenha uma demonstração do serviço ou explore os planos!</p>
        </div>
      </div>
      <div id="ilustrative-img-container">
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
