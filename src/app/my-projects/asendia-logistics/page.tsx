"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";

const content = [
  {
    title: "THE PLATFORM",
    description: (
      <div>
        <p className="mb-4">
          Asendia is a global logistics joint venture between La Poste and
          Swiss Post, operating international parcel and mail services across
          15+ countries. The platform handles high-volume international
          shipping data — customs declarations, carrier routing, regional
          compliance, and cross-border tracking.
        </p>
        <p>
          I joined as a{" "}
          <span className="text-orange font-bold">Full Stack Developer</span>,
          working across the .NET Core API layer and the Angular frontend to
          build and maintain the internal logistics management system.
        </p>
      </div>
    ),
  },
  {
    title: "BACKEND — ASP.NET CORE",
    description: (
      <div>
        <p className="mb-4">
          Designed and developed RESTful C# services in ASP.NET Core:
        </p>
        <ul className="space-y-3">
          <li>
            <span className="text-orange font-bold">Typed contracts:</span>{" "}
            Request/response models with validation middleware — consistent
            error handling across all endpoints.
          </li>
          <li>
            <span className="text-orange font-bold">Multi-region sync:</span>{" "}
            Data synchronisation pipelines coordinating logistics operations
            across 15+ countries with regional rule sets.
          </li>
          <li>
            <span className="text-orange font-bold">
              Database optimisation:
            </span>{" "}
            Entity Framework Core data models and migration strategies on
            PostgreSQL — query analysis and index improvements delivered a{" "}
            <span className="text-orange font-bold">25% efficiency gain</span>{" "}
            on high-volume shipping data workloads.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "FRONTEND — ANGULAR",
    description: (
      <div>
        <p className="mb-4">
          Built a production-grade multi-module Angular application:
        </p>
        <ul className="space-y-3">
          <li>
            <span className="text-orange font-bold">NgRx state:</span>{" "}
            Centralised state management with actions, reducers, effects, and
            selectors — predictable data flow across modules.
          </li>
          <li>
            <span className="text-orange font-bold">
              Lazy-loaded modules:
            </span>{" "}
            Feature modules loaded on demand to keep initial bundle size
            minimal for internal operations users.
          </li>
          <li>
            <span className="text-orange font-bold">SASS design system:</span>{" "}
            Component-level SASS architecture consuming the .NET Core API
            layer — consistent visual language across all logistics workflows.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "IMPACT",
    description: (
      <div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-orange text-lg">▸</span>
            <p>
              <span className="text-orange font-bold">25% efficiency gain</span>{" "}
              on database query performance through EF Core model optimisation
              and PostgreSQL index tuning.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange text-lg">▸</span>
            <p>
              Multi-region data pipelines supporting logistics operations
              across{" "}
              <span className="text-orange font-bold">15+ countries</span>{" "}
              with consistent data integrity.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange text-lg">▸</span>
            <p>
              Clean typed API contracts enabled parallel frontend/backend
              development with minimal integration friction.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm opacity-60">
          Source code is proprietary. Connect via{" "}
          <a
            href="https://linkedin.com/in/ozkan-dogu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange underline"
          >
            LinkedIn
          </a>{" "}
          for technical details.
        </p>
      </div>
    ),
  },
];

export default function AsendiaLogistics() {
  return (
    <div className="relative min-h-screen">
      <div className="w-full pt-20">
        <div className="bg-[#1a1a1a] flex justify-center items-center py-12 px-8">
          <Image
            src="/asendia.png"
            alt="Asendia International Logistics Platform"
            height={500}
            width={900}
            className="object-contain max-h-80 rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full px-5 md:px-15.5 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="font-sans font-semibold text-[43.46px] mb-6">
            INTERNATIONAL LOGISTICS PLATFORM
          </h1>
          <p className="font-mono text-[18.07px] mb-8">
            A{" "}
            <span className="text-orange">multi-country logistics management system</span>{" "}
            for Asendia — a La Poste / Swiss Post joint venture operating across 15+ countries.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "C# • ASP.NET Core • Angular • NgRx • PostgreSQL • Entity Framework Core • SASS • REST API • ",
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
