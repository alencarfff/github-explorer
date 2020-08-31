import React, { useState, useEffect, FormEvent } from 'react';
import { Title, Form, Repositories, Error } from './style';
import { RepositoryModel } from '../../models/Repository.model';
import Repository from '../../components/Repository';
import TextInput from '../../components/TextInput'

import logo from '../../assets/img/logo.svg';
import api from '../../services/api';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepositoryModel[]>(() => {
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

      <Form onSubmit={handleAddRepository}>
        <TextInput
          hasError={!!inputError} 
          value={newRepo} 
          onChange={setNewRepo} 
          placeholder="Digite o nome do repositório">
        </TextInput>
        <Button 
          category="secondary" 
          type="submit">
            Buscar
        </Button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {repositories && (
        <Repositories>
          { repositories.map(repository => (
              <Repository {...repository}
                key={repository.full_name}>
              </Repository>
            ))}
        </Repositories>
      )}
    </>
  );
};

export default Dashboard;
