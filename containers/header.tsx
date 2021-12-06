import { Logo } from "../components/header/logo";
import { Link } from "../components/header/Link";

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
					<button className={"inline-block px-12 py-2.5 rounded-[5px] min-w-[140px] bg-black text-white"}>
						Play
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
