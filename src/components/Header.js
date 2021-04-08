import styled from 'styled-components'
import Logo from '../images/shared/logo.svg'
import { ButtonGrey } from './Button'
import Container from './Container'

export default function Header() {
  return (
    <Container>
      <Flex>
        <img src={Logo} alt="Logo" />
        <ButtonGrey href="#">Pre-order Now</ButtonGrey>
      </Flex>
    </Container>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 1.5rem 4rem;
  @media (min-width: 48rem) {
    margin: 2.5rem 2.5rem 3.875rem;
  }
  @media (min-width: 90rem) {
    margin: 3.4375rem 0 5.1875rem;
  }
  img {
    border-radius: 0;
  }
`
