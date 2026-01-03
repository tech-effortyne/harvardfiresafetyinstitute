"use client";

import { useState } from "react";
import Link from "next/link";
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
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 group">
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
						<span className="font-heading text-xl font-bold text-foreground">
							Harvard Fire Safety Institute
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-1">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								href={link.path}
								className={`px-4 py-2 text-sm font-medium transition-colors ${
									pathname === link.path
										? "text-foreground"
										: "text-[#6B7280] hover:text-foreground"
								}`}
							>
								{link.name}
							</Link>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<button
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

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<nav className="lg:hidden py-4 border-t border-border animate-fade-in">
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
