import { ReactElement, ReactNode } from "react"
import styled from "styled-components"

const Card = styled.div`
  padding: 48px 24px 48px 32px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
`

type Props = {
  children: ReactNode
}

export const AbCard = ({children}: Props) => {
  return (
    <Card>
      {children}
    </Card>
  )
}