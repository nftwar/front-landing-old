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
					<div className={"flex items-center gap-x-20"}>
						<Logo />
						
						<div className={"flex items-center gap-x-16"}>
							<Link href={"#"}>About</Link>
							<Link href={"#"}>Contact</Link>
							<Link href={"#"}>Whitepager</Link>
						</div>
					</div>
					
					{/*	sns */}
					<SnsContainer>
						<SnsItems />
						<SnsItems />
						<SnsItems />
						<SnsItems />
						<SnsItems />
					</SnsContainer>
				</div>
				
				{/* info */}
				<div className={"flex items-center gap-x-7.5"}>
					<p className={"text-[0.875rem]"}>© 2021 — </p>
					<p className={"text-[0.875rem]"}>Privacy — Terms</p>
				</div>
				
				{/* line */}
				<div className={"h-px w-full bg-black mt-3.5"} />
			</div>
		</footer>
	);
}

export default Footer;
