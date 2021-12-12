import Link from "next/link";

export function Logo() {
	return (
		<Link href={"/"}>
			<a>
				<img src="assets/image/logo-without-background.png" height="50%" />
			</a>
		</Link>
	);
}
