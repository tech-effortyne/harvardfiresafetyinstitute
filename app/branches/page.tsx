import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PAGE_METADATA, URLS, EMAILS, INSTITUTE_NAME } from "@/lib/config";

const branches = [
  {
    id: "mangalore",
    name: "Main Campus - Mangalore",
    isHeadquarter: true,
    address: "123 Safety Avenue, Industrial District, Adyar, Mangalore - 575001, Karnataka",
    phone: ["+91 98765 43210", "+91 98765 43211"],
    email: EMAILS.mangalore,
    timing: "Monday - Saturday: 9:00 AM - 6:00 PM",
    locations: [
      { id: "main-academic", name: "Main Academic Building", address: "Block A, Safety Avenue, Adyar" },
      { id: "training-center", name: "Training Center", address: "Block B, Safety Avenue, Adyar" },
      { id: "fire-lab", name: "Fire Simulation Lab", address: "Block C, Industrial Zone, Adyar" },
    ],
  },
  {
    id: "bangalore",
    name: "Bangalore Campus",
    isHeadquarter: false,
    address: "456 HSR Layout, Sector 2, Bangalore - 560102, Karnataka",
    phone: ["+91 98765 43212"],
    email: EMAILS.bangalore,
    timing: "Monday - Saturday: 9:00 AM - 6:00 PM",
    locations: [
      { id: "academic-block", name: "Academic Block", address: "HSR Layout, Sector 2" },
      { id: "training-wing", name: "Practical Training Wing", address: "Electronic City Phase 1" },
    ],
  },
  {
    id: "mysore",
    name: "Mysore Campus",
    isHeadquarter: false,
    address: "789 Industrial Area, Hebbal, Mysore - 570016, Karnataka",
    phone: ["+91 98765 43213"],
    email: EMAILS.mysore,
    timing: "Monday - Saturday: 9:00 AM - 6:00 PM",
    locations: [
      { id: "main-building", name: "Main Building", address: "Industrial Area, Hebbal" },
      { id: "safety-lab", name: "Fire Safety Lab", address: "KIADB Industrial Area" },
    ],
  },
];

export const metadata: Metadata = {
  title: PAGE_METADATA.branches.title,
  description: PAGE_METADATA.branches.description,
  keywords: PAGE_METADATA.branches.keywords,
  openGraph: {
    title: PAGE_METADATA.branches.title,
    description: PAGE_METADATA.branches.description,
    url: URLS.branches,
  },
  alternates: {
    canonical: "/branches",
  },
};

export default function BranchesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": PAGE_METADATA.branches.title,
    "description": PAGE_METADATA.branches.description,
    "url": URLS.branches
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Locations</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Our Branches
            </h1>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              With three strategically located campuses across Karnataka, we bring quality fire and safety education closer to you.
            </p>
          </div>
        </div>
      </section>

      {/* Branches List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {branches.map((branch) => (
              <Card key={branch.id} className={`overflow-hidden ${branch.isHeadquarter ? 'border-gold border-2' : 'border-border'}`}>
                <CardHeader className="bg-secondary">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl text-foreground">
                        {branch.name}
                      </CardTitle>
                      {branch.isHeadquarter && (
                        <span className="inline-block px-2 py-1 bg-gold text-accent-foreground text-xs font-medium rounded mt-1">
                          Headquarters
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Contact Information</h4>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{branch.address}</span>
                        </div>
                        <div className="flex gap-3">
                          <Phone className="w-5 h-5 text-gold shrink-0" />
                          <div className="text-muted-foreground">
                            {branch.phone.map((p) => (
                              <a key={p} href={`tel:${p}`} className="block hover:text-gold transition-colors">
                                {p}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Mail className="w-5 h-5 text-gold shrink-0" />
                          <a href={`mailto:${branch.email}`} className="text-muted-foreground hover:text-gold transition-colors">
                            {branch.email}
                          </a>
                        </div>
                        <div className="flex gap-3">
                          <Clock className="w-5 h-5 text-gold shrink-0" />
                          <span className="text-muted-foreground">{branch.timing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Sub-locations */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Facilities at this Branch</h4>
                      <div className="space-y-3">
                        {branch.locations.map((loc) => (
                          <div key={loc.id} className="bg-secondary rounded-lg p-4">
                            <h5 className="font-medium text-foreground">{loc.name}</h5>
                            <p className="text-muted-foreground text-sm">{loc.address}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Visit Our Campuses
            </h2>
            <p className="text-muted-foreground mt-4">
              Contact any of our branches to schedule a campus visit and learn more about our programs.
            </p>
          </div>
          <div className="bg-card rounded-lg overflow-hidden border border-border">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground">
                  Our campuses are located across Karnataka for easy accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
