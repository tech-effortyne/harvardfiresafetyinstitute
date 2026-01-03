"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "Verify Certificate", path: "/certificate" },
	{ name: "Contact", path: "/contact" },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="bg-background border-b border-border sticky top-0 z-50">
			<div className="container-custom">
				<div className="flex items-center justify-between py-4">
					<Link
						href="/"
						className="flex items-center gap-3 font-heading text-xl font-bold text-foreground"
					>
						<Image
							src="/icon.svg"
							alt="Harvard Institute Logo"
							width={40}
							height={40}
							className="w-10 h-10"
						/>
						<span>Harvard Institute of Fire and Safety Engineering</span>
					</Link>

					<nav className="hidden lg:flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								href={link.path}
								className={`text-sm font-medium transition-colors ${
									pathname === link.path
										? "text-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								{link.name}
							</Link>
						))}
					</nav>

					<button
						type="button"
						className="lg:hidden p-2 text-foreground"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{isMenuOpen && (
					<nav className="lg:hidden py-4 border-t border-border">
						<div className="flex flex-col gap-1">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									href={link.path}
									onClick={() => setIsMenuOpen(false)}
									className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
										pathname === link.path
											? "text-primary bg-primary/5"
											: "text-muted-foreground hover:text-foreground hover:bg-muted"
									}`}
								>
									{link.name}
								</Link>
							))}
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
