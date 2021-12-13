import Unity, { UnityContext } from "react-unity-webgl";

export function UnityView() {
    const unityContext = new UnityContext({
		loaderUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-garage.loader.js",
		dataUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-garage.data",
		frameworkUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-garage.framework.js",
		codeUrl: "https://d3dgnplrqmrl5m.cloudfront.net/nftwar-garage.wasm",
	});

    return <Unity unityContext={unityContext} />
}