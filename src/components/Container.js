import styled from 'styled-components'

export default function Container({ children }) {
  return <Inner>{children}</Inner>
}

const Inner = styled.div`
  position: relative;
  margin: 0 1.5rem;
  @media (min-width: 48rem) {
    margin: 0 2.4375rem;
  }
  @media (min-width: 90rem) {
    margin: 0 10.3125rem;
  }
`
