import Link from "next/link";

export function GoToInterfaceButton() {
	return (
		<Link href={"/interface"}>
			<button className={"inline-block px-12 py-2.5 rounded-[5px] min-w-[140px] bg-transparent border-solid border-[2px] border-[#FFAA00] hover:bg-[#FFAA00] text-[#FFAA00] hover:text-white"}>
				Go to Interface
			</button>
		</Link>
	);
}
