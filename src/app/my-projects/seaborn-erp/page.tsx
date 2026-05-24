"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";

const content = [
  {
    title: "THE CHALLENGE",
    description: (
      <div>
        <p className="mb-4">
          The maritime ship-supply industry runs on paper-based, manual
          processes — purchase orders, warehouse picking, and multi-role
          approvals spread across spreadsheets and phone calls. Seaborn
          approached this problem from scratch: no existing product, no
          codebase, no defined architecture.
        </p>
        <p>
          As the{" "}
          <span className="text-orange font-bold">sole architect</span>, I was
          responsible for selecting the entire tech stack, designing the data
          model, and delivering both the frontend and backend layers — while
          the product was simultaneously being pitched to investors.
        </p>
      </div>
    ),
  },
  {
    title: "ARCHITECTURE & TECH STACK",
    description: (
      <div>
        <p className="mb-4">
          Designed a clean layered architecture across frontend and backend:
        </p>
        <ul className="space-y-3">
          <li>
            <span className="text-orange font-bold">Frontend:</span> Angular
            17+ with Signals-based reactive state and NgRx store — multi-role
            workflow UIs, reactive forms, granular role-based access control,
            and Figma-to-production component delivery.
          </li>
          <li>
            <span className="text-orange font-bold">Backend API:</span>{" "}
            ASP.NET Core with a clean service / repository / data layer
            separation — typed request/response contracts, middleware, and
            business logic powering multi-role ERP operations.
          </li>
          <li>
            <span className="text-orange font-bold">Real-time:</span> SocketIO
            for live state synchronisation across all user roles — ensuring
            warehouse staff, purchasing agents, and managers see consistent
            data without manual refresh.
          </li>
          <li>
            <span className="text-orange font-bold">Offline-first:</span>{" "}
            IndexedDB (Dexie.js) data layer for resilient maritime operations
            in low-connectivity port environments.
          </li>
          <li>
            <span className="text-orange font-bold">Mobile:</span> Flutter
            cross-platform module for barcode scanning and warehouse inventory
            tracking — deployed on both Android and iOS.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "KEY OUTCOMES",
    description: (
      <div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-orange text-lg">▸</span>
            <p>
              Product secured{" "}
              <span className="text-orange font-bold">seed funding</span> —
              the live system was a direct part of the investment pitch.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange text-lg">▸</span>
            <p>
              Complete ERP + WMS delivered{" "}
              <span className="text-orange font-bold">
                from zero to production
              </span>{" "}
              as a single engineer — frontend, backend, mobile, and
              infrastructure decisions.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange text-lg">▸</span>
            <p>
              Real-time collaboration across warehouse, purchasing, and
              management roles with{" "}
              <span className="text-orange font-bold">
                zero page reload required
              </span>
              .
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange text-lg">▸</span>
            <p>
              Offline-first architecture ensures operations continue even when
              connectivity is interrupted at port.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "LIVE PRODUCT",
    description: (
      <div>
        <p className="mb-6">
          The Ship Supply ERP & WMS is live and actively used by the Seaborn
          team. You can visit the application at{" "}
          <a
            href="https://appa.shipsupply.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange underline"
          >
            appa.shipsupply.app
          </a>
          .
        </p>
        <p className="text-sm opacity-60">
          Source code is proprietary — available for discussion during
          interviews. Connect via{" "}
          <a
            href="https://linkedin.com/in/ozkan-dogu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange underline"
          >
            LinkedIn
          </a>{" "}
          for details.
        </p>
      </div>
    ),
  },
];

export default function SeabornERP() {
  return (
    <div className="relative min-h-screen">
      <div className="w-full pt-20">
        <div className="bg-[#1a1a1a] flex justify-center items-center py-12 px-8">
          <Image
            src="/seaborn.png"
            alt="Seaborn Ship Supply ERP"
            height={500}
            width={900}
            className="object-contain max-h-80 rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full px-5 md:px-15.5 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="font-sans font-semibold text-[43.46px] mb-6">
            SHIP SUPPLY ERP &amp; WMS
          </h1>
          <p className="font-mono text-[18.07px] mb-8">
            A{" "}
            <span className="text-orange">full-stack ERP and warehouse management system</span>{" "}
            built from scratch for the maritime supply industry — architected, engineered,
            and shipped as sole developer.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "Angular 17+ • Signals • NgRx • ASP.NET Core • C# • SocketIO • IndexedDB • Flutter • PostgreSQL • ",
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
