import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-200 mt-16 py-10 text-sm text-gray-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-700">NutriWell</h2>
          <p className="mt-2 text-sm">
            Eat smart. Live strong. Your guide to better nutrition and lasting
            health.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">Explore</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/plans">Nutrition Plans</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">Contact</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@nutriwell.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +123 456 7890
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#">
              <Facebook className="w-5 h-5 hover:text-green-600" />
            </Link>
            <Link href="#">
              <Instagram className="w-5 h-5 hover:text-green-600" />
            </Link>
            <Link href="#">
              <Twitter className="w-5 h-5 hover:text-green-600" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} NutriWell. All rights reserved.
      </div>
    </footer>
  );
}
