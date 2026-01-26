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
		<header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
			<div className="container-custom">
				<div className="flex items-center justify-between py-4">
					<Link
						href="/"
						title="Harvard Institute of Fire and Safety Engineering - Home"
						className="flex items-center gap-3 font-heading text-xl font-bold text-[#7A1E2B]"
					>
						<Image
							src="/icon.svg"
							alt="Harvard Institute Logo"
							width={40}
							height={40}
							className="w-10 h-10"
						/>
						<span className="hidden md:inline">
							Harvard Institute of Fire and Safety Engineering
						</span>
						<span className="md:hidden">HIFS</span>
					</Link>

					<nav className="hidden lg:flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								href={link.path}
								title={`Go to ${link.name} page`}
								className={`text-sm font-medium transition-colors ${
									pathname === link.path
										? "text-[#7A1E2B] font-semibold"
										: "text-[#2B2B2B]/70 hover:text-[#7A1E2B]"
								}`}
							>
								{link.name}
							</Link>
						))}
					</nav>

					<button
						type="button"
						className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#7A1E2B]/5 hover:bg-[#7A1E2B]/10 active:bg-[#7A1E2B]/15 transition-all duration-200 group"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						<div className="relative w-5 h-5">
							<Menu
								className={`absolute inset-0 w-5 h-5 text-[#7A1E2B] transition-all duration-300 ${
									isMenuOpen
										? "opacity-0 rotate-90 scale-0"
										: "opacity-100 rotate-0 scale-100"
								}`}
							/>
							<X
								className={`absolute inset-0 w-5 h-5 text-[#7A1E2B] transition-all duration-300 ${
									isMenuOpen
										? "opacity-100 rotate-0 scale-100"
										: "opacity-0 -rotate-90 scale-0"
								}`}
							/>
						</div>
					</button>
				</div>

				<div
					className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
						isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<nav className="py-4 border-t border-gray-200">
						<div className="flex flex-col gap-1">
							{navLinks.map((link, index) => (
								<Link
									key={link.path}
									href={link.path}
									title={`Go to ${link.name} page`}
									onClick={() => setIsMenuOpen(false)}
									className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
										pathname === link.path
											? "text-[#7A1E2B] bg-[#7A1E2B]/5 font-semibold"
											: "text-[#2B2B2B]/70 hover:text-[#7A1E2B] hover:bg-gray-50"
									}`}
									style={{
										animationDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
									}}
								>
									{link.name}
								</Link>
							))}
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
