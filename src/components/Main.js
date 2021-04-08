import styled from 'styled-components'
import Container from './Container'
import { GreyBlockBottomLeft } from './GreyBlock'

import keyPhoneDesktop from '../images/desktop/image-phone-and-keyboard.jpg'
import keyPhoneTablet from '../images/tablet/image-phone-and-keyboard.jpg'
import keyPhoneMobile from '../images/mobile/image-phone-and-keyboard.jpg'

import glassKeyDesktop from '../images/desktop/image-glass-and-keyboard.jpg'
import glassKeyTablet from '../images/tablet/image-glass-and-keyboard.jpg'
import glassKeyMobile from '../images/mobile/image-glass-and-keyboard.jpg'

export default function Main() {
  return (
    <Container>
      <GreyBlockBottomLeft />
      <FlexContainer>
        <ImageContainer>
          <div>
            <OrangeFilter>
              <source srcSet={keyPhoneDesktop} media="(min-width: 1440px)" />
              <source srcSet={keyPhoneTablet} media="(min-width: 768px)" />
              <img src={keyPhoneMobile} alt="Keyboard" />
            </OrangeFilter>
          </div>
          <div>
            <picture>
              <source srcSet={glassKeyDesktop} media="(min-width: 1440px)" />
              <source srcSet={glassKeyTablet} media="(min-width: 768px)" />
              <img src={glassKeyMobile} alt="Keyboard" />
            </picture>
          </div>
        </ImageContainer>
        <SubHeading>
          <h2>Mechanical Wireless Keyboard</h2>
          <p>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </p>
        </SubHeading>
      </FlexContainer>
    </Container>
  )
}

const FlexContainer = styled.div`
  margin-bottom: 6.9375rem;
  @media (min-width: 48rem) {
    margin-bottom: 8.875rem;
  }
  @media (min-width: 90rem) {
    display: flex;
    align-items: center;
    gap: 7.8125rem;
    margin-bottom: 10.5rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 1.5rem;
  margin-left: -4rem;
  margin-bottom: 4.6875rem;
  @media (min-width: 48rem) {
    margin-left: 0;
    margin-bottom: 4.5rem;
    gap: 1.875rem;
  }
  @media (min-width: 90rem) {
    margin-bottom: 0;
  }
`

const OrangeFilter = styled.picture`
  position: relative;
  display: inline-block;
  opacity: 0.92;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--orangePrimary);
    border-radius: 1.5rem;
    mix-blend-mode: multiply;
  }
`

const SubHeading = styled.div`
  text-align: center;
  h2 {
    padding: 0 0.625rem;
  }
  @media (min-width: 48rem) {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 2.25rem;

    h2 {
      min-width: 15.9375rem;
      padding: 0;
    }
  }
  @media (min-width: 90rem) {
    flex-direction: column;
    width: 16.5625rem;
  }
`
