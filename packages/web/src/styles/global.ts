import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 400ms;
  }

  html, body {
    width: 100%;
    height: 100%;

    background: ${props => props.theme.colors.gray[600]}
  }

  a {
    text-decoration: none;
  }
`