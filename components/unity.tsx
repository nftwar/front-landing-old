import Unity, { UnityContext } from "react-unity-webgl";

export function UnityView() {
    const unityContext = new UnityContext({
		loaderUrl: "assets/webgl/Build.loader.js",
		dataUrl: "assets/webgl/Build.data",
		frameworkUrl: "assets/webgl/Build.framework.js",
		codeUrl: "assets/webgl/Build.wasm",
	});

    return <Unity unityContext={unityContext} />
}