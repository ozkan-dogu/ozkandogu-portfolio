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
      Greenfield ship-supply ERP and warehouse management system — sole
      architect from day one. Owned the full tech stack selection, system
      design, and end-to-end delivery across frontend and backend. The
      product secured seed funding.
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
      Full-stack logistics platform powering international parcel operations
      across 15+ countries. C# / ASP.NET Core APIs with typed contracts and
      multi-region data sync. Angular + NgRx frontend. 25% operational
      efficiency gain through targeted PostgreSQL query optimisation.
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
      Enterprise headless commerce frontend for one of North America&apos;s
      leading home furnishing retailers. Led the SAP Spartacus (Angular)
      implementation at EPAM — defining API contracts, driving code reviews,
      and running sprint planning across distributed US/UK Agile squads.
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
      Enterprise headless commerce frontend for the global fashion brand
      AllSaints. Delivered via EPAM Systems using SAP Spartacus — measurably
      improved Core Web Vitals (LCP, CLS, FID) through lazy loading, HTTP
      caching, and prefetching on high-traffic international storefronts.
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
      Headless commerce storefront for one of the world&apos;s most recognised
      toy brands. Built with SAP Spartacus (Angular) and ContentStack CMS at
      Emakina. Delivered a Figma-accurate, fully documented Storybook
      component library with TypeScript coverage and Jasmine/Karma unit tests.
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
      Headless commerce storefront for a premium multi-brand retail chain
      across the Middle East and Asia. Built with Vue Storefront (Vue Router,
      Vuex, Axios) and ContentStack CMS at Emakina. Delivered a fully
      documented Vue component library aligned to brand design guidelines.
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
    category: "ECOMMERCE / PLATFORM",
    title: "Crate & Barrel",
    src: "/crateandbarrel.svg",
    link: "https://www.crateandbarrel.com/",
    content: <CrateAndBarrelContent />,
  },
  {
    category: "ECOMMERCE / PLATFORM",
    title: "CB2",
    src: "/cb2.svg",
    link: "https://www.cb2.com/",
    content: <CB2Content />,
  },
  {
    category: "ECOMMERCE / PLATFORM",
    title: "AllSaints",
    src: "/allsaints.svg",
    link: "https://www.allsaints.com/eu",
    content: <AllSaintsContent />,
  },
  {
    category: "ECOMMERCE / PLATFORM",
    title: "LEGO",
    src: "/lego.png",
    link: "https://www.lego.com",
    content: <LegoContent />,
  },
  {
    category: "ECOMMERCE / PLATFORM",
    title: "Rivoli Shop",
    src: "/rivoli.svg",
    link: "https://www.rivolishop.com/",
    content: <RivoliContent />,
  },
];
