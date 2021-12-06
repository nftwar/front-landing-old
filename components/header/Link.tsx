import NextLink from "next/link";

export function Link({ href, children }) {
	return (
		<NextLink href={href}>
			<a className={""}>
				{children}
			</a>
		</NextLink>
	);
}
