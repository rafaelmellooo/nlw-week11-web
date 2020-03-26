import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../../services/api';
import { Container, Delete, Key, Value } from './styles';

type IncidentType = {
  id: number;
  title: string;
  description: string;
  value: number;
  ong_id: string;
};

type IncidentProps = {
  id: number;
  title: string;
  description: string;
  value: number;
  incidents: IncidentType[] | undefined;
  setIncidents: React.Dispatch<React.SetStateAction<IncidentType[] | undefined>>;
}

const Incident: React.FC<IncidentProps> = ({
  incidents,
  setIncidents,
  id,
  title,
  description,
  value,
}) => {
  const ongId = localStorage.getItem('ongId');

  const handleDeleteIncident = async (id: number) => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents?.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  };

  return (
    <Container>
      <Key>CASO:</Key>
      <Value>{title}</Value>

      <Key>DESCRIÇÃO:</Key>
      <Value>{description}</Value>

      <Key>VALOR:</Key>
      <Value>{Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
      }).format(value)}
      </Value>

      <Delete onClick={() => handleDeleteIncident(id)} type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
      </Delete>    
    </Container>
  );
};

export default Incident;
