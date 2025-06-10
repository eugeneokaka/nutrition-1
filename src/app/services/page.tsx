"use client";
import { ServiceCard } from "../components/ServiceCard";
import { User, UtensilsCrossed, Target, Trophy } from "lucide-react";

const services = [
  {
    title: "1-on-1 Nutrition Coaching",
    description:
      "Personalized coaching sessions to help you reach your health and fitness goals with expert guidance.",
    icon: User,
    features: [
      "Personal assessment",
      "Custom nutrition plan",
      "Weekly check-ins",
    ],
  },
  {
    title: "Meal Planning Guidance",
    description:
      "Custom meal plans tailored to your lifestyle, preferences, and dietary requirements.",
    icon: UtensilsCrossed,
    features: ["Weekly meal plans", "Shopping lists", "Recipe suggestions"],
  },
  {
    title: "Weight Management Program",
    description:
      "Structured program for healthy and sustainable weight management with ongoing support.",
    icon: Target,
    features: ["Goal setting", "Progress tracking", "Lifestyle coaching"],
  },
  {
    title: "Sports Nutrition",
    description:
      "Specialized nutrition support for athletes to enhance performance and optimize recovery.",
    icon: Trophy,
    features: [
      "Performance optimization",
      "Recovery protocols",
      "Competition prep",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your health journey with our comprehensive nutrition
            services. From personalized coaching to specialized programs, we're
            here to support your goals.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a consultation today and take the first step towards your
            health goals.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Schedule Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
