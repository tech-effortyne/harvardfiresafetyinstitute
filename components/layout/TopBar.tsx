"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { EMAILS, PHONE } from "@/lib/config";

const TopBar = () => {
	return (
		<div className="bg-muted border-b border-border py-2.5">
			<div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
				<div className="flex items-center gap-6">
					<a
						href={`mailto:${EMAILS.info}`}
						className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
					>
						<Mail className="w-4 h-4" />
						<span>{EMAILS.info}</span>
					</a>
					<a
						href={`tel:${PHONE.primary}`}
						className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
					>
						<Phone className="w-4 h-4" />
						<span>{PHONE.formatted.primary}</span>
					</a>
				</div>
				<Link
					href="/contact"
					className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
				>
					<span>Contact Us</span>
					<ArrowRight className="w-4 h-4" />
				</Link>
			</div>
		</div>
	);
};

export default TopBar;
