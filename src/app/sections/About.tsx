
import { Timeline } from "../components/timeline";

function getYearsOfExperience(startYear: number, startMonth: number): string {
  const now = new Date();
  const start = new Date(startYear, startMonth - 1);
  const diffYears = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  const full = Math.floor(diffYears);
  const display = diffYears - full >= 0.8 ? full + 1 : full;
  return `${display}+`;
}

export const About = () => {
  const data = [
    {
      title: "Oct 2024 — Present",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Seaborn Software — Senior Frontend Developer
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
      title: "Dec 2022 — Oct 2024",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Asendia — Full Stack Developer
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            Pennsylvania, United States · Remote from İzmir, Türkiye
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
      title: "Apr 2020 — Dec 2022",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            EPAM Systems (formerly eMakina) — Frontend Developer
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            Remote · Clients: Crate &amp; Barrel, AllSaints, LEGO, CB2, Rivoli Shop
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Led Angular frontend tracks for Crate &amp; Barrel and AllSaints using SAP Spartacus — API contracts, code reviews, sprint planning in international Agile/Scrum.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Headless commerce for LEGO and CB2 using SAP Spartacus (Angular); Rivoli Shop using Vue Storefront (VueJS) with ContentStack CMS.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Jenkins CI/CD pipelines cutting release cycles by 40%; brand-aligned Storybook component libraries enabling 30% faster cross-market delivery.
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
      title: "Jun 2019 — Apr 2020",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Miya Automation And Barcode Systems — Frontend Developer
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
          {getYearsOfExperience(2019, 6)} YEARS · REMOTE · GLOBAL
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
};
