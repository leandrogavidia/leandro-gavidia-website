import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-y-10">
      <section className="flex flex-col items-center justify-center w-full gap-5 bg-gradient-zinc rounded-lg p-5 text-center shadow-2xl sm:flex-row sm:gap-10">
        <Image 
          src="/images/personal/leandro-gavidia-picture.jpg"
          alt="Personal picture"
          title="Personal picture"
          width={160}
          height={160}
          className="rounded-full shadow-xl"
        />
        <div className="flex flex-col justify-center items-center gap-y-10 sm:items-start">
          <div className="flex flex-col justify-center items-center gap-y-3 sm:items-start">
            <h1 className="text-2xl font-bold sm:text-3xl">Leandro Gavidia Santamaria</h1>
            <p className="text-sm sm:text-xl">Solana Developer | Content creator</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-5 sm:items-start">
            <h2 className="text-xs font-normal underline-offset-4 underline sm:text-base">There is no perfection in technology</h2>
            <address className="text-xs sm:text-base"><span className="font-semibold">Contact me:</span> contact@leandrogavidia.com</address>
          </div>
        </div>
      </section>
    </div>
    )
}
