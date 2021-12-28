import NextLink from "next/link";

export function Link({ href, target=null, children }) {
	return (
		<NextLink href={href}>
			<a className={"hover:text-[#FFAA00]"} target={target} rel={target === "_blank"? "noopener noreferrer" : null}>
				{children}
			</a>
		</NextLink>
	);
}
