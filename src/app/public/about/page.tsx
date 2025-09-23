import { Sidebar } from "@/app/components/sidebar";
import styles from "./about.module.scss";
import Image from "next/image";

type MemberProps={
  profilePicPath: string
  name: string,
  role: string,
  description: string,
  skills: string[]
}
function MemberCard({profilePicPath, name, role, description, skills}:MemberProps){
  return(
    <div className={styles.card}>
      <Image 
        className={styles.memberProfilePic}
        src={profilePicPath}
        alt="member profile pic"
        width={100}
        height={100}
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberRole}>{role}</p>
        <p className={styles.memberDescription}>{description}</p>
      </div>
      <div className={styles.skillsContainer}>
        <h4>Competências</h4>
        <div className={styles.subContainer}>
          {skills.map((skill, index)=>(
            <div key={index} className={styles.skill}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default function About() {
  const startingPath: String = "/uploads/profile_pics/profile_pic_"
  const members: MemberProps[] = [
    {profilePicPath: `${startingPath}gustavo.jpg`, name: "Gustavo Paes"     , role: "Idealizador"               , description: '"None"', skills: ["Content Writer"]},
    {profilePicPath: `${startingPath}yasmin.jpg` , name: "Yasmin Akemi"     , role: "Membro"                    , description: '"None"', skills: ["Designer"]},
    {profilePicPath: `${startingPath}raquel.jpg` , name: "Raquel Vitória"   , role: "membro"                    , description: '"None"', skills: ["Designer"]},
    {profilePicPath: `${startingPath}miguel.jpg` , name: "Miguel Guiraldeli", role: "Programador Geral"         , description: '"Meu deus, alguem me tira daqui"', skills: ["Desenvolvimento Front/Back End" , "Designer"]},
    
  ]
  const specialOne: MemberProps=(
    {profilePicPath: `${startingPath}daniel.jpg`, name: "Daniel (AKA Ronald McDonald)", role: "Membro", description: "Perai, tem projeto p fzr?", skills: ["ocultismo", "vendas"]}
  )

  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <section className={styles.project}>
            <div className={styles.sectionTitleDisplayer}>
              <p className={styles.titleContainer}>Projeto</p>
            </div>

            <div className={styles.contentContainer}>
              <Image className={styles.projectLogo}
                src="/uploads/logo.png"
                alt="project logo"
                width={250}
                height={250}
              />
              <div className={styles.textContainer}>
                <h1 className={styles.projectName}>Facin<span>Pay</span></h1>
                <p className={styles.description}>Desenvolvida para te ajudar a ter um maior controle finaceiro sobre a sua vida, mostrando como você pode pagar, e economizar seu dinheiro!</p>
                <p className={styles.slogan}>Simplificando suas finanças, facilitando sua vida.</p>
              </div>
            </div>
          </section>


          <section className={styles.team}>
            <div className={styles.sectionTitleDisplayer}>
              <p className={styles.titleContainer}>Equipe</p>
            </div>
            <div className={styles.contentContainer}>
              {members.map((member, index)=>(
                <MemberCard key={index} {...member}/>
              ))}
            </div>
          </section>


          <section className={styles.creation}>
            <div className={styles.sectionTitleDisplayer}>
              <p className={styles.titleContainer}>Criação</p>
            </div>

            <div className={styles.contentContainer}>

            <div className={styles.creationWrapper}>
                <div className={styles.subHeader}>
                  <h2 className={styles.title}>Conceitualização</h2>
                </div>
                <div className={styles.subContainer}>
                  <p className={styles.explanation}>
                    A primeira parte do projeto se caracterizou pela criação pela criação de uma ideia a ser aplicada 
                    como SAAS (Site As A Software). No início fora proposta a ideia de um serviço de métodos de pagamento
                    que seria distribuido como API. No entanto, a partir de alguma conversas do grupo a ideia se desenvolveu
                    para, agora, ser um site de financias.
                  </p>
                  <div className={styles.creationCardContainer}>
                    <Image 
                      className={styles.cardContent}
                      src="/uploads/concept_part/concept_home.jpg"
                      alt="Concept Images"
                      width={4000}
                      height={4000}
                    />
                    <Image 
                      className={styles.cardContent}
                      src="/uploads/concept_part/concept_plans.jpg"
                      alt="Concept Images"
                      width={4000}
                      height={4000}
                    />
                    <Image 
                      className={styles.cardContent}
                      src="/uploads/concept_part/concept_members.jpg"
                      alt="Concept Images"
                      width={4000}
                      height={4000}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.creationWrapper}>
                <div className={styles.subHeader}>
                  <h2 className={styles.title}>Protótipo</h2>
                </div>
                <div className={styles.subContainer}>
                  <p className={styles.explanation}>
                    A segunda parte se deu pelo desenvolvimento do design e um protótipo de site, o qual só teria funções 
                    que não necessitariam do Backend. A ferramenta utilizada para desenvolvimento foi o framework 'Next.ts'
                    para utilização do React e posteriormente seu hosting com Vercel.
                  </p>
                  <div className={styles.creationCardContainer}>
                    <div className={styles.cardContent}></div>
                    <div className={styles.cardContent}></div>
                    <div className={styles.cardContent}></div>
                    <div className={styles.cardContent}></div>
                  </div>
                </div>
              </div>

              <div className={styles.creationWrapper}>
                <div className={styles.subHeader}>
                  <h2 className={styles.title}>Projeto Final</h2>
                </div>
                <div className={styles.subContainer}>
                  <p className={styles.explanation}>
                    Em desenvolvimento...
                  </p>
                  <div className={styles.creationCardContainer}>
                    <div className={styles.cardContent}></div>
                    <div className={styles.cardContent}></div>
                    <div className={styles.cardContent}></div>
                    <div className={styles.cardContent}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className={styles.mention}>
            <div className={styles.sectionTitleDisplayer}>
              <p className={styles.titleContainer}>Menção Honrosa</p>
            </div>
            <div className={styles.contentContainer}>
              <MemberCard {...specialOne}/>
            </div>
          </section>
      </main>
      <Sidebar links={
          [
            { href: "#project" , label: "Projeto"        },
            { href: "#team"    , label: "Equipe"         },
            { href: "#creation", label: "Criação"        },
            { href: "#mention" , label: "Menção Honrosa" }
          ]
        } />
    </div>
  );
}