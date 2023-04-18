import { Link, useNavigate } from 'react-router-dom';
import {
  StyledMainContainerCadastro,
  StyledSecondaryContainerCadastro,
  StyledFormCadastro,
  StyledButtonSendCadastro,
} from './styled';
import { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      email,
      password,
      confirmPassword,
    };

    const promisse = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
    promisse.then((res) => {
      navigate('/');
    });
    promisse.catch((err) => {
      console.log(err.response.data);
      if (err.response.status === 422) {
        return err.response.data.forEach((data) => {
          alert(data);
        });
      }
      alert(err.response.data);
    });
  };

  return (
    <StyledMainContainerCadastro>
      <StyledSecondaryContainerCadastro>
        <h1>MyWallet</h1>
        <StyledFormCadastro onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nome'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type='email'
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type='password'
            placeholder='Confirme a senha'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <StyledButtonSendCadastro>Cadastrar</StyledButtonSendCadastro>
        </StyledFormCadastro>
        <Link to='/'>Já tem uma conta? Entre agora!</Link>
      </StyledSecondaryContainerCadastro>
    </StyledMainContainerCadastro>
  );
};

export default Cadastro;
