import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { EMAILS, PHONE } from "@/lib/config";

const TopBar = () => {
	return (
		<div className="bg-muted border-b border-border py-2.5">
			<div className="container-custom">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
					<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
						<a
							href={`mailto:${EMAILS.info}`}
							title={`Send email to ${EMAILS.info}`}
							className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
						>
							<Mail className="w-4 h-4 shrink-0" />
							<span className="truncate text-xs sm:text-sm">{EMAILS.info}</span>
						</a>
						<a
							href={`tel:${PHONE.primary}`}
							title={`Call us at ${PHONE.primary}`}
							className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
						>
							<Phone className="w-4 h-4 shrink-0" />
							<span className="whitespace-nowrap text-xs sm:text-sm">
								{PHONE.primary}
							</span>
						</a>
					</div>
					<Link
						href="/contact"
						title="Go to Contact Us page"
						className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all shrink-0"
					>
						<span className="text-xs sm:text-sm">Contact Us</span>
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
