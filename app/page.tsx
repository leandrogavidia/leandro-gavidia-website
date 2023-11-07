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
            <p className="text-sm sm:text-xl">Fullstack, Web3 and Smart Contract Developer</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-5 sm:items-start">
            <h2 className="text-xs font-normal underline-offset-4 underline sm:text-base">There is no perfection in technology</h2>
            <address className="text-xs sm:text-base"><span className="font-semibold">Contact me:</span> contact@leandrogavidia.com</address>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-start gap-y-5">
        <h2 className="text-2xl font-bold underline-offset-4 underline sm:text-3xl">About me</h2>
        <article className="flex flex-col items-start justify-start gap-y-5 text-lg">
          <p>During my career as a programmer, I have had the privilege of collaborating with several small and medium-sized companies, taking on technological challenges that have contributed significantly to their success and growth.</p>

          <p>Through a combination of solid technical expertise and interpersonal skills, I have been able to establish stable relationships with my clients, fully understanding their needs and adapting to their business environment.</p>

          <p>One of the fundamental keys to my work has been the ability to identify the pain points in each company. Through careful analysis of existing systems or by developing new applications from scratch, I have been able to optimize internal processes and boost productivity by implementing customized solutions.</p>
        </article>
      </section>
    </div>
    )
}
