import React from "react";

export default function Contact() {
	return (
		<main className="min-h-[80vh] flex items-center justify-center bg-cyan-50 py-6 sm:py-10 px-2">
			<div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col gap-4 sm:gap-6">
				<h1 className="text-3xl font-bold text-cyan-700 text-center">Contact Us</h1>
				<p className="text-gray-700 text-center">Have questions, feedback, or want to report an issue? We’d love to hear from you!</p>
				<form className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="Your Name"
						className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
						required
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
						required
					/>
					<textarea
						placeholder="Your Message"
						className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-25"
						required
					/>
					<button
						type="submit"
						className="mt-2 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition duration-200 active:scale-95"
					>
						Send Message
					</button>
				</form>
				<p className="text-center text-gray-500 text-sm mt-2">We’ll get back to you as soon as possible.</p>
			</div>
		</main>
	);
}
