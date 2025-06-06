"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  features?: string[];
  onLearnMore?: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features = [],
  onLearnMore,
}: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative pb-4">
        <div className="flex items-center gap-4 mb-3">
          {Icon && (
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 group-hover:from-green-200 group-hover:to-blue-200 transition-colors duration-300">
              <Icon className="w-6 h-6 text-green-600" />
            </div>
          )}
          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
            {title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {features.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
              What's Included:
            </h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={onLearnMore}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
