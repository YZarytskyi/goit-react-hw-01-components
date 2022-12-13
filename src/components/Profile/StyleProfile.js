import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #ADD8E6;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const Name = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.7rem
`

export const Tag = styled.p`
  margin: 0;
  color: gray;
`

export const Location = styled.p`
  margin: 0;
`

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  gap: 0.7rem
`

export const Quantity = styled.span`
  font-weight: 700;
`

export const Image = styled.img`
  width: 100px;
  height: 100%;
  margin: 0 auto;
  display: block;
  border-radius: 50%;
`
