import styled, { type CSSProperties } from 'styled-components'

export const FlexDiv = styled.div<{
  $flexDirection?: CSSProperties['flexDirection']
  $justifyContent?: CSSProperties['justifyContent']
  $alignItems?: CSSProperties['alignItems']
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : 'row'};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : 'space-between'};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'center')};
  width: 100%;
  height: ${(props) => (props.$flexDirection === 'column' ? '100%' : 'auto')};
`
