import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import Project from "./pages/Project";
import './assets/styles/global.css';
import { ProjectProvider } from './ProjectContext/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project/new" component={NewProject} />
          <Route path="/project/:id" component={Project} />
        </Switch>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
