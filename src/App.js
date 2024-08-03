import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Lista from './pages/lista';
import EditarAluno from './components/edit'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h2>CRUD Alunos</h2>
          <Link to="/">Home</Link>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/lista">Lista</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/lista" element={<Lista/>} />
          <Route path="/editar/:nome" element={<EditarAluno/>} /> {/* Nova rota para edição */}
        </Routes>
        <footer>Desenvolvido por Felipe Loche</footer>
        <footer>Todos Direitos Reservados © 2024</footer>
      </div>
    </Router>
  );
}

export default App;
