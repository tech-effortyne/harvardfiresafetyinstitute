import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { PAGE_METADATA } from "@/lib/config";

export const metadata: Metadata = {
    title: PAGE_METADATA.branches.mangalore.title,
    description: PAGE_METADATA.branches.mangalore.description,
    keywords: PAGE_METADATA.branches.mangalore.keywords,
    alternates: {
        canonical: "/branches/mangalore",
    },
};

const courses = [
    { title: "Diploma in Fire & Industrial Safety", category: "Core Program", image: "/Harvard_images/Training/Training_1.webp" },
    { title: "Diploma in Fire & Safety Engineering", category: "Professional", image: "/Harvard_images/Sessions/Sessions_2.webp" },
    { title: "PG Diploma in Fire & Safety Engineering", category: "Advanced", image: "/Harvard_images/Training/Training_2.webp" },
    { title: "Diploma in HSE Management", category: "Specialized", image: "/Harvard_images/Sessions/Sessions_3.webp" },
    { title: "Diploma in Construction and Industrial Safety Engineering", category: "Specialized", image: "/Harvard_images/Training/Training_3.webp" },
];

const trainingImages = [
    { src: "/Harvard_images/Training/Training_1.webp", alt: "Fire Fighting Training" },
    { src: "/Harvard_images/Training/Training_2.webp", alt: "Fire Alarm System Training" },
    { src: "/Harvard_images/Training/Training_3.webp", alt: "Safety Equipment Demonstration" },
    { src: "/Harvard_images/Sessions/Sessions_2.webp", alt: "Industrial Safety Practice" },
];

const activities = [
    "Bridge Course", "Regular Classes", "Practical Training", "Industrial Visit",
    "Spoken English Classes", "Interview Preparation Classes", "Fire Station Visit",
    "Sports Day", "Annual Day", "Mock Interview", "Campus Interview",
];

const industries = [
    "MNC Companies", "Construction Companies", "Airport", "Marine Field", "Petro Chemical Industries",
];

const designations = [
    "Safety Officer", "Safety Engineer", "Safety Supervisor", "Safety Auditor", "Safety Manager",
];

const placementImages = [
    "/Harvard_images/Students/Students_1.webp",
    "/Harvard_images/Students/Students_2.webp",
    "/Harvard_images/Students/Students_3.webp",
    "/Harvard_images/Students/Students_4.webp",
];

