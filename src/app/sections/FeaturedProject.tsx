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

const SeabornContent = () => {
  return (
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
};

const AsendiaContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
        Multi-country logistics management system serving 15+ countries. C# /
        ASP.NET Core RESTful services with typed contracts and multi-region
        data sync pipelines. Angular frontend with NgRx and a SASS design
        system. PostgreSQL query optimisation delivering a 25% efficiency gain
        on high-volume shipping data.
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
};

const HeadlessContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl font-sans max-w-3xl mx-auto mb-6">
        Enterprise frontend delivery for Crate &amp; Barrel, AllSaints, LEGO,
        CB2, and Rivoli Shop. Led CI/CD pipeline automation with Jenkins,
        cutting release cycles by 40%. Improved Core Web Vitals across
        high-traffic global commerce platforms.
      </p>
      <div className="flex flex-wrap gap-2 max-w-3xl mx-auto mb-6">
        {[
          "SAP Spartacus (Angular)",
          "Vue Storefront",
          "Jenkins CI/CD",
          "ContentStack CMS",
          "Storybook",
          "TypeScript",
        ].map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF611D]/10 border border-[#FF611D]/30 text-[#FF611D]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 max-w-3xl mx-auto">
        {[
          { label: "Crate & Barrel", href: "https://www.crateandbarrel.com" },
          { label: "AllSaints", href: "https://www.allsaints.com" },
          { label: "LEGO", href: "https://www.lego.com" },
          { label: "CB2", href: "https://www.cb2.com" },
          { label: "Rivoli Shop", href: "https://www.rivolishop.com" },
        ].map((brand) => (
          <a
            key={brand.label}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-3 py-1 rounded-full border border-[#D6D2BD]/30 text-[#D6D2BD]/70 hover:border-[#FF611D] hover:text-[#FF611D] transition-colors duration-200"
          >
            {brand.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    category: "FULL STACK / ERP",
    title: "Ship Supply ERP & WMS",
    src: "/seaborn.png",
    link: "https://appa.shipsupply.app",
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
    title: "Headless Commerce Platforms",
    src: "/lego.png",
    slug: "headless-commerce",
    content: <HeadlessContent />,
  },
];
