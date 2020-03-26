import React, { useCallback, useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import Incident from './Incident';
import { Container, Header, List, Logout, StyledLink, Title } from './styles';

const Profile: React.FC = () => {
  type IncidentType = {
    id: number;
    title: string;
    description: string;
    value: number;
    ong_id: string;
  };

  const [incidents, setIncidents] = useState<IncidentType[]>();

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const loadIncidents = useCallback(async () => {
    type ResponseType = IncidentType[];

    const response = await api.get<ResponseType>('/profile', {
      headers: {
        Authorization: ongId,
      },
    });

    setIncidents(response.data);
  }, [ongId]);

  useEffect(() => {
    loadIncidents();
  }, [loadIncidents]);

  const handleLogout = () => {
    localStorage.clear();

    history.push('/');
  };

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />

        <span>Bem vinda, {ongName}</span>

        <StyledLink to="/incidents/new">Cadastrar novo caso</StyledLink>

        <Logout onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </Logout>
      </Header>

      <Title>Casos cadastrados</Title>

      <List>
        {
          incidents?.map(({ id, title, description, value }) => (
            <Incident
              incidents={incidents}
              setIncidents={setIncidents}
              key={id}
              id={id}
              title={title}
              description={description}
              value={value}
            />
          ))
        }
      </List>
    </Container>
  );
};

export default Profile;
