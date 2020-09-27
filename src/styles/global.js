import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    html, body, #root {
		height: 100%;
		
		font-family: 'Josefin Sans', sans-serif;
    	-webkit-font-smoothing: antialiased;
		font-weight: 400;
		line-height: 1.5;
		
		background-color: white;
		--color-header: #000;
		--color-cart-count: #f51167;
		--color-footer: #4c4c4c;
    }
`;