import Unity, { UnityContext } from "react-unity-webgl";

export function UnityView() {
    const unityContext = new UnityContext({
		loaderUrl: "/assets/webgl/nftwar-garage.loader.js",
		dataUrl: "/assets/webgl/nftwar-garage.data",
		frameworkUrl: "/assets/webgl/nftwar-garage.framework.js",
		codeUrl: "/assets/webgl/nftwar-garage.wasm",
	});

    return <Unity unityContext={unityContext} />
}