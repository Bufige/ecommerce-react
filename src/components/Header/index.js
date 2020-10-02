import React, { useState } from 'react';

import { Container, ContainerLeft, ContainerRight, Logo, Icon, Link, Bars, CartRound, Menu, MenuItem, SubMenu, SubMenuItem} from './styles';

import SearchBar from '../SearchBar';
import { useWindowSize } from '../../utils';
import { useStoreContext } from '../../storeContext';
export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [openUser, setOpenUser] = useState(false);
	const window = useWindowSize();

	const {user} = useStoreContext();
	const onSearch = (text) => {
		console.log('search for:' + text);
	}
	const onMenu = () => {
		console.log("open sidebar:", !isOpen);
		setIsOpen(x => !x);
	}
	return <Container>
		<ContainerLeft>
			<Logo src="https://via.placeholder.com/100x30"/>
		</ContainerLeft>
		<ContainerRight>
			<Menu open={isOpen}>
				<MenuItem>
					<Link to="/">Home</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/product">Category</Link>
				</MenuItem>
				<MenuItem>
					<Link src="#">Lastest</Link>
					<SubMenu className="submenu">
						<SubMenuItem>
							<Link src="#">Product List</Link>
						</SubMenuItem>
						<SubMenuItem>
							<Link src="#">Product Details</Link>
						</SubMenuItem>
					</SubMenu>
				</MenuItem>
				<MenuItem>
					<Link src="#">Blog</Link>
					<SubMenu className="submenu">
						<SubMenuItem>
							<Link src="#">Blog</Link>
						</SubMenuItem>
						<SubMenuItem>
							<Link src="#">Blog Details</Link>
						</SubMenuItem>
					</SubMenu>
				</MenuItem>
				<MenuItem>
					<Link src="#">Pages</Link>
					<SubMenu className="submenu">
						<SubMenuItem>
							Login
						</SubMenuItem>
						<SubMenuItem>
							Register
						</SubMenuItem>
					</SubMenu>
				</MenuItem>
				<MenuItem>
					<Link to="/contact">Contact</Link>
				</MenuItem>
			</Menu>
			<SearchBar onClick={onSearch}/> 

			{/*
			<CartRound>
				<Icon className="fas fa-heart badge" value="0"></Icon>
			</CartRound>
			*/}
			<CartRound>
				<Link to="/cart"><Icon className="fas fa-shopping-cart badge" value="0"></Icon></Link>
			</CartRound>
			<CartRound onClick={() => setOpenUser(x => !x)}>
				<Icon className="fas fa-user" ></Icon>
				<Menu open={openUser} width={'100px'}>

					{user ? <>
							<MenuItem>
								Profile
							</MenuItem>
							<MenuItem>
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