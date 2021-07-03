import { createGlobalStyle } from 'styled-components';
// import { COLORS } from './theme';
const COLORS={
    black:'#121212'
}

const GlobalStyle = createGlobalStyle`
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
	font-family:"Montserrat", sans-serif;
}
html, body{
	overflow-x:hidden;

	/* background-color:${COLORS.black}; */
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey;  */
  /* border-radius: 10px; */
  background-color:${COLORS.black};
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${COLORS.dark}; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: ${COLORS.pink}; 
}
`;

export default GlobalStyle;