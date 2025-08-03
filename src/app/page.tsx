import Image from "next/image";

const stacks = [
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Flutter", icon: "/flutter.svg" },
  { name: "Tailwind", icon: "/tailwind.svg" },
  { name: "Express.js", icon: "/expressjs.svg" },
  { name: "C#", icon: "/csharp.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Dart", icon: "/dart.svg" },
  { name: "Flutter", icon: "/flutter.svg" },
  { name: "PostgreSQL", icon: "/postgresql.svg" },
  { name: "Sqlite", icon: "/sqlite.svg" },
  { name: "Firebase", icon: "/firebase.svg" },
  { name: "Git", icon: "/git.svg" },
];

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto mt-8">
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-auto relative flex justify-center">
          <Image
            src='/character.svg'
            alt="character"
            width={280}
            height={280}
            className="h-75 md:h-120 w-auto"
          >
          </Image>
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-4">
          <p className="font-extralight text-sm sm:text-2xl">
            Hi, I&apos;am
          </p>
          <h1 className="text-2xl sm:text-4xl font-semibold">Muhammad Syaifur Rozi</h1>
          <h2 className="text-lg sm:text-2xl text-[var(--color-accent-blue)]">
            Mobile and Web Developer
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-dim)]">
            Undergraduate Information Technology student at the University of Jember 
            who enjoys building web and mobile apps using TypeScript and Flutter. 
            Likes solving logic problems and exploring backend development. 
            Also plays CTFs and explores AI and cybersecurity.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <Image
                src='/github.svg'
                alt='github'
                width={30}
                height={30}
              />
              <a href="https://github.com/oujisan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <p className="underline underline-offset-4 font-light text-[var(--color-text-dim)] hover:text-[var(--color-accent-blue)]">
                  github.com/oujisan
                </p>
              </a>
            </div>
            <div className="flex flex-row items-center gap-4 ml-1">
              <Image
                src='/linkedin.svg'
                alt='linkedin'
                width={26}
                height={26}
              />
              <a href="https://linkedin.com/in/oujisan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <p className="underline underline-offset-4 font-light text-[var(--color-text-dim)] hover:text-[var(--color-accent-blue)]">
                  linkedin.com/in/oujisan
                </p>
              </a>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image
                src='/email.svg'
                alt='email'
                width={30}
                height={30}
              />
              <a href="mailto:oujisan.main@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <p className="underline underline-offset-4 font-light text-[var(--color-text-dim)] hover:text-[var(--color-accent-blue)]">
                  oujisan.main@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <h1 className="flex max-w-screen-xl mx-auto justify-center text-2xl md:text-4xl mt-24 font-semibold">
        Tech Stack
      </h1>
      
      <section className="flex flex-row flex-wrap mt-12 gap-4 items-center justify-center px-4">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-row items-center w-fit gap-2 border-2 border-[var(--color-panel)] hover:border-[var(--color-accent-blue)] rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition duration-200"
          >
            <Image
              src={stack.icon}
              alt={stack.name}
              width={20}
              height={20}
              className="h-5 w-auto"
            />
            <p>{stack.name}</p>
          </div>
        ))}
      </section>

      <h1 className="flex max-w-screen-xl mx-auto justify-center text-2xl md:text-4xl mt-24 font-semibold">
        What I Do
      </h1>
      <section className="flex flex-col md:flex-row mt-12 gap-6 px-4 mb-24">
        <div className="border-3 border-[var(--color-panel)] rounded-xl w-full md:w-1/2 h-auto relative flex flex-col justify-center items-center p-6 gap-4">
          <Image
            src='/ctf.svg'
            alt='ctf'
            width={100}
            height={100}
            className="h-30 w-auto"
          />
          <h2 className="text-2xl">
            Solving CTF Challange
          </h2>
          <p className="text-[var(--color-text-dim)] text-base text-center">
            Solve security challenges like web exploits and digital forensics, and document them through write-ups for learning and sharing.
          </p>
        </div>
        <div className="border-3 border-[var(--color-panel)] rounded-xl w-full md:w-1/2 h-auto relative flex flex-col justify-center items-center p-6 gap-4">
          <Image
            src='/code.svg'
            alt='code'
            width={100}
            height={100}
            className="h-30 w-auto"
          />
          <h2 className="text-2xl">
            Build Mobile & Web App
          </h2>
          <p className="text-[var(--color-text-dim)] text-base text-center">
            Crafting modern and scalable apps for both web and mobile, using TypeScript, React, Next.js, and Flutter.
          </p>
        </div>
        <div className="border-3 border-[var(--color-panel)] rounded-xl w-full md:w-1/2 h-auto relative flex flex-col justify-center items-center p-6 gap-4">
          <Image
            src='/algorithm.svg'
            alt='ctf'
            width={100}
            height={100}
            className="h-30 w-auto"
          />
          <h2 className="text-2xl">
            Exploring the Backstage
          </h2>
          <p className="text-[var(--color-text-dim)] text-base text-center">
            Curious about what&apos;s happening behind the interface. How logic flows, systems connect, and code quietly makes things work.
          </p>
        </div>
      </section>
    </main>
  );
}