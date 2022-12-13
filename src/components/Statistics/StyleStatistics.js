import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background-color: #add8e6;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 0;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Percentage = styled.span`
  font-size: 1.4rem;
`;
