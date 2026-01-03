"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, Search, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { PAGE_METADATA, URLS } from "@/lib/config";

type VerificationStatus = "idle" | "loading" | "verified" | "not_found";

export default function CertificatePage() {
  const [serialNumber, setSerialNumber] = useState("");
  const [fsNumber, setFsNumber] = useState("");
  const [status, setStatus] = useState<VerificationStatus>("idle");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": PAGE_METADATA.certificate.title,
    "description": PAGE_METADATA.certificate.description,
    "url": URLS.certificate
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!serialNumber.trim() || !fsNumber.trim()) {
      return;
    }

    setStatus("loading");

    // Simulate verification API call
    setTimeout(() => {
      // Demo: If FS number starts with "FS", mark as verified
      if (fsNumber.toUpperCase().startsWith("FS")) {
        setStatus("verified");
      } else {
        setStatus("not_found");
      }
    }, 1500);
  };

  const handleReset = () => {
    setSerialNumber("");
    setFsNumber("");
    setStatus("idle");
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
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Verification Portal</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Certificate Verification
            </h1>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Verify the authenticity of certificates issued by our institution. Employers and institutions can confirm the validity of our graduates' credentials.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <Card className="border-border">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <CardTitle className="font-heading text-2xl text-foreground">
                Verify Certificate
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Enter the certificate details to verify its authenticity
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleVerify} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="serialNumber">Serial Number (Sl. No)</Label>
                  <Input
                    id="serialNumber"
                    placeholder="e.g., 2024001234"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fsNumber">FS Number</Label>
                  <Input
                    id="fsNumber"
                    placeholder="e.g., FS2024-DFS-0001"
                    value={fsNumber}
                    onChange={(e) => setFsNumber(e.target.value)}
                    disabled={status === "loading"}
                  />
                </div>
                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-navy-light"
                    disabled={status === "loading" || !serialNumber.trim() || !fsNumber.trim()}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </>
                    )}
                  </Button>
                  {status !== "idle" && status !== "loading" && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  )}
                </div>
              </form>

              {/* Result Display */}
              {status === "verified" && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 text-lg">Certificate Verified</h3>
                      <p className="text-green-700 mt-1">
                        This certificate is authentic and was issued by the Fire & Safety Institute.
                      </p>
                      <div className="mt-4 space-y-2 text-sm">
                        <p><span className="font-medium text-green-800">Serial No:</span> <span className="text-green-700">{serialNumber}</span></p>
                        <p><span className="font-medium text-green-800">FS Number:</span> <span className="text-green-700">{fsNumber}</span></p>
                        <p><span className="font-medium text-green-800">Status:</span> <span className="text-green-700">Valid</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status === "not_found" && (
                <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-800 text-lg">Certificate Not Found</h3>
                      <p className="text-red-700 mt-1">
                        We could not find a certificate matching the provided details. Please check the information and try again.
                      </p>
                      <p className="text-red-600 text-sm mt-3">
                        If you believe this is an error, please contact our office for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="mt-8 p-6 bg-secondary rounded-lg">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-gold shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">How to Find Certificate Details</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• The <strong>Serial Number</strong> is located at the top-right corner of your certificate</li>
                  <li>• The <strong>FS Number</strong> is found below the certificate holder's name</li>
                  <li>• For demo purposes, use any FS Number starting with "FS" to see a verified result</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
