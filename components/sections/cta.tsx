import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <Section id="cta">
      <div className="border overflow-hidden relative text-center py-16 mx-auto">
        <p className="max-w-3xl text-foreground mb-6 text-balance mx-auto font-medium text-3xl">
          Ready to Revolutionize AI Evaluation?
        </p>

        <div className="flex justify-center">
          <Link href="/playground/tweets">
            <Button className="flex items-center gap-2">Playground</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
