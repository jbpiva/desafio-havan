import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from "../../components/PageHeader";
import { ProjectsContext } from '../../ProjectContext/ProjectContext';

import './index.scss';

export default function Home() {
    const history = useHistory();
    const {
        projects
    } = useContext(ProjectsContext);

    console.log("Home", projects);

    function handleCreateNewProject() {

        history.push('/project/new');
    }

    function handleProjectPage(id: string) {

        history.push(`/project/${id}`);
    }

    return (
        <div id="page-project-form" className="container">
            <PageHeader
                title="Crie e gerencie seus projetos."
                description="Preencha o formulário para criar seu projeto."
            />

            {projects.map(({ id, name, description }) => (
                <div key={id} className="box-project" onClick={() => handleProjectPage(id)}>
                    <h3>{name}</h3>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            ))
            }


            <div className="create-new-project">
                <p>Olá, utilize o botão abaixo para criar seu projeto!</p>
                <button onClick={handleCreateNewProject} className="create-project">Crie seu projeto!</button>

            </div>

        </div>

    )
}