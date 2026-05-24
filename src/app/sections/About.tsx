
import { Timeline } from "../components/timeline";

export const About = () => {
  const data = [
    {
      title: "2024 — Present",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Seaborn Software — Senior Full Stack Developer
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            London, UK (Remote from Izmir)
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Sole architect of a ship-supply ERP and WMS built from scratch — selected the full tech stack, owned end-to-end delivery, helped the product secure seed funding.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Angular 17+ with Signals &amp; NgRx — multi-role workflow UIs, reactive forms, granular access control, Figma-to-production delivery.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              RESTful ASP.NET Core API with clean layered architecture (service / repository / data layers).
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              SocketIO real-time state sync + IndexedDB (Dexie.js) offline-first layer for maritime operations.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Flutter cross-platform module for barcode scanning and warehouse inventory tracking.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 — 2024",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Asendia — Full Stack Developer
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            Izmir, Turkiye
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Designed RESTful C# / ASP.NET Core services — typed contracts, error handling middleware, and multi-region data sync pipelines for logistics across 15+ countries.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Entity Framework Core + PostgreSQL query optimisation for high-volume shipping data — 25% efficiency gain.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Multi-module Angular app with NgRx state management, lazy-loaded feature modules, and a SASS design system.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021 — 2023",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            EPAM Systems — Senior Frontend Developer
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            Pennsylvania, US (Remote) · Clients: Crate &amp; Barrel, AllSaints
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Led Angular frontend tracks for Crate &amp; Barrel and AllSaints using SAP Spartacus — API contracts, code reviews, sprint planning in international Agile/Scrum.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Jenkins CI/CD pipelines — automated build, lint, test, and deploy stages cutting release cycles by 40%.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Improved Core Web Vitals (LCP, CLS, FID) via lazy loading, caching, and data prefetching on high-traffic global commerce platforms.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019 — 2021",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Emakina — Frontend Developer
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            Izmir, Turkiye · Clients: LEGO, CB2, Rivoli Shop
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Headless commerce for LEGO and CB2 using SAP Spartacus (Angular); Rivoli Shop using Vue Storefront (VueJS) with ContentStack CMS.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Brand-aligned, Figma-accurate, Storybook-documented component libraries for three global brands — enabling 30% faster cross-market delivery.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Jasmine/Karma unit testing protocols maintaining 80%+ coverage on critical modules.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018 — 2019",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Miya Automation and Barcode Systems — Frontend Developer
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            Izmir, Turkiye
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Live B2B security monitoring platform — SocketIO event feeds, Google Maps API device tracking, alert routing, and fleet status panels.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              End-to-end Ionic B2B mobile app (App Store / Play Store) with barcode scanning and IoT device integrations.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-24 lg:pt-34">
        <h1 className="font-bold text-[30px]">EXPERIENCE</h1>
        <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
          8+ YEARS · REMOTE · GLOBAL
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
};
