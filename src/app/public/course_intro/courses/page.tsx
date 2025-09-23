import {Card} from './../page';
import './courses.scss';
import Link from 'next/link';

type Requirements={
    level: String,
    description: String,

    modules: Module[],
}
type Module={
    title: String,
    description: String,
    expectedTime: number,
}

export default function Course(){ 
    {/*replace for a db query after*/}
    const data: Requirements={
        level: "Level",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laborum iusto nulla quasi vel aperiam pariatur sapiente repellendus odio aliquid dolore consequatur suscipit eligendi, deleniti quaerat placeat ut maxime ipsum",
        modules: [
            {title: "Título do Módulo", description: "Descrição", expectedTime: 20},
            {title: "Título do Módulo", description: "Descrição", expectedTime: 20},
            {title: "Título do Módulo", description: "Descrição", expectedTime: 20},
            {title: "Título do Módulo", description: "Descrição", expectedTime: 20},
            {title: "Título do Módulo", description: "Descrição", expectedTime: 20},
            {title: "Título do Módulo", description: "Descrição", expectedTime: 20}
        ]
    }
    return(
        <div id="page">
            <div id="sub-header">
                <div id="content-container">
                    <div id="symbolic-path">
                        <Link href="/" className='has-underbar'>Home</Link>
                        {" > "}
                        <Link href="/public/course_intro" className='has-underbar'>Cursos</Link>
                        {" > "}
                        <Link href="" className='has-underbar'>{data.level}</Link>
                    </div>
                    <div id="title">{data.level}

                    </div>
                    <div id="description">{data.description}</div>
                </div>
            </div>
            <div id="main-container">
                <div id="metadata-container">
                    <h2>Guia</h2>
                    <div id="details">{data.modules.length} Módulos - {data.modules.reduce((acc, module) => acc + module.expectedTime, 0)}min</div>
                </div>
                <div id="modules-container">
                    {data.modules.map((module, index) => (
                        <div key={index} className="module">
                            <div id="indexer">Módulo {index + 1}:</div>
                            <div id="title">{module.title}</div>
                            <div id="expectedTime">Leitura - {module.expectedTime}min</div>
                        </div>
                    ))}
                </div>
                <Card/>
            </div>
        </div>
    )
}