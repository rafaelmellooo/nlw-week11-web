import styled from 'styled-components';

export const Container = styled.li`
  background: #FFF;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  p + strong {
    margin-top: 32px;
  }
`;

export const Key = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;
`;

export const Value = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;
`;

export const Delete = styled.button`
  background: #FFF;
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;

  &:hover {
    opacity: 0.8;
  }
`;
