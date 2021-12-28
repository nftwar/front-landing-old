import { PlayButton } from "../components/playButton";
import Link from "next/link";
import { SnsContainer } from "../components/footer/sns/container";
import { SnsItems } from "../components/footer/sns/items";

export default function Home() {
  return (
      <main className={"flex flex-col"}>
        <section className={"flex justify-center bg-[#303030] min-w-full min-h-full max-w-none relative items-center h-screen overflow-hidden"}>
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

                {/*	sns */}
                <div className={"mt-10 mb-10"}>
                    <SnsContainer>
                        <SnsItems type="twitter_white" href="https://www.twitter.com/nftwar_games"/>
                        <SnsItems type="medium_white" href="https://medium.com/@NFTWAR"/>
                        <SnsItems type="youtube_white" href="https://www.youtube.com"/>
                        <SnsItems type="discord_white" href="https://discord.gg/E3uypkR22Z"/>
                    </SnsContainer>
                </div>
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
        <section className={"relative grid grid-cols-2 py-24 bg-black bg-black/25 min-h-[900px]"}>
            <div className={"flex justify-center items-center col-span-1 py-28"}>
            </div>
            <div className={"flex justify-center items-center col-span-1"}>
                <div className={"bg-white/80 border-solid max-w-[500px] border-[1px] border-black rounded-[8px] py-16 px-15"}>
                    <h2 className={"font-bold text-[24px] mb-6"}>Interface</h2>
                    <p className={"mb-4"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href={"/interface"}>
                        <a className={"inline-block py-4 px-6 border-solid border-black border-[2px] rounded-[5px]"}>Go to Interface</a>
                    </Link>
                </div>
            </div>
            <img className="absolute w-full h-full z-[-1] object-cover" src="/assets/image/garage.png" alt="" />
        </section>
        <section className={"relative flex justify-center items-center py-24 min-h-[400px]"}>
            <div className={"container mx-auto flex items-center justify-between"}>
                <h3 className={"text-[32px] font-bold"}></h3>
                <div className={"flex items-center gap-x-4"}>
                    <Link href={"#"}>
                        <a className={"block w-[200px] text-center py-[14px] rounded-[8px] bg-black text-white"}>
                            Play dApp
                        </a>
                    </Link>
                    <Link href={"#"}>
                        <a className={"block w-[200px] text-center py-[14px] rounded-[8px] bg-transparent bg-[#FFAA00] text-white"}>
                            Mint NFT
                        </a>
                    </Link>
                </div>
            </div>
            <img className="absolute w-full h-full z-[-1] object-cover" src="/assets/image/city.png" alt="" />
        </section>
        <section className={"bg-[#303030] flex items-center justify-center py-[110px]"}>
            <div className={"container mx-auto grid grid-cols-2 gap-x-[30px]"}>
                <div className={"flex justify-center items-center bg-white grid-span-1 h-[360px] border-solid border-[1px] border-black rounded-[8px]"}>
                    <h1 className={"text-[32px]"}>needs image</h1>
                </div>
                <div className={"bg-gradient-to-br text-white from-[#0D2289] to-[#06093B] grid-span-1 h-[360px] border-solid border-[3px] border-[#c6c6c6] rounded-[8px] p-8 pl-12 text-[20px]"}>
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
    
          <section className={"bg-[#303030] flex items-center justify-center py-[110px]"}>
              <div className={"container mx-auto grid grid-cols-2 gap-x-[30px]"}>
                  <div className={"bg-gradient-to-br text-white from-[#0D2289] to-[#06093B] grid-span-1 h-[360px] border-solid border-[3px] border-[#c6c6c6] rounded-[8px] p-8 pl-12 text-[20px]"}>
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
                  <div className={"flex justify-center items-center bg-white grid-span-1 h-[360px] border-solid border-[1px] border-black rounded-[8px]"}>
                      <h1 className={"text-[32px]"}>needs image</h1>
                  </div>
              </div>
          </section>
      </main>
  )
}
