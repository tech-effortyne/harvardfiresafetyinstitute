
import sys

with open('app/page.tsx', 'r') as f:
    content = f.read()

target = """					{/* Placement Cards Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
						{placements.map((student) => (
							<div
								key={student.name}
								className="bg-white rounded-2xl border border-gray-200 p-3 text-center hover:shadow-sm transition-shadow duration-300"
							>
								{/* Passport Photo / Student Image */}
								<div className="aspect-square rounded-xl bg-gray-100 flex items-center justify-center mb-2.5 relative overflow-hidden">
									{"image" in student && student.image ? (
										<Image
											src={student.image as string}
											alt={student.name}
											fill
											className="object-cover"
										/>
									) : (
										<div className="flex flex-col items-center">
											<div className="w-12 h-12 rounded-full bg-gray-300 mb-1" />
											<div className="w-20 h-7 rounded-t-full bg-gray-300" />
										</div>
									)}
								</div>

								{/* Details */}
								<h3 className="font-semibold text-[#2B2B2B] text-xs leading-tight truncate">{student.name}</h3>
								{student.role ? (
									<p className="text-[10px] text-[#2B2B2B]/70 truncate mt-1">{student.role}</p>
								) : null}
								{student.company ? (
									<p className="text-[10px] font-medium text-[#2B2B2B]/80 truncate mt-0.5">{student.company}</p>
								) : null}
								{student.salary ? (
									<p className="text-[10px] font-bold text-emerald-600 mt-0.5">{student.salary}</p>
								) : null}
								{student.location ? (
									<p className="text-[10px] text-[#2B2B2B]/60 truncate mt-0.5">{student.location}</p>
								) : null}
								{student.rank ? (
									<p className="text-[10px] font-medium text-[#7A1E2B] truncate mt-0.5">{student.rank}</p>
								) : null}
								{student.score ? (
									<p className="text-[10px] text-[#2B2B2B]/70 truncate mt-0.5">{student.score}</p>
								) : null}
								{student.institute ? (
									<p className="text-[9px] text-[#2B2B2B]/55 truncate mt-0.5">{student.institute}</p>
								) : null}
								{student.place ? (
									<p className="text-[10px] font-medium text-[#2B2B2B]/70 truncate mt-1">{student.place}</p>
								) : null}
							</div>
						))}
					</div>"""

replacement = """					{/* Placement Cards Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 mb-12">
						{PLACEMENTS.slice(0, 6).map((student) => (
							<div
								key={student.name}
								className="bg-white rounded-2xl border border-gray-200 p-3 text-center hover:shadow-sm transition-shadow duration-300"
							>
								{/* Passport Photo / Student Image */}
								<div className="aspect-square rounded-xl bg-gray-100 flex items-center justify-center mb-2.5 relative overflow-hidden">
									{student.image ? (
										<Image
											src={student.image}
											alt={student.name}
											fill
											className="object-cover"
										/>
									) : (
										<div className="flex flex-col items-center">
											<div className="w-12 h-12 rounded-full bg-gray-300 mb-1" />
											<div className="w-20 h-7 rounded-t-full bg-gray-300" />
										</div>
									)}
								</div>

								{/* Details */}
								<h3 className="font-semibold text-[#2B2B2B] text-xs leading-tight truncate">{student.name}</h3>
								{student.role ? (
									<p className="text-[10px] text-[#2B2B2B]/70 truncate mt-1">{student.role}</p>
								) : null}
								{student.company ? (
									<p className="text-[10px] font-medium text-[#2B2B2B]/80 truncate mt-0.5">{student.company}</p>
								) : null}
								{student.salary ? (
									<p className="text-[10px] font-bold text-emerald-600 mt-0.5">{student.salary}</p>
								) : null}
								{student.location ? (
									<p className="text-[10px] text-[#2B2B2B]/60 truncate mt-0.5">{student.location}</p>
								) : null}
								{student.rank ? (
									<p className="text-[10px] font-medium text-[#7A1E2B] truncate mt-0.5">{student.rank}</p>
								) : null}
								{student.score ? (
									<p className="text-[10px] text-[#2B2B2B]/70 truncate mt-0.5">{student.score}</p>
								) : null}
								{student.institute ? (
									<p className="text-[9px] text-[#2B2B2B]/55 truncate mt-0.5">{student.institute}</p>
								) : null}
								{student.place ? (
									<p className="text-[10px] font-medium text-[#2B2B2B]/70 truncate mt-1">{student.place}</p>
								) : null}
							</div>
						))}
					</div>

					{/* View More Button */}
					<div className="text-center">
						<Button
							asChild
							variant="outline"
							className="rounded-xl border-[#7A1E2B] text-[#7A1E2B] hover:bg-[#7A1E2B] hover:text-white transition-all px-8 py-6 font-semibold"
						>
							<Link href="/placements">View All Placed Students</Link>
						</Button>
					</div>"""

if target in content:
    new_content = content.replace(target, replacement)
    with open('app/page.tsx', 'w') as f:
        f.write(new_content)
    print("Successfully updated app/page.tsx")
else:
    # Try with space indentation if tab failed
    target_spaces = target.replace('\t', '    ')
    if target_spaces in content:
        new_content = content.replace(target_spaces, replacement)
        with open('app/page.tsx', 'w') as f:
            f.write(new_content)
        print("Successfully updated app/page.tsx (space indentation)")
    else:
        print("Could not find target content")
