import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";

import { 
	Container, 
	ContainerLeft, 
	ContainerRight, 
	Logo, 
	Icon, 
	Link,
	Link2,
	Bars, 
	CartRound, 
	Menu, 
	MenuItem, 
	SubMenu, 
	SubMenuItem
} from './styles';

import SearchBar from '../SearchBar';
import { useStoreContext } from '../../storeContext';
import { logout } from '../../helpers/localStorage';
export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [openUser, setOpenUser] = useState(false);
	const [cartCount, setCartCount] = useState(0);


	const history = useHistory(); 

	const {user, setUser, cart} = useStoreContext();

	useEffect( () => {
		const interval = setInterval(() => {
			setCartCount(cart.totalItems);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const onSearch = (text) => {
		console.log('search for:' + text);

		history.push('/products', {text: text});
	}
	const onMenu = () => {
		console.log("open sidebar:", !isOpen);
		setIsOpen(x => !x);
	}
	const onLogout = () => {
		logout();
		setUser(undefined);
	}
	return <Container>
		<ContainerLeft>
			<Link2 to="/">
				<Logo src="https://via.placeholder.com/100x30"/>
			</Link2>
		</ContainerLeft>
		<ContainerRight>
			<Menu open={isOpen}>
				<MenuItem>
					<Link to="/">Home</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/products">Products</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/">Blog</Link>
					<SubMenu className="submenu">
						<SubMenuItem>
							<Link to="/">Blog</Link>
						</SubMenuItem>
						<SubMenuItem>
							<Link to="/">Blog Details</Link>
						</SubMenuItem>
					</SubMenu>
				</MenuItem>
				<MenuItem>
					<Link to="/contact">Contact</Link>
				</MenuItem>
			</Menu>
			

			{/*
			<SearchBar onClick={onSearch}/> 

			<CartRound>
				<Icon className="fas fa-heart badge" value="0"></Icon>
			</CartRound>
			*/}
			<CartRound>
				<Link to="/cart"><Icon className="fas fa-shopping-cart badge" value={cartCount}></Icon></Link>
			</CartRound>
			<CartRound onClick={() => setOpenUser(x => !x)}>
				<Icon className="fas fa-user" ></Icon>
				<Menu open={openUser} width={'100px'}>

					{user ? <>
							{user.role === 'admin' ? 
								<MenuItem>
									Admin
								</MenuItem>
								:
								null
							}
							<MenuItem>
								Profile
							</MenuItem>
							<MenuItem onClick={onLogout}>
								Logout
							</MenuItem>
						</>
						:
						<>
							<MenuItem>
								<Link to="/signin">Sign in</Link>
							</MenuItem>
							<MenuItem>
								<Link to="/signup">Sign up</Link>
							</MenuItem>
						</>
					}
				</Menu>
			</CartRound>
			<Bars className="fas fa-bars fa-lg" onClick={onMenu}></Bars>
		</ContainerRight>
	</Container>
}