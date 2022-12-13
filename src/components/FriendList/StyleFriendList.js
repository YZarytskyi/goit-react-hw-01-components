import styled from 'styled-components'

export const FriendsList = styled.ul`
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  background-color: #add8e6;
  border-radius: 1rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`;

export const IsOnline = styled.span`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-weight: 700;
`;
