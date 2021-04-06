import styled from 'styled-components'

const ButtonGrey = styled.a`
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background: var(--accent);
  color: var(--primary);
  border-radius: 0.5rem;
  width: 9.375rem;
  height: 3rem;
  cursor: pointer;

  @media (min-width: 48rem) {
    width: 10.9375rem;
    height: 3.625rem;
    line-height: 3.625rem;
  }

  &:hover {
    background: var(--primary);
    color: var(--white);
  }
`

const ButtonOrange = styled(ButtonGrey)`
  background: var(--orangePrimary);
  color: var(--white);

  &:hover {
    background: var(--orangeLight);
  }
`

export { ButtonGrey, ButtonOrange }
