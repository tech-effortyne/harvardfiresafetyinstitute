import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { EMAILS, ADDRESS, PHONE } from "@/lib/config";

const Footer = () => {
	return (
		<footer className="bg-background border-t border-border">
			<div className="container-custom py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* About */}
					<div>
						<h3 className="font-heading text-lg font-bold text-foreground mb-4">
							Harvard Institute of Fire and Safety Engineering
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Affiliated to Mangalore University, Approved by Government of
							Karnataka. 98% Students Successfully Placed.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-sm mb-4 text-foreground uppercase tracking-wide">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									title="Go to Home page"
									className="text-muted-foreground hover:text-foreground transition-colors text-sm"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									title="Go to Contact Us page"
									className="text-muted-foreground hover:text-foreground transition-colors text-sm"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/certificate"
									title="Go to Certificate Verification page"
									className="text-muted-foreground hover:text-foreground transition-colors text-sm"
								>
									Certificate Verification
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="font-semibold text-sm mb-4 text-foreground uppercase tracking-wide">
							Contact
						</h3>
						<ul className="space-y-3">
							<li className="flex gap-3">
								<MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
								<span className="text-muted-foreground text-sm">
									{ADDRESS.short}
								</span>
							</li>
							<li className="flex gap-3">
								<Phone className="w-4 h-4 text-muted-foreground shrink-0" />
								<div className="flex flex-col gap-1">
									<a
										href={`tel:${PHONE.primary}`}
										title={`Call us at ${PHONE.primary}`}
										className="text-muted-foreground hover:text-foreground transition-colors text-sm"
									>
										{PHONE.primary}
									</a>
									<a
										href={`tel:${PHONE.secondary}`}
										title={`Call us at ${PHONE.secondary}`}
										className="text-muted-foreground hover:text-foreground transition-colors text-sm"
									>
										{PHONE.secondary}
									</a>
								</div>
							</li>
							<li className="flex gap-3">
								<Mail className="w-4 h-4 text-muted-foreground shrink-0" />
								<a
									href={`mailto:${EMAILS.info}`}
									title={`Send email to ${EMAILS.info}`}
									className="text-muted-foreground hover:text-foreground transition-colors text-sm"
								>
									{EMAILS.info}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-border">
				<div className="container-custom py-4">
					<p className="text-muted-foreground text-sm text-center">
						© {new Date().getFullYear()} Harvard Institute of Fire and Safety
						Engineering. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
