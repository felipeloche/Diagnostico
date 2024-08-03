import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarAluno = () => {
  const { nome } = useParams();
  const [aluno, setAluno] = useState({ nome: '', idade: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const dadosAlunos = JSON.parse(localStorage.getItem('alunos')) || [];
    const alunoAtual = dadosAlunos.find(aluno => aluno.nome === nome);
    if (alunoAtual) {
      setAluno(alunoAtual);
    }
  }, [nome]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosAlunos = JSON.parse(localStorage.getItem('alunos')) || [];
    const index = dadosAlunos.findIndex(a => a.nome === aluno.nome);
    if (index !== -1) {
      dadosAlunos[index] = aluno;
      localStorage.setItem('alunos', JSON.stringify(dadosAlunos));
    }
    navigate('/lista');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input 
          type="text" 
          name="nome" 
          value={aluno.nome} 
          onChange={handleChange} 
          disabled
        />
      </label>
      <label>
        Idade:
        <input 
          type="number" 
          name="idade" 
          value={aluno.idade} 
          onChange={handleChange} 
          required
        />
      </label>
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default EditarAluno;
