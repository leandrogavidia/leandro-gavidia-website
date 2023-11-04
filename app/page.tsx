import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-10">
      <section className="flex flex-col items-center justify-center w-full gap-5 bg-gradient-zinc rounded-lg p-5 text-center shadow-2xl">
        <Image 
          src="/images/personal/leandro-gavidia-picture.jpg"
          alt="Personal picture"
          title="Personal picture"
          width={160}
          height={160}
          className="rounded-full shadow-xl"
        />
        <div className="flex flex-col justify-center items-center gap-y-10">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <h1 className="text-2xl font-bold">Leandro Gavidia Santamaria</h1>
            <p className="text-sm">Fullstack Developer, Web3 Developer, Smart Contract Developer</p>
          </div>
          <h2 className="text-xs font-normal underline-offset-4 underline">There is no perfection in technology</h2>
        </div>
      </section>
      <section className="flex flex-col justify-center items-start gap-y-5">
        <h2 className="text-2xl font-bold underline-offset-4 underline">About me</h2>
        <article className="flex flex-col items-start justify-start gap-y-5">
          <p>During my career as a programmer, I have had the privilege of collaborating with several small and medium-sized companies, taking on technological challenges that have contributed significantly to their success and growth.</p>

          <p>Through a combination of solid technical expertise and interpersonal skills, I have been able to establish stable relationships with my clients, fully understanding their needs and adapting to their business environment.</p>

          <p>One of the fundamental keys to my work has been the ability to identify the pain points in each company. Through careful analysis of existing systems or by developing new applications from scratch, I have been able to optimize internal processes and boost productivity by implementing customized solutions.</p>
        </article>
      </section>
    </div>
    )
}
