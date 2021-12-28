import { Link } from "../components/footer/Link";
import { Logo } from "../components/logo";
import { SnsContainer } from "../components/footer/sns/container";
import { SnsItems } from "../components/footer/sns/items";

function Footer() {
	return (
		<footer className={"bg-[#F2F2F2]"}>
			<div className={"container mx-auto py-7.5 px-10"}>
				<div className={"flex items-start justify-between"}>
					{/* logo and links*/}
					<div className={"flex items-center"}>
						<Logo />
						
						<div className={"flex items-center gap-x-16"}>
							<Link href={"/about"}>About</Link>
							<Link href={"mailto:contract@nftwar.games"}>Contact</Link>
							<Link href={"/white-paper"}>Whitepaper</Link>
						</div>
					</div>
					
					{/*	sns */}
					<SnsContainer>
						<SnsItems type="twitter" href="https://www.twitter.com/nftwar_games"/>
						<SnsItems type="medium" href="https://medium.com/@NFTWAR"/>
						<SnsItems type="youtube" href="https://www.youtube.com"/>
						<SnsItems type="discord" href="https://discord.gg/E3uypkR22Z"/>
					</SnsContainer>
				</div>
				
				{/* info */}
				<div className={"flex items-center gap-x-7.5"}>
					<p className={"text-[0.875rem]"}>Team Huffmen. All Rights Reserved</p>
				</div>
				
				{/* line */}
				<div className={"h-px w-full bg-black mt-3.5"} />
			</div>
		</footer>
	);
}

export default Footer;
