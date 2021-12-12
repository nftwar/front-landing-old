export function SnsItems({type}) {
	return (
		<div className={"w-10 h-10 border-solid rounded-full"}>
			<img src={`assets/image/${type}.png`}  alt="" />
		</div>
	);
}
