"use client";
import React from "react";
import { Carousel, Card } from "../components/projectcards";

export function FeaturedProject() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center pt-28 lg:pt-34">
      <h1 className="font-bold text-[30px]">FEATURED PROJECTS</h1>
      <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
        EXPLORE MY WORK
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const SeabornContent = () => (
  <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Full-stack ERP and warehouse management system built from scratch for
      the maritime supply industry. Sole architect — selected the tech stack
      and owned end-to-end delivery across frontend and backend. Helped the
      product secure seed funding.
    </p>
    <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
      {[
        "Angular 17+",
        "Signals / NgRx",
        "ASP.NET Core",
        "C#",
        "SocketIO",
        "IndexedDB / Dexie.js",
        "Flutter",
        "PostgreSQL",
      ].map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const AsendiaContent = () => (
  <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Multi-country logistics management system serving 15+ countries. C# /
      ASP.NET Core RESTful services with typed contracts and multi-region data
      sync pipelines. Angular frontend with NgRx and a SASS design system.
      PostgreSQL query optimisation delivering a 25% efficiency gain on
      high-volume shipping data.
    </p>
    <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
      {[
        "C# / ASP.NET Core",
        "Angular",
        "NgRx",
        "PostgreSQL",
        "Entity Framework Core",
        "SASS",
        "REST API",
      ].map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CrateAndBarrelContent = () => (
  <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Enterprise Angular frontend for one of North America&apos;s leading home
      furnishing retailers. Led the SAP Spartacus implementation at EPAM
      Systems — defining API contracts with backend teams, conducting code
      reviews, and driving sprint planning across international Agile/Scrum
      squads.
    </p>
    <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
      {[
        "SAP Spartacus",
        "Angular",
        "TypeScript",
        "Jenkins CI/CD",
        "Core Web Vitals",
        "Agile / Scrum",
      ].map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CB2Content = () => (
  <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Headless commerce frontend for CB2, the modern sister brand of Crate &amp;
      Barrel. Built using SAP Spartacus (Angular) with ContentStack CMS
      integration at Emakina. Delivered a brand-aligned, Figma-accurate
      Storybook component library enabling faster cross-market releases.
    </p>
    <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
      {[
        "SAP Spartacus",
        "Angular",
        "ContentStack CMS",
        "Storybook",
        "TypeScript",
        "SASS",
      ].map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const AllSaintsContent = () => (
  <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Enterprise Angular frontend for the global fashion brand AllSaints.
      Delivered via EPAM Systems using SAP Spartacus — improving Core Web
      Vitals (LCP, CLS, FID) through lazy loading, HTTP caching, and data
      prefetching across high-traffic international storefronts.
    </p>
    <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
      {[
        "SAP Spartacus",
        "Angular",
        "TypeScript",
        "Core Web Vitals",
        "Jenkins CI/CD",
        "Performance",
      ].map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const LegoContent = () => (
  <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Headless commerce storefront for LEGO, one of the world&apos;s most
      iconic toy brands. Built with SAP Spartacus (Angular) and ContentStack
      CMS at Emakina. Delivered a brand-aligned, Figma-accurate Storybook
      component library with full TypeScript coverage and rigorous Jasmine/Karma
      unit test protocols.
    </p>
    <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
      {[
        "SAP Spartacus",
        "Angular",
        "ContentStack CMS",
        "Storybook",
        "TypeScript",
        "SASS",
      ].map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const RivoliContent = () => (
  <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Headless commerce storefront for Rivoli Shop, a premium multi-brand
      retail chain across the Middle East and Asia. Built with Vue Storefront
      (VueJS — Vue Router, Vuex, Axios) and ContentStack CMS at Emakina.
      Delivered a fully documented Vue component library aligned to brand
      guidelines.
    </p>
    <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
      {[
        "Vue Storefront",
        "VueJS",
        "Vue Router",
        "Vuex",
        "ContentStack CMS",
        "Storybook",
      ].map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const data = [
  {
    category: "FULL STACK / ERP",
    title: "Ship Supply ERP & WMS",
    src: "/seaborn.png",
    link: "https://www.seabornsoftware.com/",
    slug: "seaborn-erp",
    content: <SeabornContent />,
  },
  {
    category: "FULL STACK / ENTERPRISE",
    title: "International Logistics Platform",
    src: "/asendia.png",
    link: "https://www.asendia.com",
    slug: "asendia-logistics",
    content: <AsendiaContent />,
  },
  {
    category: "FRONTEND / ENTERPRISE",
    title: "Crate & Barrel",
    src: "/crateandbarrel.svg",
    link: "https://www.crateandbarrel.com/",
    content: <CrateAndBarrelContent />,
  },
  {
    category: "FRONTEND / ENTERPRISE",
    title: "CB2",
    src: "/cb2.svg",
    link: "https://www.cb2.com/",
    content: <CB2Content />,
  },
  {
    category: "FRONTEND / ENTERPRISE",
    title: "AllSaints",
    src: "/allsaints.svg",
    link: "https://www.allsaints.com/eu",
    content: <AllSaintsContent />,
  },
  {
    category: "FRONTEND / ENTERPRISE",
    title: "LEGO",
    src: "/lego.png",
    link: "https://www.lego.com",
    content: <LegoContent />,
  },
  {
    category: "FRONTEND / ENTERPRISE",
    title: "Rivoli Shop",
    src: "/rivoli.svg",
    link: "https://www.rivolishop.com/",
    content: <RivoliContent />,
  },
];
