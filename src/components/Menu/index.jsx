import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../assets/svg/Icon/Logo.svg";
import MenuIcon from "../../assets/svg/Icon/Menu.svg";
import {
	Container,
	ListMenu,
	ListMenuItem,
	SignIn,
	OpenMenu,
} from "./styles";

const Menu = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<Container>
			<Link href="/">
				<a><Logo width={60} height={60} /></a>
			</Link>

			<ListMenu openMenu={openMenu}>
				<ListMenuItem>
					<Link href="#"><a>Explore</a></Link>
				</ListMenuItem>

				<ListMenuItem>
					<Link href="#"><a>Sobre Nós</a></Link>
				</ListMenuItem>

				<ListMenuItem>
					<Link href="#"><a>Seguros</a></Link>
				</ListMenuItem>

				<ListMenuItem>
					<Link href="#"><a>Hotéis</a></Link>
				</ListMenuItem>
			</ListMenu>

			<SignIn openMenu={openMenu}>
				<Link href="#"><a>Viagens</a></Link>
				<Link href="#"><a>Login</a></Link>
			</SignIn>

			<OpenMenu>
				<button onClick={handleOpenMenu}>
					<MenuIcon width={40} />
				</button>
			</OpenMenu>
		</Container>
	);
};

export default Menu;
