import { Logo } from "../components/logo";
import { Link } from "../components/header/Link";
import { PlayButton } from "../components/header/playButton";

function Header() {
	return (
		<header className={"sticky top-0 inset-x-0 bg-white z-50 shadow-lg"}>
			<div className={"container flex items-center justify-between mx-auto h-16 px-10 py-3"}>
				<div className={"flex items-center gap-x-8"}>
					<Logo />
					<div className={"flex gap-x-6"}>
						<Link href={"/"}>Home</Link>
						<Link href={"#"}>Market</Link>
						<Link href={"#"}>Game</Link>
						<Link href={"#"}>News</Link>
						<Link href={"#"}>Whitepaper</Link>
					</div>
				</div>
				<div className={"flex items-center gap-x-9"}>
					<Link href={"#"}>Token</Link>
					<PlayButton />
				</div>
			</div>
		</header>
	);
}

export default Header;
