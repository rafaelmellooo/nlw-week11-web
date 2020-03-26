import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Button, Input, StyledLink } from '../../styles';
import { Container, Content, Form, Group, Section, Text, Title } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Content>
        <Section>

          <img src={logoImg} alt="Be The Hero" />

          <Title>Cadastro</Title>

          <Text>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</Text>

          <StyledLink to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </StyledLink>

        </Section>
        
        <Form>

          <Input placeholder="Nome da ONG" />
          <Input type="email" placeholder="E-mail" />
          <Input placeholder="WhatsApp" />
          
          <Group>
            <Input placeholder="Cidade" />
            <Input
              placeholder="UF"
              style={{
                width: 80
              }}
            />
          </Group>

          <Button type="submit">Cadastrar</Button>

        </Form>
      </Content>
    </Container>
  );
};

export default Register;
