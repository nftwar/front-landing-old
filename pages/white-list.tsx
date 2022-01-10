function WhiteListPage() {
	return (
		<main className={"bg-[#303030] px-[28px] py-[44px]"}>
			<section className={"bg-gradient-to-br text-white from-[#0D2289] to-[#06093B] grid-span-1 border-solid border-[3px] border-[#c6c6c6] rounded-[8px] p-8 pl-12 text-[20px]"}>
				<h1 className={"px-[24px] py-[18px] font-bold text-[24px]"}>White List</h1>
				<article className={"flex flex-col items-center justify-center min-h-[500px]"}>
                    
                    {/* Top table */}
                    <div className={"flex items-center pt-15 pb-20 text-2xl divide-x"}>
                        <div className={"flex flex-row items-center text-2xl px-10"}>
                            <div className={"flex flex-col items-center text-2xl"}>
                                <div className={"pb-10"}>
                                    0
                                </div>
                                <div>
                                    Your Entries
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row items-center text-2xl px-10"}>
                            <div className={"flex flex-col items-center text-2xl"}>
                                <div className={"pb-10"}>
                                    0
                                </div>
                                <div>
                                    Days Left
                                </div>
                            </div>
                        </div>
                    </div>
 
                    <div className={"flex items-center pt-15 pb-20 text-2xl"}>
                        NFT War Whitelist (Presale List) Opportunity 
                    </div>
                    <img className="w-full h-full object-cover" src="/assets/image/white-list-banner.png" alt="" />
                    
                    <div className={"flex items-center pt-15 pb-20"}>
                        Join the whitelist (presale list) for NFT War!
                    </div>

                    <div className={"flex items-center pt-15 pb-20 text-2xl"}>
                        Own Your Machines
                    </div>
                    <img className="max-w-sm max-h-sm" src="/assets/image/white-list-machines.png" alt=""/>
                    <div className={"flex items-center pt-15 pb-20"}>
                        Individually crafted, high-fidelity NFT Machines.
                    </div>
				</article>
			</section>
		</main>
	);
}

export default WhiteListPage;
