import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Button, Input, StyledLink } from '../../styles';
import { Container, Content, Form, Section, Text, TextArea, Title } from './styles';

const NewIncident: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await api.post('/incidents', {
        title,
        description,
        value,
      }, {
        headers: {
          Authorization: ongId,
        },
      });
  
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  };

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <Title>Cadastrar novo caso</Title>

          <Text>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</Text>

          <StyledLink to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </StyledLink>
        </Section>
        
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          
          <TextArea
            placeholder="Descrição"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          >
          </TextArea>

          <Input
            placeholder="Valor em reais"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewIncident;
