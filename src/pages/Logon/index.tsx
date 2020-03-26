import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Button, Input, StyledLink } from '../../styles';
import { Container, Form, Section, Title } from './styles';

const Logon: React.FC = () => {
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <Title>Faça seu logon</Title>

          <Input placeholder="Sua ID" />

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
