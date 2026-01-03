"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { EMAILS, ADDRESS, PHONE } from "@/lib/config";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 2C8 6 6 10 6 13a6 6 0 0012 0c0-3-2-7-6-11z" />
                </svg>
              </div>
              <span className="font-heading text-lg font-bold text-foreground">Harvard Fire Safety Institute</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A Unit of Pushpadeep Education Trust. Affiliated to Mangalore University, Approved by Government of Karnataka. 98% Students Successfully Placed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Placements", path: "/placements" },
                { name: "Our Branches", path: "/branches" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm mb-6 text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  {ADDRESS.short}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                <a href={`tel:${PHONE.primary}`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {PHONE.formatted.primary}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <a href={`mailto:${EMAILS.info}`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {EMAILS.info}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Harvard Fire Safety Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/certificate" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Verify Certificate
            </Link>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
