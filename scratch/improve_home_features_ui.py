
import sys

with open('app/page.tsx', 'r') as f:
    content = f.read()

target = """					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#7A1E2B]/20 transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-xl bg-[#7A1E2B]/5 flex items-center justify-center mb-6 group-hover:bg-[#7A1E2B]/10 transition-colors duration-300">
									<feature.icon className="w-6 h-6 text-[#7A1E2B]" />
								</div>
								
								<h3 className="text-lg font-bold text-[#2B2B2B] mb-2 group-hover:text-[#7A1E2B] transition-colors duration-300">
									{feature.title}
								</h3>
								
								<p className="text-[#2B2B2B]/60 text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>"""

replacement = """					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#7A1E2B]/10 transition-all duration-300 overflow-hidden"
							>
								{/* Premium Icon container */}
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A1E2B]/10 to-white border border-[#7A1E2B]/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
									<feature.icon className="w-8 h-8 text-[#7A1E2B]" />
								</div>
								
								{/* Content */}
								<div className="space-y-4">
									<h3 className="text-xl font-bold text-[#2B2B2B] tracking-tight group-hover:text-[#7A1E2B] transition-colors duration-300">
										{feature.title}
									</h3>
									
									<div className="w-12 h-1 bg-[#7A1E2B]/20 rounded-full group-hover:w-20 group-hover:bg-[#7A1E2B] transition-all duration-500" />
									
									<p className="text-[#2B2B2B]/70 text-sm leading-relaxed">
										{feature.description}
									</p>
								</div>

								{/* Subtle Corner Decoration */}
								<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-50 rounded-full -z-10 group-hover:bg-[#7A1E2B]/5 transition-colors duration-500" />
							</div>
						))}
					</div>"""

if target in content:
    new_content = content.replace(target, replacement)
    with open('app/page.tsx', 'w') as f:
        f.write(new_content)
    print("Successfully improved app/page.tsx UI")
else:
    target_spaces = target.replace('\t', '    ')
    if target_spaces in content:
        new_content = content.replace(target_spaces, replacement)
        with open('app/page.tsx', 'w') as f:
            f.write(new_content)
        print("Successfully improved app/page.tsx UI (space indentation)")
    else:
        print("Could not find target content")
