import styled from 'styled-components'

export default function Copyright() {
  return (
    <Copy>
      <p>
        <span>Typemaster 2021</span> | All Rights Reserved
      </p>
    </Copy>
  )
}

const Copy = styled.div`
  text-align: center;
`
