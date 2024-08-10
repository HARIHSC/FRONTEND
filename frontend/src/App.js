import './App.css';
import { Education } from './components/education/education';
import { Personal } from './components/personal/personal';
import { Skills } from './components/Skills/Skills';


function App() {
  return (
    <>

    <h1>This is my resume</h1>
   <Education />
   <Personal/>
   <Skills/>
    </>
  );
}

export default App;
