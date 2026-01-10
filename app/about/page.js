import React from "react";

export default function About() {
	return (
		<main className="min-h-[80vh] flex items-center justify-center bg-cyan-50 py-10">
			<div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
				<h1 className="text-3xl font-bold text-cyan-700 text-center">About BlinkURL</h1>
				<p className="text-gray-700 text-lg text-center">
					<span className="font-bold text-cyan-600">BlinkURL</span> is a fast, privacy-friendly URL shortener. We help you turn long, unwieldy links into short, shareable ones in a blink—no login or signup required. Perfect for sharing on social media, messaging, or anywhere you want a clean, memorable link.
				</p>
				<ul className="list-disc list-inside text-gray-600 text-base flex flex-col gap-2">
					<li>🔒 <span className="font-semibold">No tracking, no ads</span> — your privacy matters.</li>
					<li>⚡ <span className="font-semibold">Instant short links</span> — just paste and go.</li>
					<li>🌐 <span className="font-semibold">Works everywhere</span> — share on any platform.</li>
				</ul>
				<p className="text-center text-cyan-700 font-semibold">Made with ❤️</p>
			</div>
		</main>
	);
}
