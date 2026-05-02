"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";

const branches = [
	{ name: "Mangalore", path: "/branches/mangalore" },
	{ name: "Tumakuru", path: "/branches/tumakuru" },
	{ name: "Raichur", path: "/branches/raichur" },
];

const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "Verify Certificate", path: "/certificate" },
	{ name: "Contact", path: "/contact" },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isBranchesOpen, setIsBranchesOpen] = useState(false);
	const [isMobileBranchesOpen, setIsMobileBranchesOpen] = useState(false);
	const pathname = usePathname();
	const dropdownRef = useRef<HTMLDivElement>(null);

	const isBranchActive = pathname.startsWith("/branches");

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsBranchesOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

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

					{/* Desktop Nav */}
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

						{/* Branches Dropdown */}
						<div className="relative" ref={dropdownRef}>
							<button
								type="button"
								onClick={() => setIsBranchesOpen(!isBranchesOpen)}
								className={`flex items-center gap-1 text-sm font-medium transition-colors ${
									isBranchActive
										? "text-[#7A1E2B] font-semibold"
										: "text-[#2B2B2B]/70 hover:text-[#7A1E2B]"
								}`}
							>
								Branches
								<ChevronDown
									className={`w-4 h-4 transition-transform duration-200 ${
										isBranchesOpen ? "rotate-180" : ""
									}`}
								/>
							</button>

							{/* Dropdown Menu */}
							{isBranchesOpen && (
								<div className="absolute top-full right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50">
									{branches.map((branch) => (
										<Link
											key={branch.path}
											href={branch.path}
											title={`Go to ${branch.name} branch page`}
											onClick={() => setIsBranchesOpen(false)}
											className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
												pathname === branch.path
													? "text-[#7A1E2B] bg-[#7A1E2B]/5 font-semibold"
													: "text-[#2B2B2B]/70 hover:text-[#7A1E2B] hover:bg-gray-50"
											}`}
										>
											<MapPin className="w-3.5 h-3.5 shrink-0" />
											{branch.name}
										</Link>
									))}
								</div>
							)}
						</div>
					</nav>

					{/* Mobile Hamburger */}
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

				{/* Mobile Menu */}
				<div
					className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
						isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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

							{/* Mobile Branches Toggle */}
							<button
								type="button"
								onClick={() => setIsMobileBranchesOpen(!isMobileBranchesOpen)}
								className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
									isBranchActive
										? "text-[#7A1E2B] bg-[#7A1E2B]/5 font-semibold"
										: "text-[#2B2B2B]/70 hover:text-[#7A1E2B] hover:bg-gray-50"
								}`}
							>
								<span>Branches</span>
								<ChevronDown
									className={`w-4 h-4 transition-transform duration-200 ${
										isMobileBranchesOpen ? "rotate-180" : ""
									}`}
								/>
							</button>

							{/* Mobile Branch Sub-links */}
							<div
								className={`overflow-hidden transition-all duration-200 ${
									isMobileBranchesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
								}`}
							>
								{branches.map((branch) => (
									<Link
										key={branch.path}
										href={branch.path}
										title={`Go to ${branch.name} branch page`}
										onClick={() => {
											setIsMenuOpen(false);
											setIsMobileBranchesOpen(false);
										}}
										className={`flex items-center gap-2 pl-8 pr-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
											pathname === branch.path
												? "text-[#7A1E2B] bg-[#7A1E2B]/5 font-semibold"
												: "text-[#2B2B2B]/70 hover:text-[#7A1E2B] hover:bg-gray-50"
										}`}
									>
										<MapPin className="w-3.5 h-3.5 shrink-0" />
										{branch.name}
									</Link>
								))}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
