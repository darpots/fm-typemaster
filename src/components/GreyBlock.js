import styled from 'styled-components'

const GreyBlockTopRight = styled.div`
  @media (min-width: 90rem) {
    position: absolute;
    top: 0;
    right: -17.8125rem;
    width: 15.9375rem;
    height: 15rem;
    background: var(--accent);
    border-radius: 1.25rem;
  }
`

const GreyBlockBottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: -17.8125rem;
  width: 15.9375rem;
  height: 15rem;
  background: var(--accent);
  border-radius: 1.25rem;
`

export { GreyBlockTopRight, GreyBlockBottomLeft }
