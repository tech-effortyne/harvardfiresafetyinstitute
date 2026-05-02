"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EMAILS, PHONE } from "@/lib/config";

const branchContacts: Record<string, { email: string; phone: string }> = {
	"/branches/mangalore": {
		email: "hifse.mangalore@gmail.com",
		phone: "+91 9148028695",
	},
	"/branches/tumakuru": {
		email: "hifse.mangalore@gmail.com",
		phone: "+91 70191 27564",
	},
	"/branches/raichur": {
		email: "harvardraichur@gmail.com",
		phone: "+91 63619 55804",
	},
};

const TopBar = () => {
	const pathname = usePathname();

	// Find if we are on a branch page
	const currentBranchPath = Object.keys(branchContacts).find((path) =>
		pathname.startsWith(path),
	);

	const contact = currentBranchPath
		? branchContacts[currentBranchPath]
		: { email: EMAILS.info, phone: PHONE.primary };

	return (
		<div className="bg-[#7A1E2B] border-b border-[#7A1E2B]/20 py-2 sm:py-2.5">
			<div className="container-custom">
				<div className="flex flex-row flex-wrap justify-center sm:justify-between items-center gap-x-4 gap-y-2 text-sm">
					<div className="flex flex-row items-center gap-4 sm:gap-6">
						<a
							href={`mailto:${contact.email}`}
							title={`Send email to ${contact.email}`}
							className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
						>
							<Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
							<span className="text-[11px] sm:text-sm font-medium">{contact.email}</span>
						</a>
						<a
							href={`tel:${contact.phone.replace(/\s/g, "")}`}
							title={`Call us at ${contact.phone}`}
							className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
						>
							<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
							<span className="whitespace-nowrap text-[11px] sm:text-sm font-medium">
								{contact.phone}
							</span>
						</a>
					</div>
					<Link
						href="/contact"
						title="Go to Contact Us page"
						className="flex items-center gap-1.5 text-white font-semibold hover:gap-2.5 transition-all shrink-0"
					>
						<span className="text-[11px] sm:text-sm">Contact Us</span>
						<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
