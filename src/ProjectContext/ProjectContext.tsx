import React, {
    createContext, ReactNode, useState,
} from 'react';

export interface Project {
    id: string;
    name: string;
    description: string;
    isClosed: boolean;
}

interface ProjectProviderProps {
    children: ReactNode;
}

interface ProjectsContextData {
    projects: Project[];
    createProject: (project: Project) => void;
    setProjects: (project: Project[]) => void;
    changeProjectActive: (id: string) => void;
    deleteProject: (id: string) => void;
}

export const ProjectsContext = createContext<ProjectsContextData>({} as ProjectsContextData);

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    function createProject(project: Project) {
        setProjects([...projects, project]);
        console.log(projects);
    }

    function changeProjectActive(id: string) {
        const newProject = projects.map((project) => (project.id === id ? {
            ...project,
            isClosed: !project.isClosed,
            closedAt: new Date().toDateString(),
        } : project));
        setProjects(newProject);
    }

    function deleteProject(id: string) {
        const restProject = projects.filter((project) => (project.id !== id));
        setProjects(restProject);
    }

    return (
        <ProjectsContext.Provider value={{
            projects, setProjects, createProject, changeProjectActive, deleteProject,
        }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
