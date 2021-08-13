import { useParams } from 'react-router-dom';
import PageHeader from "../../components/PageHeader";

import './index.scss';

type RoomParams = {
    id: string;
}

export default function Project() {
    const params = useParams<RoomParams>();
    const projectId = params.id;

    console.log(projectId);

    return (
        <div id="page-project-form" className="container">
            <PageHeader
                title="Crie e gerencie seus projetos."
                description="Preencha o formulário para criar seu projeto."
            />
        </div>

    )
}