import styled from 'styled-components'
import Container from './Container'
import { ButtonOrange } from './Button'
import smallImg from '../images/mobile/image-keyboard.jpg'
import medImg from '../images/tablet/image-keyboard.jpg'
import lrgImg from '../images/desktop/image-keyboard.jpg'
import { GreyBlockTopRight } from './GreyBlock'

export default function Hero() {
  return (
    <Container>
      <FlexContainer>
        <HeroText>
          <h1>Typemaster keyboard</h1>
          <p>
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.{' '}
          </p>
          <div>
            <ButtonOrange>pre-order now</ButtonOrange>
            <p>release on 5/27</p>
          </div>
        </HeroText>
        <HeroImage>
          <picture>
            <source srcSet={lrgImg} media="(min-width: 1440px)" />
            <source srcSet={medImg} media="(min-width: 768px)" />
            <img src={smallImg} alt="Keyboard" />
          </picture>
        </HeroImage>
      </FlexContainer>
      <GreyBlockTopRight />
    </Container>
  )
}

const FlexContainer = styled.div`
  margin-bottom: 1.5rem;
  @media (min-width: 48rem) {
    display: flex;
    margin-right: -1.5rem;
    margin-bottom: 2.5rem;
    align-items: center;
    gap: 4rem;
  }
  @media (min-width: 90rem) {
    margin-right: 0;
    margin-bottom: 1.875rem;
  }
`

const HeroText = styled.section`
  a {
    margin-bottom: 4rem;
  }
  a + p {
    display: inline-block;
    text-transform: uppercase;
    margin-left: 2rem;
  }
`

const HeroImage = styled.div`
  margin-right: -3.5rem;
  @media (min-width: 48rem) {
    margin-right: -10.5rem;
  }
  @media (min-width: 90rem) {
    margin-right: 0;
  }
`
