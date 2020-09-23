import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../assets/svg/Icon/Logo.svg";
import MenuIcon from "../../assets/svg/Icon/Menu.svg";
import {
	Toolbar,
	Heading,
	HeadingItem,
	SignIn,
	OpenToolbar,
} from "./styles";

const Menu = () => {
	const [openToolbar, setOpenToolbar] = useState(false);

	const handleOpenToolbar = () => {
		setOpenToolbar(!openToolbar);
	}

	return (
		<Toolbar>
			<Link href="/">
				<a><Logo width={60} height={60} /></a>
			</Link>

			<Heading openToolbar={openToolbar}>
				<HeadingItem>
					<Link href="#"><a>Explore</a></Link>
				</HeadingItem>

				<HeadingItem>
					<Link href="#"><a>Sobre Nós</a></Link>
				</HeadingItem>

				<HeadingItem>
					<Link href="#"><a>Seguros</a></Link>
				</HeadingItem>

				<HeadingItem>
					<Link href="#"><a>Hotéis</a></Link>
				</HeadingItem>
			</Heading>

			<SignIn openToolbar={openToolbar}>
				<Link href="#"><a>Viagens</a></Link>
				<Link href="#"><a>Login</a></Link>
			</SignIn>

			<OpenToolbar onClick={handleOpenToolbar}>
				<a><MenuIcon width={40} /></a>
			</OpenToolbar>
		</Toolbar>
	)
}
export default Menu;
