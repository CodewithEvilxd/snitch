import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "$150M",
    label: "Raised",
  },
  {
    value: "20K",
    label: "Companies",
  },
  {
    value: "1.3B",
    label: "Monthly transactions",
  },
  {
    value: "1.5K",
    label: "Connections per minute",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Democratising quality software
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Snitch is bringing effortless screen capture & annotation to life.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            At Snitch, we are dedicated to transforming the way you capture,
            annotate, and share visual ideas. Our mission is to provide you
            with an unbeatable, zero-friction tool for instant captures and
            clean annotations with absolute focus.
            <br />
            <br />
            Fast captures. Clean marks. Zero friction. Built for creators,
            designers, and engineers who demand precision.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
