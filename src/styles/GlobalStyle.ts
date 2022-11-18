import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  main: "#f5cac2 ",
  primary: "#303179 ",
  secondary: "#141850  ",
  third: "#ed7966 ",
  thirdLight: "#fae5df ",
  white: "#ffffff",
  black: "#000000",
  success: "#36BF69",
  danger: "#BF3636"
}
