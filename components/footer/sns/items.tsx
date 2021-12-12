export function SnsItems({type}) {
	return (
		<div className={"w-10 h-10 border-solid border-[1px] border-black rounded-full"}>
			<img src={`assets/image/${type}.png`} />
		</div>
	);
}
