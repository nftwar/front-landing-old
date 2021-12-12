export function SnsItems({type, href}) {
	return (
		<div className={"w-10 h-10 border-solid rounded-full"}>
			<a href={href} target="_blank">
				<img src={`assets/image/${type}.png`}  alt="" />
			</a>
		</div>
	);
}
