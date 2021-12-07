import { PlayButton } from "../components/playButton";
import Link from "next/link";

export default function Home() {
  return (
      <main className={"flex flex-col gap-y-7.5 mb-7.5"}>
        <section className={"flex justify-center bg-[#F2F2F2]"}>
            <div className={"flex flex-col items-center pt-15 pb-20 text-center"}>
                <div className={"mb-6 bg-[#C4C4C4] text-white py-8 w-[300px]"}>
                    NFT WAR LOGO
                </div>
                <h1 className={"mb-10 bold text-8"}>Ready to get started?</h1>
                <p className={"mb-8 max-w-[400px]"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <PlayButton />
            </div>
        </section>
        <section className={"grid grid-cols-2 h-[600px]"}>
            <div className={"flex justify-center items-center col-span-1 bg-black py-28"}>
                <div className={"bg-white p-36 rounded-[8px]"} />
            </div>
            <div className={"flex justify-center items-center col-span-1 bg-[#F2F2F2]"}>
                <div className={"bg-white border-solid max-w-[500px] border-[1px] border-black rounded-[8px] py-16 px-15"}>
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
        <section className={"bg-[#F2F2F2] flex justify-center items-center py-24"}>
            <div className={"container mx-auto flex items-center justify-between"}>
                <h3 className={"text-[32px] font-bold"}>이미지 자리</h3>
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
