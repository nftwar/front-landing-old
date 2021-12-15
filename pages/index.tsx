import { PlayButton } from "../components/playButton";
import Link from "next/link";

export default function Home() {
  return (
      <main className={"flex flex-col"}>
        <section className={"flex justify-center bg-[#303030] min-w-full min-h-full max-w-none relative items-center h-screen overflow-hidden"}>
            <div className={"flex flex-col items-center pt-15 pb-20 text-center relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl"}>
                <div className={"mb-6 py-8 w-[300px]"}>
                    <img src="assets/image/logo-without-background.png" />
                </div>
                <h1 className={"mb-10 bold text-8"}>Comming Soon!</h1>
            </div>
            <video
                autoPlay
                loop
                muted
                className={"absolute z-10 w-auto min-w-full min-h-full max-w-none"}
            >
                <source
                    src="assets/video/trailer_v1.mp4#t=7"
                    type="video/mp4"
                />
            </video>
        </section>
      </main>
  )
}
