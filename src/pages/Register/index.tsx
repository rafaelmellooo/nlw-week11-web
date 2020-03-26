import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Button, Input, StyledLink } from '../../styles';
import { Container, Content, Form, Group, Section, Text, Title } from './styles';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      type ResponseType = {
        id: string;
      };
  
      const response = await api.post<ResponseType>('/ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });
  
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  };

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
        
        <Form onSubmit={handleSubmit}>

          <Input
            placeholder="Nome da ONG"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />

          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <Input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={({ target }) => setWhatsapp(target.value)}
          />
          
          <Group>
            <Input
              placeholder="Cidade"
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
            
            <Input
              placeholder="UF"
              style={{
                width: 80
              }}
              value={uf}
              onChange={({ target }) => setUf(target.value)}
            />
          </Group>

          <Button type="submit">Cadastrar</Button>

        </Form>
      </Content>
    </Container>
  );
};

export default Register;
