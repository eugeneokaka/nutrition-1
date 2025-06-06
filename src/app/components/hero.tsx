"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-white to-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            Nourish Your Body, <br />
            Fuel Your Life.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Discover personalized nutrition plans, healthy recipes, and expert
            tips to live a vibrant, energized life.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button
              asChild
              className="text-white bg-green-600 hover:bg-green-700"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* External Image */}
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1682968086191-cc9413553586?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthy food and lifestyle"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
