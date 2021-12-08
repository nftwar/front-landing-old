import Unity, { UnityContext } from "react-unity-webgl";

export function UnityView() {
    const unityContext = new UnityContext({
		loaderUrl: "assets/webgl/Build.loader.js",
		dataUrl: "assets/webgl/Build.data.gz",
		frameworkUrl: "assets/webgl/Build.framework.js.gz",
		codeUrl: "assets/webgl/Build.wasm.gz",
	});

    return <Unity unityContext={unityContext} />
}