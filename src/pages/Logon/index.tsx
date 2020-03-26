import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Button, Input, StyledLink } from '../../styles';
import { Container, Form, Section, Title } from './styles';

const Logon: React.FC = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      type ResponseType = {
        name: string;
      };

      const response = await api.post<ResponseType>('/sessions', {
        id,
      });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  };

  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleSubmit}>
          <Title>Faça seu logon</Title>

          <Input
            placeholder="Sua ID"
            value={id}
            onChange={({ target }) => setId(target.value)}
          />

          <Button type="submit">Entrar</Button>

          <StyledLink to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </StyledLink>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
};

export default Logon;
