import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroOne() {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-2/3 m-auto max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image on the left */}
        <div className="flex-1 w-48 md:w-64 lg:w-72">
          <Image
            src="https://images.unsplash.com/photo-1605655293594-92e21b3409bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthy Lifestyle"
            width={288} // 72 * 4 (tailwind spacing to px)
            height={288}
            className="rounded-xl object-cover"
            priority
          />
        </div>

        {/* Text Content on the right */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fuel Your Body, Nourish Your Life
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Personalized nutrition advice tailored to your lifestyle and goals.
            Start your journey to better health today.
          </p>
          <div className="flex-1 space-x-4">
            <Button className="rounded-full px-6">Get Started</Button>
            <Button variant="outline" className="rounded-full px-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
