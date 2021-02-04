import styled from "styled-components";
import { Link } from "react-router-dom";

export const BigContainer = styled.div`
  width: 100vw;
  display: flex;
`;

export const Name = styled.p`
  font-size: 10rem;
  color: white;
`;
export const Container = styled.div`
  background-color: black;
  margin: 4vw;
  width: 100%;
  text-align: center;
`;
export const Path = styled(Link)`
text-decoration:none;
`