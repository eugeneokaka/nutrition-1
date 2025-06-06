import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
          About Us
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          We're on a mission to improve lives through nutrition
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
          Founded in 2015, NutriWell has been helping thousands of people
          achieve their health goals through personalized nutrition plans and
          expert guidance.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/consultation">
            <Button className="bg-green-600 hover:bg-green-700">
              Book a Consultation
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">Explore Our Services</Button>
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            NutriWell began with a simple idea: nutrition advice should be
            personalized, science-based, and accessible to everyone. Our
            founder, Dr. Sarah Chen, experienced firsthand how proper nutrition
            transformed her health after years of struggling with chronic
            conditions.
          </p>
          <p className="mb-6 text-lg text-muted-foreground">
            What started as a small practice has grown into a team of dedicated
            nutritionists, dietitians, and health coaches committed to helping
            our clients achieve optimal health through proper nutrition and
            lifestyle changes.
          </p>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Evidence-based approach</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Personalized nutrition plans</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Ongoing support and guidance</span>
          </div>
        </div>
        <div className="rounded-xl bg-green-50 p-8">
          <blockquote className="italic text-muted-foreground">
            "Our mission is to empower people through nutrition education and
            personalized guidance, helping them make informed choices that lead
            to lasting health improvements and a better quality of life."
          </blockquote>
          <p className="mt-4 font-medium">— Dr. Sarah Chen, Founder</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Our Core Values
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Holistic Approach</h3>
              <p className="text-muted-foreground">
                We consider all aspects of health, not just diet, to create
                truly personalized plans.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Scientific Excellence</h3>
              <p className="text-muted-foreground">
                Our recommendations are always based on the latest nutritional
                research.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Client Partnership</h3>
              <p className="text-muted-foreground">
                We work with you as partners in your health journey, providing
                support every step of the way.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Continuous Education</h3>
              <p className="text-muted-foreground">
                We believe in empowering clients with knowledge to make informed
                choices about their nutrition.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Meet Our Expert Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span className="text-xl font-bold">SC</span>
              </div>
              <h3 className="mb-1 text-xl font-bold">Dr. Sarah Chen</h3>
              <p className="mb-3 text-sm text-green-600">
                Founder & Clinical Nutritionist
              </p>
              <p className="text-muted-foreground">
                Ph.D. in Nutritional Sciences with over 15 years of experience
                in clinical nutrition and research.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span className="text-xl font-bold">MR</span>
              </div>
              <h3 className="mb-1 text-xl font-bold">Michael Rodriguez</h3>
              <p className="mb-3 text-sm text-green-600">
                Registered Dietitian
              </p>
              <p className="text-muted-foreground">
                Specializes in sports nutrition and metabolic health with a
                focus on performance optimization.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span className="text-xl font-bold">AJ</span>
              </div>
              <h3 className="mb-1 text-xl font-bold">Aisha Johnson</h3>
              <p className="mb-3 text-sm text-green-600">
                Health Coach & Nutritionist
              </p>
              <p className="text-muted-foreground">
                Expert in behavioral change and habit formation to help clients
                maintain healthy eating patterns.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Link href="/team">
            <Button variant="outline" className="gap-2">
              Meet the Full Team
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="mb-16 rounded-xl bg-green-50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Credentials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-4xl font-bold text-green-600">15+</div>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-4xl font-bold text-green-600">5,000+</div>
            <p className="text-lg">Clients Served</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-4xl font-bold text-green-600">12</div>
            <p className="text-lg">Certified Specialists</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-4xl font-bold text-green-600">98%</div>
            <p className="text-lg">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-xl bg-green-600 p-12 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Transform Your Health?
          </h2>
          <p className="mb-8 text-xl">
            Schedule a consultation with one of our nutrition experts and start
            your journey to better health today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/consultation">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-green-700"
              >
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
