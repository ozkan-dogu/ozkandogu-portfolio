import { Timeline } from "../components/timeline";
import { getYearsOfExperience } from "../lib/utils";

export const About = () => {
  const data = [
    {
      title: "Oct 2024 — Present",
      content: (
        <div>
          <p className="text-sm font-bold md:text-md font-mono mb-2 text-[#FF611D]">
            Seaborn Software — Lead Frontend Engineer / Software Architect
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-6 opacity-60">
            London, UK · Remote from Izmir
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Led the end-to-end architecture and development of a greenfield ship-supply ERP and WMS platform, taking the product from zero to production and contributing to seed funding success.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Owned overall system design and technical decision-making, including frontend architecture, backend structure, and real-time data synchronization strategy.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Built and led development of complex multi-role workflow UIs using Angular 17+ (Signals, NgRx), implementing reactive forms, granular RBAC, and pixel-perfect Figma implementations.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Designed and coordinated a layered ASP.NET Core backend architecture (service/repository/data) and a Socket.IO-based real-time sync layer with IndexedDB (Dexie.js) enabling offline-first usage in low-connectivity maritime environments.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Delivered a Flutter-based cross-platform module for barcode scanning and warehouse inventory workflows used daily by logistics and warehouse teams.
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
              Built C# / ASP.NET Core services powering international parcel logistics across 15+ countries — typed API contracts, error middleware, and multi-region data sync pipelines ensuring cross-border shipment accuracy.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Optimised Entity Framework Core + PostgreSQL queries on high-volume shipping data — 25% efficiency gain on the core routing and comparison workflows.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Delivered a multi-module Angular frontend with NgRx state management, lazy-loaded feature modules, and a maintainable SASS design system aligned to product requirements.
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
              Led Angular frontend delivery for Crate &amp; Barrel and AllSaints via SAP Spartacus at EPAM — defined API contracts with backend teams, drove code reviews, and ran sprint planning across distributed US/UK Agile squads.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Delivered headless commerce storefronts for LEGO and CB2 using SAP Spartacus (Angular); built Rivoli Shop on Vue Storefront (VueJS) with ContentStack CMS — all with brand-aligned Storybook component libraries.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Automated Jenkins CI/CD pipelines — cut production release cycles by 40% and enabled 30% faster cross-market delivery through reusable, Figma-accurate component libraries.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Improved Core Web Vitals (LCP, CLS, FID) on high-traffic international storefronts via lazy loading, HTTP caching, and data prefetching strategies.
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
            Izmir, Türkiye
          </p>
          <div className="mb-8 font-medium space-y-2">
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Built a live B2B security monitoring dashboard from scratch — SocketIO event streams, Google Maps device tracking, real-time alert routing, and fleet status panels for embedded hardware clients.
            </div>
            <div className="flex items-start text-sm md:text-md font-mono">
              <span className="text-[#FF611D] mr-2 mt-0.5">▸</span>
              Owned end-to-end delivery of a B2B Ionic mobile app from design through App Store and Play Store deployment — barcode scanning and IoT device integrations for automotive and logistics clients.
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
          {getYearsOfExperience(2019, 6)} YEARS · REMOTE · UK & US TEAMS
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
};
