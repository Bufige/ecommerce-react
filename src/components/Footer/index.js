import React from 'react';

import { Container, FooterContainer, FooterContent, FooterLink, FooterTitle, FooterItem, Copyright, Social, Icon, Logo} from './styles';

export default function Footer() {
	return <Container>
		<FooterContainer>
			<FooterContent>
				<FooterTitle>
					<Logo src="https://via.placeholder.com/100x30"/>
				</FooterTitle>
				<FooterLink>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</FooterLink>
			</FooterContent>
			<FooterContent>
				<FooterTitle>
					Quick Links
			</FooterTitle>
				<FooterItem>
					<FooterLink>About</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Offers & Discounts</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Get Coupon</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Contact us</FooterLink>
				</FooterItem>
			</FooterContent>
			<FooterContent>
				<FooterTitle>
					New products
			</FooterTitle>
				<FooterItem>
					<FooterLink>Woman Cloth</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Fashion Accessories</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Man Accessories</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Ruber made Toys</FooterLink>
				</FooterItem>
			</FooterContent>

			<FooterContent>
				<FooterTitle>
					Support
			</FooterTitle>
				<FooterItem>
					<FooterLink>Frequently asked questions</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Terms & Conditions</FooterLink>
				</FooterItem>
				<FooterItem>
					<FooterLink>Privacy Policy</FooterLink>
				</FooterItem>
			</FooterContent>
		</FooterContainer>
		<Copyright>Copyright ©2020 All rights reserved to Bufige</Copyright>
		<Social>
			<FooterLink href="https://github.com/bufige" target="_blank" color="black"><Icon className="fab fa-github fa-lg"/></FooterLink>
			
			<FooterLink href="mailto:bufige1434@gmail.com" target="_blank" color="black"><Icon className="fas fa-envelope fa-lg"/></FooterLink>
		</Social>
	</Container>
}