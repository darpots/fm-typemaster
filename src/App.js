import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Features from './components/Features'
import Copyright from './components/Copyright'

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Hero />
      <Main />
      <Features />
      <Copyright />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 90rem;
  overflow: hidden;
  margin: 0 auto;
  background: var(--white);
`

export default App
