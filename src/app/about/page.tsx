import React from "react";
import Image from "next/image";
import AnimatedContent from "../components/animatedcontent";
import { getYearsOfExperience } from "../lib/utils";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["Angular 17/18+", "TypeScript", "NgRx / Signals / RxJS", "React", "Next.js", "Vue.js", "SSR / CSR"],
  },
  {
    category: "Backend",
    skills: ["C# / ASP.NET Core", ".NET 6/8", "Node.js", "REST API Design", "GraphQL", "SocketIO", "Entity Framework Core"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQL Server", "IndexedDB / Dexie.js", "Firebase Firestore"],
  },
  {
    category: "Mobile",
    skills: ["Flutter / Dart", "Ionic Framework", "App Store & Play Store"],
  },
  {
    category: "DevOps & Tooling",
    skills: ["Jenkins CI/CD", "Git / GitHub", "Storybook", "Figma", "Agile / Scrum", "Nx Monorepo"],
  },
  {
    category: "eCommerce & CMS",
    skills: ["SAP Spartacus / Hybris", "Vue Storefront", "ContentStack CMS", "Headless Commerce"],
  },
];

const AboutPage = () => {
  return (
    <div>
      <div className="relative font-mono">
        <div className="container mx-auto px-10 md:px-15 lg:px-12 pt-28 lg:pt-40">
          <AnimatedContent
            distance={10}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <h1 className="text-5xl font-bold mb-12">Hi, I&apos;m Özkan!</h1>
          </AnimatedContent>

          {/* Image section — shows at top on sm/md screens */}
          <AnimatedContent
            distance={10}
            direction="horizontal"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="block lg:hidden mb-8">
              <div className="flex justify-center">
                <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-full">
                  <Image
                    src="/profil-pic.png"
                    alt="Ozkan Dogu profile photo"
                    fill
                    className="object-cover object-center rounded-full"
                  />
                </div>
              </div>
            </div>
          </AnimatedContent>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-16">
            {/* Text section */}
            <AnimatedContent
              distance={10}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="lg:max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium mb-4">
                    A{" "}
                    <span className="text-[#FF611D]">frontend-first engineer</span>{" "}
                    with full-stack reach,{" "}
                    <span className="text-[#FF611D]">{getYearsOfExperience(2019, 6)} years</span>{" "}
                    of experience, and a strong{" "}
                    <span className="text-[#FF611D]">product ownership mindset</span>.
                  </h2>
                  <p className="mb-6">
                    Based in{" "}
                    <span className="text-[#FF611D]">Izmir, Türkiye</span>, I work remotely
                    with engineering teams across the UK, US, and Europe. I&apos;ve
                    architected a ship-supply ERP and WMS platform from scratch at a
                    seed-funded startup, contributed to multi-country logistics systems
                    serving 15+ countries at Asendia, and delivered headless commerce
                    experiences for brands like{" "}
                    <span className="text-[#FF611D]">
                      Crate &amp; Barrel, AllSaints, LEGO, CB2, and Rivoli Shop
                    </span>{" "}
                    across EPAM Systems and Emakina.
                  </p>
                  <p className="mb-6">
                    My core expertise is{" "}
                    <span className="text-[#FF611D]">frontend engineering</span> —
                    Angular, React, Next.js, NgRx, Signals, and scalable UI architecture.
                    When products require it, I extend into full-stack development with{" "}
                    <span className="text-[#FF611D]">
                      C#, ASP.NET Core, PostgreSQL, Node.js, Socket.IO
                    </span>
                    , and Flutter modules.
                  </p>
                  <p>
                    I value{" "}
                    <span className="text-[#FF611D]">clean architecture</span>,{" "}
                    CI/CD-first delivery, autonomous execution in remote teams, and
                    engineering decisions grounded in product impact.
                  </p>
                </div>
                <div className="text-sm opacity-60">
                  Education — Dokuz Eylül University, Computer Programming (2018), İzmir, Türkiye.
                </div>
              </div>
            </AnimatedContent>

            {/* Image section — only on lg+ */}
            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="hidden lg:block">
                <div className="flex justify-end">
                  <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-full">
                    <Image
                      src="/profil-pic.png"
                      alt="Ozkan Dogu profile photo"
                      fill
                      className="object-cover object-center rounded-full"
                    />
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>

      {/* Tech Skills Grid */}
      <div className="container mx-auto px-10 md:px-16 pb-16">
        <AnimatedContent
          distance={20}
          direction="vertical"
          reverse={false}
          config={{ tension: 70, friction: 13 }}
          initialOpacity={0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <div className="text-center mb-8">
            <h2 className="font-bold text-[24px]">TECHNICAL SKILLS</h2>
            <p className="font-mono text-[#FF611D] text-sm mt-1">CORE COMPETENCIES</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map(({ category, skills }) => (
              <div key={category} className="bg-[#1a1a1a] rounded-2xl p-5">
                <h3 className="font-mono font-bold text-[#FF611D] text-xs uppercase tracking-widest mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#333333] border border-[#D6D2BD]/10 text-[#D6D2BD]/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default AboutPage;
