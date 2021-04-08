import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Barlow', sans-serif;
    background: #f2f2f2;
    
    img {
      max-width: 100%;
      border-radius: 1.25rem;
    }
  }

  // Colors
  :root {
    --orangePrimary: hsl(22, 89%, 52%);
    --orangeLight: hsl(22, 100%, 69%);
    --primary: hsl(220, 50%, 17%);
    --primaryLight: hsl(221, 23%, 58%);
    --accent: hsl(198, 28%, 93%);
    --white: hsl(0, 0%, 100%);
  }

  h1, h2, h3 {
    font-weight: 900;
    text-transform: uppercase;
    color: var(--primary);
    
  }
  
  h1 {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 2rem;
    @media (min-width: 48rem){
      margin-bottom: 2.125rem;
    }
    @media (min-width:90rem ){
      font-size: 3.5rem;
      line-height: 3.5rem;
      margin-bottom: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
    @media (min-width: 90rem) {
      margin-bottom: 1.6875rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;
    color: var(--primaryLight);
    margin-bottom: 2rem;
    
    @media (min-width: 48rem) {
      margin-bottom: 2.4375rem;
    }
    
    @media (min-width:90rem ){
      font-size: 1.125rem;
      line-height: 1.625rem;
      margin-bottom: 2.5rem;
    }
  }
`
