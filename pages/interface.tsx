import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
	loaderUrl: "assets/webgl/Build.loader.js",
	dataUrl: "assets/webgl/Build.data.gz",
	frameworkUrl: "assets/webgl/Build.framework.js.gz",
	codeUrl: "assets/webgl/Build.wasm.gz",
});

function InterfacePage() {
	return (
		<main className={"my-[30px] bg-[#F2F2F2] px-[28px] py-[44px]"}>
			<section className={"container mx-auto bg-white border-solid border-[1px] border-black rounded-[8px]"}>
				<h1 className={"px-[24px] py-[18px] font-bold text-[24px]"}>Interface</h1>
				<article className={"flex items-center justify-center min-h-[500px]"}>
					<Unity unityContext={unityContext} />;
				</article>
			</section>
		</main>
	);
}

export default InterfacePage;
