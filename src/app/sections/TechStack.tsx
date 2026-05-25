import ScrollVelocity from "../components/scrollvelocity";

export default function TechStack() {
  return (
    <div className="pt-10 md:pt-15">
      <ScrollVelocity
        texts={[
          "<Angular> <React> <Next.js> <TypeScript> <C#> <ASP.NET Core> <PostgreSQL> <Flutter> <NgRx>",
          "[Enterprise Frontends] [Full Stack] [ERP · WMS] [Headless Commerce] [Real-Time · SocketIO] [CI/CD] [API Design]",
        ]}
        velocity={80}
        parallaxClassName="parallax"
        scrollerClassName="scroller"
      />
    </div>
  );
}
