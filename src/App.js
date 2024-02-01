import logo from './logo.svg';
import './App.css';
import { Banner} from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects'

import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />

    </div>
  );
}

export default App;
