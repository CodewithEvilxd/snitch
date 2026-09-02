import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            100% Free & Open Source.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl font-light">
            No paywalls. No subscriptions. No Stripe checkout. Free forever.
          </p>
        </div>

        <div className="relative rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">Community Edition (Full Suite)</h3>
            <p className="mt-2 text-muted-foreground">
              Every single feature is unlocked with zero restrictions. Full screen capture, rich canvas annotation, macOS & browser frames, and instant clipboards.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "100% Free and open-source under MIT License.",
                "Unlimited high-resolution captures and annotations.",
                "No account, sign-up, or license key required.",
                "Commercial and personal use permitted for everyone.",
                "Runs 100% locally in your browser with zero tracking."
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-8 flex flex-col items-center justify-center min-w-[280px] border border-primary/10">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">$0</span>
              <span className="text-muted-foreground text-sm font-medium">/ forever</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground text-center">Full Studio · All Features</p>
            <Button size="lg" className="w-full mt-8 rounded-xl h-12 shadow-sm font-medium" asChild>
              <a href="/capture.html">
                Open Studio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
