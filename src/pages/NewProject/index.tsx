import PageHeader from "../../components/PageHeader";
import { useHistory } from 'react-router-dom';
import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './index.scss';
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { ProjectsContext } from "../../ProjectContext/ProjectContext";

export default function NewProject() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const {
        projects, createProject,
    } = useContext(ProjectsContext);

    function handleCreateNewProject(e: FormEvent) {
        e.preventDefault();
        const id = uuidv4();
        const isClosed = false;

        const project = ({ id, name, description, isClosed });
        createProject(project);
        history.push('/');

    }

    useEffect(() => {
        console.log("Dentro do useEffect", projects);
    }, [projects]);

    return (
        <div id="page-project-form" className="container">
            <PageHeader
                title="Crie e gerencie seus projetos."
                description="Preencha o formulário para criar seu projeto."
            />
            <main>
                <form onSubmit={handleCreateNewProject}>
                    <fieldset>
                        <legend>Novo Projeto</legend>
                        <Input
                            name="name"
                            label="Nome do projeto"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Textarea
                            name="description"
                            label="Descrição"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </fieldset>

                    <footer>
                        <p>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar projeto
                        </button>
                    </footer>
                </form>
            </main>
        </div>

    )
}