import ScrollVelocity from "../components/scrollvelocity";

export default function TechStack() {
  return (
    <div className="pt-10 md:pt-15">
      <ScrollVelocity
        texts={[
          "<Angular> <React> <Next.js> <TypeScript> <C#> <ASP.NET Core> <Node.js> <PostgreSQL>",
          "[Full Stack] [ERP Systems] [Headless Commerce] [Real-Time Systems] [CI/CD] [NgRx] [GraphQL]",
        ]}
        velocity={80}
        parallaxClassName="parallax"
        scrollerClassName="scroller"
      />
    </div>
  );
}
