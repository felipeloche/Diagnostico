import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lista = () => {
  const [alunos, setAlunos] = useState([]);
  const [selectedAluno, setSelectedAluno] = useState(null);

  useEffect(() => {
    const dadosAlunos = JSON.parse(localStorage.getItem('alunos')) || [];
    setAlunos(dadosAlunos);
  }, []);

  const handleEdit = (aluno) => {
    setSelectedAluno(aluno);
  };

  return (
    <div>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - {aluno.idade} anos
            <button onClick={() => handleEdit(aluno)}>Editar</button>
          </li>
        ))}
      </ul>
      {selectedAluno && (
        <div>
          <h3>Detalhes do Aluno</h3>
          <p>Nome: {selectedAluno.nome}</p>
          <p>Idade: {selectedAluno.idade}</p>
          <Link to={`/editar/${selectedAluno.nome}`}>Editar</Link>
        </div>
      )}
    </div>
  );
};

export default Lista;
