import Unity, { UnityContext } from "react-unity-webgl";

export function UnityView() {
    const unityContext = new UnityContext({
		loaderUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-build.loader.js",
		dataUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-build.data",
		frameworkUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-build.ramework.js",
		codeUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-build.wasm",
	});

    return <Unity unityContext={unityContext} />
}