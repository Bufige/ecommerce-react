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



		.noselect {
    		cursor: default;
    		-webkit-touch-callout: none;
    		-webkit-user-select: none;
    		-khtml-user-select: none;
    		-moz-user-select: none;
    		-ms-user-select: none;
    		user-select: none;
		}


		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
  			-webkit-appearance: none;
  			margin: 0;
		}

		/* Firefox */
		input[type=number] {
  			-moz-appearance: textfield;
		}

		--color-header: #000;
		--color-cart-count: #f51167;
		--color-footer: #4c4c4c;
		--color-primary: #007bff;
		--color-secondary: #6c757d;
		--color-success: #28a745;
		--color-danger:	#d9534f;
		--color-warning: #ffc107;
		--color-info: #17a2b8;
		--color-active: #ff003c;
		--color-grey: #e8e8e8;
		--color-grey-dark: #868c98;
    }
`;