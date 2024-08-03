import React, { useState } from 'react';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const aluno = { nome, idade };
        const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
        alunos.push(aluno);
        localStorage.setItem('alunos', JSON.stringify(alunos));
        setNome('');
        setIdade('');
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              required
            />
          </label>
          <label>
            Idade:
            <input 
              type="number" 
              value={idade} 
              onChange={(e) => setIdade(e.target.value)} 
              required
            />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      );
    }

export default Cadastro;