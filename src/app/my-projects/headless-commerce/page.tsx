"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";

const brands = [
  { name: "Crate & Barrel", href: "https://www.crateandbarrel.com", detail: "SAP Spartacus (Angular) — EPAM" },
  { name: "AllSaints", href: "https://www.allsaints.com", detail: "SAP Spartacus (Angular) — EPAM" },
  { name: "LEGO", href: "https://www.lego.com", detail: "SAP Spartacus (Angular) — Emakina" },
  { name: "CB2", href: "https://www.cb2.com", detail: "SAP Spartacus (Angular) — Emakina" },
  { name: "Rivoli Shop", href: "https://www.rivolishop.com", detail: "Vue Storefront (VueJS) — Emakina" },
];

const content = [
  {
    title: "THE WORK",
    description: (
      <div>
        <p className="mb-4">
          Over four years across two agencies (EPAM Systems and Emakina), I
          led and contributed to enterprise frontend delivery for five major
          global brands — spanning headless commerce architecture, CI/CD
          pipeline automation, and Core Web Vitals optimisation.
        </p>
        <p>
          This represents some of the highest-scale production work of my
          career: high-traffic global e-commerce platforms with millions of
          monthly visitors, strict performance budgets, and enterprise-grade
          quality standards.
        </p>
      </div>
    ),
  },
  {
    title: "SAP SPARTACUS — EPAM SYSTEMS",
    description: (
      <div>
        <p className="mb-4">
          At EPAM Systems (2021–2023), led Angular frontend tracks for{" "}
          <a href="https://www.crateandbarrel.com" target="_blank" rel="noopener noreferrer" className="text-orange underline">Crate &amp; Barrel</a>{" "}
          and{" "}
          <a href="https://www.allsaints.com" target="_blank" rel="noopener noreferrer" className="text-orange underline">AllSaints</a>{" "}
          using SAP Spartacus:
        </p>
        <ul className="space-y-3">
          <li>
            <span className="text-orange font-bold">Technical leadership:</span>{" "}
            Defined API contracts with backend teams, conducted code reviews,
            and ran sprint planning in international Agile/Scrum across US and
            UK time zones.
          </li>
          <li>
            <span className="text-orange font-bold">CI/CD automation:</span>{" "}
            Built Jenkins pipelines with automated build, lint, test, and
            deploy stages —{" "}
            <span className="text-orange font-bold">
              cutting production release cycles by 40%
            </span>
            .
          </li>
          <li>
            <span className="text-orange font-bold">
              Core Web Vitals:
            </span>{" "}
            Improved LCP, CLS, and FID metrics via lazy loading, HTTP caching,
            and data prefetching on high-traffic global commerce platforms.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "HEADLESS COMMERCE — EMAKINA",
    description: (
      <div>
        <p className="mb-4">
          At Emakina (2019–2021), delivered headless commerce for three brands
          across two frameworks:
        </p>
        <ul className="space-y-3">
          <li>
            <span className="text-orange font-bold">LEGO &amp; CB2:</span>{" "}
            SAP Spartacus (Angular) with ContentStack CMS integration and
            brand-specific component customisation.
          </li>
          <li>
            <span className="text-orange font-bold">Rivoli Shop:</span>{" "}
            Vue Storefront (VueJS — Vue Router, Vuex, Axios) with ContentStack
            CMS — a different framework, same delivery standards.
          </li>
          <li>
            <span className="text-orange font-bold">Component libraries:</span>{" "}
            Brand-aligned, Figma-accurate, Storybook-documented Angular and
            Vue component libraries for three global brands — enabling a{" "}
            <span className="text-orange font-bold">
              30% faster cross-market delivery
            </span>
            .
          </li>
          <li>
            <span className="text-orange font-bold">Test coverage:</span>{" "}
            Jasmine/Karma unit testing protocols maintaining 80%+ coverage on
            critical modules.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "BRANDS DELIVERED",
    description: (
      <div>
        <div className="grid grid-cols-1 gap-4">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#1a1a1a] rounded-xl px-5 py-4 border border-[#D6D2BD]/10 hover:border-[#FF611D]/50 transition-all duration-200"
            >
              <div>
                <span className="font-bold text-[#D6D2BD] group-hover:text-[#FF611D] transition-colors duration-200">
                  {brand.name}
                </span>
                <p className="text-xs font-mono text-[#D6D2BD]/50 mt-0.5">
                  {brand.detail}
                </p>
              </div>
              <span className="text-[#FF611D] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    ),
  },
];

export default function HeadlessCommerce() {
  return (
    <div className="relative min-h-screen">
      <div className="w-full pt-20">
        <div className="bg-[#1a1a1a] flex justify-center items-center py-12 px-8">
          <Image
            src="/lego.png"
            alt="Headless Commerce Platforms"
            height={500}
            width={900}
            className="object-contain max-h-80 rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full px-5 md:px-15.5 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="font-sans font-semibold text-[43.46px] mb-6">
            HEADLESS COMMERCE PLATFORMS
          </h1>
          <p className="font-mono text-[18.07px] mb-8">
            Enterprise frontend delivery for{" "}
            <span className="text-orange">
              Crate &amp; Barrel, AllSaints, LEGO, CB2, and Rivoli Shop
            </span>{" "}
            — using SAP Spartacus (Angular) and Vue Storefront across EPAM Systems and Emakina.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "SAP Spartacus • Angular • Vue Storefront • VueJS • Jenkins CI/CD • ContentStack • Storybook • TypeScript • ",
              ]}
              velocity={20}
              className="font-mono text-[18.07px] text-orange"
              numCopies={4}
              velocityMapping={{ input: [0, 1000], output: [2, 2] }}
              parallaxClassName="h-16"
              scrollerClassName="items-center"
            />
          </div>
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}
