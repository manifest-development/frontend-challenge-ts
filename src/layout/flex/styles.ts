import styled, { css, type CSSProperties } from 'styled-components'

export const FlexDiv = styled.div<{
  $flexDirection?: CSSProperties['flexDirection']
  $justifyContent?: CSSProperties['justifyContent']
  $alignItems?: CSSProperties['alignItems']
  id?: string
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : 'row'};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : 'space-between'};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'center')};
  width: 100%;
  height: ${(props) => (props.$flexDirection === 'column' ? '100%' : 'auto')};
  @media (max-width: 768px) {
    ${(props) =>
      props.id === 'thank-you-page' && css`
        flex-direction: column;
      `}
  }
`
