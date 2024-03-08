import styled from "styled-components";
import { desktopBreakpoint } from "../../constants";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 0 30px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${desktopBreakpoint}px) {
    padding: 0 60px;
  }
`;
