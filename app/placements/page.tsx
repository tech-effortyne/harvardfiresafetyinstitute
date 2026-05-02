import type { Metadata } from "next";
import Image from "next/image";
import { PLACEMENTS } from "@/lib/data";
import { INSTITUTE_NAME } from "@/lib/config";
import { Users, Building2, MapPin, Award } from "lucide-react";

export const metadata: Metadata = {
	title: `Our Placed Students | ${INSTITUTE_NAME}`,
	description: `Meet our successfully placed students from Harvard Institute of Fire and Safety Engineering. Our graduates are working at top companies across India with competitive packages.`,
};

export default function PlacementsPage() {
	return (
		<main className="min-h-screen bg-gray-50 pt-20 pb-20">
			<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-16">
					<span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
						OUR PRIDE
					</span>
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7A1E2B] mb-4">
						Successfully Placed Students
					</h1>
					<p className="text-base md:text-lg text-[#2B2B2B]/70 max-w-2xl mx-auto">
						We take immense pride in our students who have secured positions in leading 
						companies across the fire and safety industry.
					</p>
				</div>

				{/* All Students Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
					{PLACEMENTS.map((student) => (
						<div
							key={student.name}
							className="bg-white rounded-2xl border border-gray-100 p-3 text-center shadow-sm"
						>
							{/* Photo Section */}
							<div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-gray-50">
								{student.image ? (
									<Image
										src={student.image}
										alt={student.name}
										fill
										className="object-cover"
									/>
								) : (
									<div className="absolute inset-0 flex items-center justify-center text-gray-200">
										<Users className="w-8 h-8" />
									</div>
								)}
							</div>

							{/* Info Section */}
							<div className="space-y-1 px-0.5">
								<h3 className="font-bold text-[#2B2B2B] text-xs truncate">
									{student.name}
								</h3>
								
								<p className="text-[10px] font-medium text-[#7A1E2B] truncate uppercase tracking-tight">
									{student.role || "Graduate"}
								</p>

								<div className="pt-1 flex flex-col gap-0.5">
									{student.company && (
										<p className="text-[10px] text-gray-600 truncate">{student.company}</p>
									)}
									{student.location && (
										<p className="text-[10px] text-gray-500 truncate italic">{student.location}</p>
									)}
									{student.salary && (
										<p className="text-[10px] font-bold text-emerald-600">{student.salary}</p>
									)}
									{student.rank && (
										<p className="text-[10px] font-bold text-[#7A1E2B]">{student.rank}</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Summary Section */}
				<div className="mt-20 p-8 md:p-12 bg-[#7A1E2B] rounded-[32px] text-white text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
					<p className="text-white/80 max-w-2xl mx-auto mb-8">
						Join Harvard Institute and become part of our legacy of success. 
						Our comprehensive training and dedicated placement cell will help you achieve your professional goals.
					</p>
					<a 
						href="/contact" 
						className="inline-block bg-white text-[#7A1E2B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
					>
						Apply for Admission
					</a>
				</div>
			</div>
		</main>
	);
}
