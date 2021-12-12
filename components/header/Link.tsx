import NextLink from "next/link";

export function Link({ href, children }) {
	return (
		<NextLink href={href}>
			<a className={"hover:text-[#FFAA00]"}>
				{children}
			</a>
		</NextLink>
	);
}
