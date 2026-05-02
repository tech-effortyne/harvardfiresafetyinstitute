import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { EMAILS, ADDRESS, PHONE, INSTITUTE_NAME } from "@/lib/config";

const branches = [
	{ name: "Mangalore", path: "/branches/mangalore" },
	{ name: "Tumakuru", path: "/branches/tumakuru" },
	{ name: "Raichur", path: "/branches/raichur" },
];

const quickLinks = [
	{ name: "Home", path: "/" },
	{ name: "Verify Certificate", path: "/certificate" },
	{ name: "Contact Us", path: "/contact" },
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#7A1E2B] text-white overflow-hidden relative">
			{/* Subtle background decoration */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

			<div className="container-custom relative z-10 pt-16 pb-8 text-center md:text-left">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
					{/* About Section */}
					<div className="space-y-6 flex flex-col items-center md:items-start">
						<Link href="/" className="flex items-center gap-3">
							<div className="bg-white p-1.5 rounded-xl shadow-lg">
								<Image
									src="/icon.svg"
									alt="Harvard Institute Logo"
									width={40}
									height={40}
									className="w-10 h-10"
								/>
							</div>
							<span className="font-heading text-lg font-bold leading-tight tracking-tight text-white">
								Harvard Institute <br />
								<span className="text-white/80 font-medium text-sm">of Fire and Safety Engineering</span>
							</span>
						</Link>
						<p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
							Affiliated to Mangalore University, Approved by Government of Karnataka.
							Leading the way in professional fire and safety education.
						</p>
						<div className="flex items-center gap-4 pt-2">
							<a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" title="Facebook">
								<Facebook className="w-5 h-5 text-white" />
							</a>
							<a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" title="Twitter">
								<Twitter className="w-5 h-5 text-white" />
							</a>
							<a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" title="Instagram">
								<Instagram className="w-5 h-5 text-white" />
							</a>
							<a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" title="LinkedIn">
								<Linkedin className="w-5 h-5 text-white" />
							</a>
						</div>
					</div>

					{/* Links Group (2-column on mobile) */}
					<div className="grid grid-cols-2 gap-8 md:flex md:flex-col md:gap-0 md:contents">
						{/* Quick Links */}
						<div className="space-y-6 flex flex-col items-center md:items-start">
							<h3 className="font-bold text-lg relative inline-block text-white">
								Quick Links
								<span className="absolute -bottom-1.5 left-0 right-0 md:right-auto mx-auto md:mx-0 w-8 h-0.5 bg-white/40" />
							</h3>
							<ul className="space-y-3">
								{quickLinks.map((link) => (
									<li key={link.path}>
										<Link
											href={link.path}
											className="text-white/70 hover:text-white transition-colors text-sm font-medium"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Our Branches */}
						<div className="space-y-6 flex flex-col items-center md:items-start">
							<h3 className="font-bold text-lg relative inline-block text-white">
								Our Branches
								<span className="absolute -bottom-1.5 left-0 right-0 md:right-auto mx-auto md:mx-0 w-8 h-0.5 bg-white/40" />
							</h3>
							<ul className="space-y-3">
								{branches.map((branch) => (
									<li key={branch.path}>
										<Link
											href={branch.path}
											className="text-white/70 hover:text-white transition-colors text-sm font-medium"
										>
											{branch.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Contact Info */}
					<div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
						<h3 className="font-bold text-lg relative inline-block text-white">
							Get In Touch
							<span className="absolute -bottom-1.5 left-0 right-0 md:right-auto mx-auto md:mx-0 w-8 h-0.5 bg-white/40" />
						</h3>
						<ul className="space-y-5 w-full max-w-[280px] xs:max-w-none">
							<li className="flex gap-4 items-start text-left">
								<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
									<MapPin className="w-5 h-5 text-white/90" />
								</div>
								<span className="text-white/70 text-sm leading-relaxed pt-0.5">
									{ADDRESS.short}
								</span>
							</li>
							<li className="flex gap-4 items-start text-left">
								<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
									<Phone className="w-5 h-5 text-white/90" />
								</div>
								<div className="flex flex-col gap-1 pt-0.5">
									<a
										href={`tel:${PHONE.primary}`}
										className="text-white/70 hover:text-white transition-colors text-sm font-medium"
									>
										{PHONE.primary}
									</a>
									<a
										href={`tel:${PHONE.secondary}`}
										className="text-white/70 hover:text-white transition-colors text-sm font-medium"
									>
										{PHONE.secondary}
									</a>
								</div>
							</li>
							<li className="flex gap-4 items-start text-left">
								<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
									<Mail className="w-5 h-5 text-white/90" />
								</div>
								<a
									href={`mailto:${EMAILS.info}`}
									className="text-white/70 hover:text-white transition-colors text-sm font-medium break-all xs:break-normal pt-1.5"
								>
									{EMAILS.info}
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
					<p className="text-white/50 text-xs tracking-wide">
						© {currentYear} {INSTITUTE_NAME}. All rights reserved.
					</p>
					<div className="flex items-center gap-6">
						<Link href="#" className="text-white/50 hover:text-white shadow-none transition-colors text-xs font-medium">Privacy Policy</Link>
						<Link href="#" className="text-white/50 hover:text-white shadow-none transition-colors text-xs font-medium">Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
