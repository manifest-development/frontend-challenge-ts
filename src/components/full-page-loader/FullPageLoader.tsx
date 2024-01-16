import * as Styled from './styles'

function FullPageLoader () {
  return (
    <Styled.FullScreenLoader className="loader-div">
      <p>Saving data</p>
      <span className="loader">
        <span />
        <span />
      </span>
    </Styled.FullScreenLoader>
  )
}

export default FullPageLoader
