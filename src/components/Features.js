import styled from 'styled-components'
import { data } from '../data/featuresData'
import Container from './Container'

export default function Features() {
  return (
    <Container>
      <FeaturesSection>
        {data.map((el) => (
          <Feature>
            <IconBox>{el.icon}</IconBox>
            <h3>{el.title}</h3>
            <p>{el.text}</p>
          </Feature>
        ))}
      </FeaturesSection>
    </Container>
  )
}

const FeaturesSection = styled.section`
  @media (max-width: 47.9375rem) {
    text-align: center;
  }
  @media (min-width: 48rem) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const Feature = styled.div`
  margin-bottom: 4rem;
  @media (min-width: 48rem) {
    margin-bottom: 4.5rem;
    flex-basis: 46%;
    h3 {
      max-width: 12rem;
    }
    @media (min-width: 90rem) {
      flex-basis: 23%;
    }
  }
`

const IconBox = styled.div`
  width: 4.0625rem;
  height: 4.0625rem;
  background: var(--orangePrimary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin: 0 auto 3rem;

  @media (min-width: 48rem) {
    margin: 0 0 2.5rem;
  }

  svg {
    path {
      fill: var(--white);
    }
  }
`
