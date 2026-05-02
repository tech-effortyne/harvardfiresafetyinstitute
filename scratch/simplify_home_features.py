
import sys

with open('app/page.tsx', 'r') as f:
    content = f.read()

target = """					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="group relative bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
							>
								{/* Decorative Background Blob */}
								<div className="absolute -right-8 -top-8 w-24 h-24 bg-[#7A1E2B]/5 rounded-full blur-2xl group-hover:bg-[#7A1E2B]/10 transition-colors duration-500" />
								
								<div className="relative z-10">
									<div className="w-14 h-14 rounded-2xl bg-[#7A1E2B]/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7A1E2B] transition-all duration-500">
										<feature.icon className="w-7 h-7 text-[#7A1E2B] group-hover:text-white transition-colors duration-500" />
									</div>
									
									<h3 className="text-xl font-bold text-[#2B2B2B] mb-3 group-hover:text-[#7A1E2B] transition-colors duration-500">
										{feature.title}
									</h3>
									
									<p className="text-[#2B2B2B]/60 text-sm leading-relaxed">
										{feature.description}
									</p>
								</div>

								{/* Bottom Accent Bar */}
								<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1E2B] to-[#F57C00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
							</div>
						))}
					</div>"""

replacement = """					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

if target in content:
    new_content = content.replace(target, replacement)
    with open('app/page.tsx', 'w') as f:
        f.write(new_content)
    print("Successfully simplified app/page.tsx")
else:
    target_spaces = target.replace('\t', '    ')
    if target_spaces in content:
        new_content = content.replace(target_spaces, replacement)
        with open('app/page.tsx', 'w') as f:
            f.write(new_content)
        print("Successfully simplified app/page.tsx (space indentation)")
    else:
        print("Could not find target content")
