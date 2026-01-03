"use client";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./globe").then((m) => m.World), {
	ssr: false,
});

type ArcData = {
	order: number;
	startLat: number;
	startLng: number;
	endLat: number;
	endLng: number;
	arcAlt: number;
	color: string;
};

export function GlobeDemo() {
	const globeConfig = {
		pointSize: 4,
		globeColor: "#062056",
		showAtmosphere: true,
		atmosphereColor: "#FFFFFF",
		atmosphereAltitude: 0.1,
		emissive: "#062056",
		emissiveIntensity: 0.1,
		shininess: 0.9,
		polygonColor: "rgba(255,255,255,0.7)",
		ambientLight: "#38bdf8",
		directionalLeftLight: "#ffffff",
		directionalTopLight: "#ffffff",
		pointLight: "#ffffff",
		arcTime: 1000,
		arcLength: 0.9,
		rings: 1,
		maxRings: 3,
		initialPosition: { lat: 12.9716, lng: 77.5946 }, // Bangalore, India
		autoRotate: true,
		autoRotateSpeed: 0.5,
	};

	const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

	// Sample arcs data - you can replace this with data from your globe.json if it contains arcs
	const sampleArcs: ArcData[] = [
		{
			order: 1,
			startLat: 12.9716, // Bangalore
			startLng: 77.5946,
			endLat: 19.076, // Mumbai
			endLng: 72.8777,
			arcAlt: 0.1,
			color: colors[0],
		},
		{
			order: 1,
			startLat: 12.9716, // Bangalore
			startLng: 77.5946,
			endLat: 28.6139, // Delhi
			endLng: 77.209,
			arcAlt: 0.2,
			color: colors[1],
		},
		{
			order: 1,
			startLat: 12.9716, // Bangalore
			startLng: 77.5946,
			endLat: 22.5726, // Kolkata
			endLng: 88.3639,
			arcAlt: 0.3,
			color: colors[2],
		},
		{
			order: 2,
			startLat: 19.076, // Mumbai
			startLng: 72.8777,
			endLat: 13.0827, // Chennai
			endLng: 80.2707,
			arcAlt: 0.2,
			color: colors[0],
		},
		{
			order: 2,
			startLat: 28.6139, // Delhi
			startLng: 77.209,
			endLat: 12.9716, // Bangalore
			endLng: 77.5946,
			arcAlt: 0.3,
			color: colors[1],
		},
		{
			order: 3,
			startLat: 12.9716, // Bangalore
			startLng: 77.5946,
			endLat: 40.7128, // New York
			endLng: -74.006,
			arcAlt: 0.5,
			color: colors[0],
		},
		{
			order: 3,
			startLat: 12.9716, // Bangalore
			startLng: 77.5946,
			endLat: 51.5072, // London
			endLng: -0.1276,
			arcAlt: 0.4,
			color: colors[1],
		},
		{
			order: 3,
			startLat: 12.9716, // Bangalore
			startLng: 77.5946,
			endLat: 35.6762, // Tokyo
			endLng: 139.6503,
			arcAlt: 0.3,
			color: colors[2],
		},
	];

	return (
		<div className="flex flex-row items-center justify-center bg-background relative w-full">
			<div
				className="w-full max-w-4xl mx-auto relative"
				style={{ aspectRatio: "1.2" }}
			>
				<div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-background z-40" />
				<div className="absolute inset-0 z-10">
					<World data={sampleArcs} globeConfig={globeConfig} />
				</div>
			</div>
		</div>
	);
}
