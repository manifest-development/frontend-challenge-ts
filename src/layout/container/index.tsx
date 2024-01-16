import { type FunctionComponent, type PropsWithChildren } from 'react'
import * as Styled from './styles'

const Container: FunctionComponent<PropsWithChildren> = ({
  children
}: PropsWithChildren) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Container
