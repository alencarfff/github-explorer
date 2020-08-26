import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './style';

import logo from '../../assets/img/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories')
    return storagedRepositories      
      ? JSON.parse(storagedRepositories)
      : []
  });
  const [inputError, setInputError] = useState<string>('');
  const [newRepo, setNewRepo] = useState<string>('');
    
  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if(!newRepo){
      setInputError("Digite o autor/nome do repositório")
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
  
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }
    catch(err){
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Dashboard</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {repositories && (
        <Repositories>
          { repositories.map(repo => (
            <Link key={repo.full_name} to={`/repositories/${repo.full_name}`}>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight />
            </Link>
          ))}
        </Repositories>
      )}
    </>
  );
};

export default Dashboard;
