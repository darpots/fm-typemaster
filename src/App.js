import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Hero />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
  overflow: hidden;
  margin: 0 auto;
`

export default App
