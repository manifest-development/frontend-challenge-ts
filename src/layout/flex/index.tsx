import { type FunctionComponent, type PropsWithChildren, type CSSProperties } from 'react'
import * as Styled from './styles'

interface FlexProps extends PropsWithChildren {
  flexDirection?: CSSProperties['flexDirection']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  id?: string
}

const Flex: FunctionComponent<FlexProps> = ({
  flexDirection = 'row',
  justifyContent = 'space-between',
  alignItems = 'center',
  children,
  ...props
}: FlexProps) => {
  return (
    <Styled.FlexDiv
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      {...props}
    >
      {children}
    </Styled.FlexDiv>
  )
}

export default Flex
