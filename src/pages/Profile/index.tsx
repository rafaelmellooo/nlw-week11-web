import React from 'react';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Header, List, Logout, StyledLink, Title } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />

        <span>Bem vinda, APAD</span>

        <StyledLink to="/incidents/new">Cadastrar novo caso</StyledLink>

        <Logout type="button">
          <FiPower size={18} color="#E02041" />
        </Logout>
      </Header>

      <Title>Casos cadastrados</Title>

      <List>
        <li></li>
      </List>
    </Container>
  );
};

export default Profile;