export default function MangaloreBranchPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-gradient-to-r from-[#7A1E2B] to-[#5a1620] py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/Harvard_images/Sessions/Sessions_2.webp"
                        alt="Harvard Institute Mangalore Branch"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-white/80 font-medium text-sm uppercase tracking-wider">
                            Our Branches
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-3 leading-tight">
                            Harvard Institute of Fire &amp; Safety Engineering
                        </h1>
                        <p className="text-xl md:text-3xl font-semibold text-white/90 mb-6">
                            Mangalore Branch
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Professional fire and safety training at Kottara Chowki, Mangalore.
                            Affiliated to Mangalore University &amp; Approved by Government of Karnataka.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. About the Branch */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-flex items-center rounded-full border border-[#7A1E2B]/20 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#7A1E2B] mb-6">
                            ABOUT THE BRANCH
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-6">
                            About Mangalore Branch
                        </h2>
                        <p className="text-base md:text-lg text-[#2B2B2B]/70 leading-relaxed mb-6">
                            Harvard Institute of Fire &amp; Safety Engineering provides professional training in fire
                            safety and industrial safety. The institute operates under Pushpadeep Education Trust.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                "Approved by Government of Karnataka",
                                "Affiliated to Mangalore University",
                                "Corporate Member of National Safety Council",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#7A1E2B] shrink-0 mt-0.5" />
                                    <p className="text-sm font-medium text-[#2B2B2B]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-base md:text-lg text-[#2B2B2B]/70 leading-relaxed mt-6">
                            The institute focuses on practical safety education and career-oriented training,
                            empowering students to take on roles as safety officers, engineers, and managers
                            across India and abroad.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Courses Offered */}
            <section className="py-12 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
                            DIPLOMA PROGRAMS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-4">
                            Courses Offered
                        </h2>
                        <p className="text-base md:text-lg text-[#2B2B2B]/70 max-w-2xl mx-auto">
                            Professional safety education programs — Course Duration: 1 Year
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {courses.map((course) => (
                            <article
                                key={course.title}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-[#2B2B2B]/60 to-transparent" />
                                </div>
                                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                    <div className="mb-2">
                                        <span className="inline-block px-2 py-1 rounded-full text-[10px] font-bold bg-[#F57C00] text-white">
                                            {course.category}
                                        </span>
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                                        {course.title}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Practical Training */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
                            HANDS-ON LEARNING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-4">
                            Practical Training
                        </h2>
                        <p className="text-base text-[#2B2B2B]/70 max-w-2xl mx-auto">
                            Real-world training with industry-grade equipment and on-site exposure
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {trainingImages.map((img) => (
                            <div
                                key={img.src}
                                className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1E2B]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white text-xs font-semibold leading-snug">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Academic Activities */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
                            CAMPUS LIFE
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-3">
                            Academic Activities
                        </h2>
                        <p className="text-sm text-[#2B2B2B]/60 max-w-xl mx-auto">
                            A comprehensive learning environment beyond the classroom
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {activities.map((activity) => (
                            <span
                                key={activity}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7A1E2B]/20 bg-[#7A1E2B]/5 text-sm font-medium text-[#7A1E2B] hover:bg-[#7A1E2B]/10 transition-colors"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1E2B] shrink-0" />
                                {activity}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Job Opportunities */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
                            CAREER SCOPE
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-3">
                            Job Opportunities
                        </h2>
                        <p className="text-sm text-[#2B2B2B]/60 max-w-xl mx-auto">
                            Diverse career paths across India&apos;s key industry sectors
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Industries */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b-2 border-[#7A1E2B] bg-[#7A1E2B]/5 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#7A1E2B]" />
                                <h3 className="font-semibold text-[#7A1E2B] text-base tracking-wide uppercase text-sm">Industries</h3>
                            </div>
                            <ul className="divide-y divide-gray-100">
                                {industries.map((item, i) => (
                                    <li key={item} className="flex items-center gap-4 px-6 py-3">
                                        <span className="w-6 h-6 rounded-full bg-[#F57C00]/10 text-[#F57C00] text-xs font-bold flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-[#2B2B2B]/80 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Designations */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b-2 border-[#F57C00] bg-[#F57C00]/5 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#F57C00]" />
                                <h3 className="font-semibold text-[#F57C00] text-base tracking-wide uppercase text-sm">Designations</h3>
                            </div>
                            <ul className="divide-y divide-gray-100">
                                {designations.map((item, i) => (
                                    <li key={item} className="flex items-center gap-4 px-6 py-3">
                                        <span className="w-6 h-6 rounded-full bg-[#7A1E2B]/10 text-[#7A1E2B] text-xs font-bold flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-[#2B2B2B]/80 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Placement Section */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
                            PLACEMENTS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-4">
                            98% Students Successfully Placed
                        </h2>
                        <p className="text-base text-[#2B2B2B]/70 max-w-2xl mx-auto">
                            Our strong industry connections ensure nearly all graduates secure rewarding positions.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
                        {placementImages.map((src, i) => (
                            <div
                                key={src}
                                className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg"
                            >
                                <Image
                                    src={src}
                                    alt={`Placed student ${i + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1E2B]/60 via-transparent to-transparent" />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 8. Branch Contact Section */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
                            CONTACT
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-3">
                            Mangalore Branch
                        </h2>
                        <p className="text-sm text-[#2B2B2B]/60">Get in touch with our Mangalore team</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden grid md:grid-cols-2">
                            {/* Details Side */}
                            <div className="divide-y divide-gray-100">
                                {/* Address Row */}
                                <div className="flex items-start gap-4 px-6 py-5 border-l-4 border-[#7A1E2B]">
                                    <div className="w-10 h-10 rounded-xl bg-[#7A1E2B]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <MapPin className="w-5 h-5 text-[#7A1E2B]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#7A1E2B] uppercase tracking-wider mb-1">Address</p>
                                        <p className="text-sm text-[#2B2B2B]/70 leading-relaxed">
                                            Laxman Building, 2nd Floor, Kottara Chowki,<br />
                                            Mangalore – 575006
                                        </p>
                                    </div>
                                </div>
                                {/* Phone Row */}
                                <div className="flex items-start gap-4 px-6 py-5 border-l-4 border-[#F57C00]">
                                    <div className="w-10 h-10 rounded-xl bg-[#F57C00]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Phone className="w-5 h-5 text-[#F57C00]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">Phone</p>
                                        <div className="flex flex-wrap gap-x-6 gap-y-1">
                                            {["9148028695", "7022943300"].map((phone) => (
                                                <a
                                                    key={phone}
                                                    href={`tel:${phone}`}
                                                    title={`Call Mangalore branch at ${phone}`}
                                                    className="text-sm text-[#2B2B2B]/70 hover:text-[#F57C00] transition-colors font-medium"
                                                >
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Email Row */}
                                <div className="flex items-start gap-4 px-6 py-5 border-l-4 border-emerald-500">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                                        <Mail className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">Email</p>
                                        <a
                                            href="mailto:hifse.mangalore@gmail.com"
                                            title="Send email to Mangalore branch"
                                            className="text-sm text-[#2B2B2B]/70 hover:text-emerald-600 transition-colors font-medium break-all"
                                        >
                                            hifse.mangalore@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Side */}
                            <div className="h-[300px] md:h-auto border-t md:border-t-0 md:border-l border-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.0336655408355!2d74.836626!3d12.9055568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bce8a95d395%3A0x7e42cbb0e017092a!2sHarvard%20Institute%20Of%20Fire%20And%20Safety!5e0!3m2!1sen!2sin!4v1772983593055!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mangalore Branch Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Admissions CTA */}
            <section className="py-16 bg-[#7A1E2B] text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Admissions Open</h2>
                            <p className="text-white/90 max-w-xl">
                                Join Harvard Institute of Fire &amp; Safety Engineering and start your career
                                in Fire and Industrial Safety.
                            </p>
                        </div>
                        <Button
                            asChild
                            size="lg"
                            className="rounded-xl bg-white text-[#7A1E2B] hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all px-8 py-6"
                        >
                            <Link href="/contact" title="Contact us to apply">Apply Now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
