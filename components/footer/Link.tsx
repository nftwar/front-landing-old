import NextLink from "next/link";

export function Link({ href, children }) {
	return (
		<NextLink href={href}>
			<a className={"text-[14px] font-bold"}>
				{children}
			</a>
		</NextLink>
	);
}
