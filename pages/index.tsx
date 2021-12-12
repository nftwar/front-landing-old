import { PlayButton } from "../components/playButton";
import Link from "next/link";

export default function Home() {
  return (
      <main className={"flex flex-col bg-[#303030]"}>
        <section className={"flex justify-center bg-[#303030] min-w-full min-h-full max-w-none relative items-center h-screen mb-12 overflow-hidden"}>
            <div className={"flex flex-col items-center pt-15 pb-20 text-center relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl"}>
                <div className={"mb-6 py-8 w-[300px]"}>
                    <img src="assets/image/logo-without-background.png" />
                </div>
                <h1 className={"mb-10 bold text-8"}>Ready to get started?</h1>
                <p className={"mb-8 max-w-[400px]"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <PlayButton />
            </div>
            <video
                autoPlay
                loop
                muted
                className={"absolute z-10 w-auto min-w-full min-h-full max-w-none"}
            >
                <source
                    src="assets/video/trailer_v1.mp4#t=7,29"
                    type="video/mp4"
                />
            </video>
        </section>
        <section className={"bg-[url('assets/image/garage.png')] grid grid-cols-2 bg-[url('assets/image/garage.png')]"}>
            <div className={"flex justify-center items-center col-span-1 py-28"}>
            </div>
            <div className={"flex justify-center items-center col-span-1 bg-[#303030]"}>
                <div className={"bg-white/50 border-solid max-w-[500px] border-[1px] border-black rounded-[8px] py-16 px-15"}>
                    <h2 className={"font-bold text-[24px] mb-6"}>Interface</h2>
                    <p className={"mb-4"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href={"/interface"}>
                        <a className={"inline-block py-4 px-6 border-solid border-[1px] border-black rounded-[5px]"}>Go to Interface</a>
                    </Link>
                </div>
            </div>
        </section>
        <section className={"bg-fixed bg-[url('/assets/image/city.png')] flex justify-center items-center py-24"}>
            <div className={"container mx-auto flex items-center justify-between"}>
                <h3 className={"text-[32px] font-bold"}></h3>
                <div className={"flex items-center gap-x-4"}>
                    <Link href={"#"}>
                        <a className={"block w-[200px] text-center py-[14px] rounded-[8px] bg-black text-white"}>
                            Play dApp
                        </a>
                    </Link>
                    <Link href={"#"}>
                        <a className={"block w-[200px] text-center py-[14px] rounded-[8px] border-solid border-[1px] border-black"}>
                            Mint NFT
                        </a>
                    </Link>
                </div>
            </div>
        </section>
        <section className={"bg-[#F2F2F2] flex items-center justify-center py-[110px]"}>
            <div className={"container mx-auto grid grid-cols-2 gap-x-[30px]"}>
                <div className={"bg-white grid-span-1 h-[360px] border-solid border-[1px] border-black rounded-[8px]"} />
                <div className={"bg-white grid-span-1 h-[360px] border-solid border-[1px] border-black rounded-[8px] p-8 pl-12 text-[20px]"}>
                    <h3 className={"mb-[24px] font-bold"}>LAND</h3>
                    <p className={"mb-[42px] "}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className={"list-disc"}>
                        <li>Benefit of Feature</li>
                        <li>Benefit of Feature</li>
                        <li>Benefit of Feature</li>
                    </ul>
                </div>
            </div>
        </section>
    
          <section className={"bg-[#F2F2F2] flex items-center justify-center py-[110px]"}>
              <div className={"container mx-auto grid grid-cols-2 gap-x-[30px]"}>
                  <div className={"bg-white grid-span-1 h-[360px] border-solid border-[1px] border-black rounded-[8px] p-8 pl-12 text-[20px]"}>
                      <h3 className={"mb-[24px] font-bold"}>CLAN</h3>
                      <p className={"mb-[42px] "}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <ul className={"list-disc"}>
                          <li>Benefit of Feature</li>
                          <li>Benefit of Feature</li>
                          <li>Benefit of Feature</li>
                      </ul>
                  </div>
                  <div className={"bg-white grid-span-1 h-[360px] border-solid border-[1px] border-black rounded-[8px]"} />
              </div>
          </section>
      </main>
  )
}
