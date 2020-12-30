import React from "react";
import styled from "styled-components";

interface HeaderH1Props {
  fontSize: string;
}

const H1Styles = styled.h1<HeaderH1Props>`
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  font-variant-caps: all-petite-caps;
  margin-bottom: 64px;
  font-size: ${(props) => props.fontSize || "1rem"};
`;

const HeaderH1: React.FC<HeaderH1Props> = ({
  children,
  fontSize,
}): JSX.Element => {
  return <H1Styles fontSize={fontSize}>{children}</H1Styles>;
};

export default HeaderH1;
