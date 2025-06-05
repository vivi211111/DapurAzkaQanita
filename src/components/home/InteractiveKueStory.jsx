import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const kueStories = [
	{
		name: "Maksubah",
		image: "placeholder.jpg",
		story:
			"Maksubah adalah kue tradisional Palembang yang hanya dibuat pada momen istimewa seperti Lebaran dan pernikahan. Kue ini melambangkan kemakmuran dan kehangatan keluarga.",
		trivia: "Butuh hingga 30 butir telur untuk membuat satu loyang Maksubah!",
	},
	{
		name: "Lapis Legit",
		image: "placeholder.jpg",
		story:
			"Lapis Legit dikenal sebagai kue seribu lapis, simbol kesabaran dan ketekunan. Biasanya disajikan saat hari besar sebagai tanda syukur dan kebersamaan.",
		trivia: "Lapis Legit bisa memiliki lebih dari 18 lapisan!",
	},
	{
		name: "Kue Delapan Jam",
		image: "placeholder.jpg",
		story:
			"Kue Delapan Jam adalah kue khas Palembang yang dimasak selama 8 jam, biasanya disajikan pada acara besar dan pernikahan. Teksturnya lembut dan legit.",
		trivia: "Dinamakan Delapan Jam karena proses memasaknya yang sangat lama!",
	},
	{
		name: "Kue Srikaya",
		image: "placeholder.jpg",
		story:
			"Kue Srikaya terbuat dari santan, telur, dan gula, dikukus hingga lembut. Biasanya disantap bersama ketan dan menjadi sajian favorit saat Lebaran.",
		trivia: "Kue ini punya aroma harum khas daun pandan dan tekstur creamy.",
	},
	{
		name: "Kue Kojo",
		image: "placeholder.jpg",
		story:
			"Kue Kojo berwarna hijau dengan rasa manis legit, terbuat dari telur, santan, dan daun pandan. Sering dijadikan hantaran atau suguhan tamu.",
		trivia:
			"Nama 'Kojo' berasal dari kata 'koci' (kecil) karena bentuknya mungil.",
	},
];

const InteractiveKueStory = () => {
	const [selected, setSelected] = useState(0);
	const [showTrivia, setShowTrivia] = useState(false);

	return (
		<section className="py-20 bg-gradient-to-br from-batik-white to-batik-gold/10 dark:from-gray-900/80 dark:to-gray-800/80">
			<div className="max-w-6xl mx-auto px-2 sm:px-8 lg:px-12">
				{/* MOBILE VERSION */}
				<div className="block md:hidden">
					<motion.h3
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="font-serif text-lg font-bold text-batik-brown dark:text-batik-gold mb-6 text-center drop-shadow-lg"
					>
						Cerita & Fakta Unik Kue Tradisional Palembang
					</motion.h3>
					<div className="flex flex-col gap-4 items-stretch justify-center">
						<div className="flex flex-row gap-2 overflow-x-auto pb-2 mb-4">
							{kueStories.map((kue, idx) => (
								<motion.button
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.97 }}
									key={kue.name}
									onClick={() => {
										setSelected(idx);
										setShowTrivia(false);
									}}
									className={`px-3 py-2 rounded-lg border font-bold shadow text-xs whitespace-nowrap transition-all duration-300 ${
										selected === idx
											? "bg-batik-gold text-white border-batik-gold shadow"
											: "bg-white dark:bg-gray-900 border-batik-gold/30 text-batik-brown dark:text-batik-gold hover:bg-batik-gold/10"
									}`}
									aria-current={selected === idx}
								>
									{kue.name}
								</motion.button>
							))}
						</div>
						<div className="w-full flex flex-col items-center bg-white/95 dark:bg-gray-900/90 rounded-2xl shadow p-4 border border-batik-gold/20">
							<AnimatePresence mode="wait">
								<motion.div
									key={selected}
									initial={{ opacity: 0, x: 40 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -40 }}
									transition={{ duration: 0.4 }}
									className="w-full max-w-xs text-center mx-auto"
								>
									<div className="flex flex-col items-center mb-3">
										<img
											src={kueStories[selected].image}
											alt={kueStories[selected].name}
											className="w-32 h-32 object-cover rounded-xl mx-auto mb-2 shadow border border-batik-gold/20 bg-batik-cream/40"
										/>
										<h4 className="text-base font-bold text-batik-brown dark:text-batik-gold mb-1 drop-shadow">
											{kueStories[selected].name}
										</h4>
									</div>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.15 }}
										className="text-xs text-gray-700 dark:text-gray-200 mb-3 leading-snug"
									>
										{kueStories[selected].story}
									</motion.p>
									<motion.button
										whileHover={{ scale: 1.06 }}
										whileTap={{ scale: 0.96 }}
										onClick={() => setShowTrivia((v) => !v)}
										className="mt-1 px-3 py-2 rounded-lg bg-batik-gold text-white font-bold shadow hover:bg-batik-brown transition-colors text-xs"
									>
										{showTrivia ? "Sembunyikan Fakta Unik" : "Lihat Fakta Unik"}
									</motion.button>
									<AnimatePresence>
										{showTrivia && (
											<motion.div
												initial={{ opacity: 0, y: 12 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 12 }}
												transition={{ duration: 0.3 }}
												className="mt-3 p-3 rounded-lg bg-batik-gold/10 text-batik-brown dark:text-batik-gold border border-batik-gold/30 text-xs shadow"
											>
												<span className="font-bold">Fakta Unik:</span>{" "}
												{kueStories[selected].trivia}
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
				{/* DESKTOP VERSION */}
				<div className="hidden md:block">
					<motion.h3
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="hidden md:block font-serif text-4xl font-bold text-batik-brown dark:text-batik-gold mb-12 text-center drop-shadow-lg"
					>
						Cerita & Fakta Unik Kue Tradisional Palembang
					</motion.h3>

					<div className="flex flex-col md:flex-row gap-0 md:gap-0 items-stretch justify-center">
						<div className="flex flex-col gap-6 w-full md:w-1/3 bg-white/95 dark:bg-gray-900/90 rounded-l-3xl rounded-r-3xl md:rounded-r-none shadow-lg p-10 border border-batik-gold/20 border-r-0 md:border-r border-b-0 md:border-b-0 z-10">
							{kueStories.map((kue, idx) => (
								<motion.button
									whileHover={{ scale: 1.07 }}
									whileTap={{ scale: 0.97 }}
									key={kue.name}
									onClick={() => {
										setSelected(idx);
										setShowTrivia(false);
									}}
									className={`px-6 py-4 rounded-2xl border-2 font-bold shadow transition-all duration-300 text-lg text-left tracking-wide ${
										selected === idx
											? "bg-batik-gold text-white border-batik-gold shadow-lg"
											: "bg-white dark:bg-gray-900 border-batik-gold/30 text-batik-brown dark:text-batik-gold hover:bg-batik-gold/10"
									}`}
									aria-current={selected === idx}
								>
									{kue.name}
								</motion.button>
							))}
						</div>
						<div className="w-full md:w-2/3 flex flex-col items-center bg-white/95 dark:bg-gray-900/90 rounded-r-3xl rounded-l-3xl md:rounded-l-none shadow-lg p-10 border border-batik-gold/20 border-l-0 md:border-l border-t-0 md:border-t-0 -mt-4 md:mt-0 z-10">
							<AnimatePresence mode="wait">
								<motion.div
									key={selected}
									initial={{ opacity: 0, x: 60 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -60 }}
									transition={{ duration: 0.5 }}
									className="w-full max-w-xl text-center mx-auto"
								>
									<div className="flex flex-col items-center mb-6">
										<img
											src={kueStories[selected].image}
											alt={kueStories[selected].name}
											className="w-56 h-56 object-cover rounded-2xl mx-auto mb-4 shadow-lg border border-batik-gold/20 bg-batik-cream/40"
										/>
										<h4 className="text-2xl font-bold text-batik-brown dark:text-batik-gold mb-2 drop-shadow">
											{kueStories[selected].name}
										</h4>
									</div>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.2 }}
										className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed"
									>
										{kueStories[selected].story}
									</motion.p>
									<motion.button
										whileHover={{ scale: 1.08 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => setShowTrivia((v) => !v)}
										className="mt-2 px-6 py-3 rounded-xl bg-batik-gold text-white font-bold shadow hover:bg-batik-brown transition-colors text-lg"
									>
										{showTrivia ? "Sembunyikan Fakta Unik" : "Lihat Fakta Unik"}
									</motion.button>
									<AnimatePresence>
										{showTrivia && (
											<motion.div
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 20 }}
												transition={{ duration: 0.4 }}
												className="mt-6 p-5 rounded-xl bg-batik-gold/10 text-batik-brown dark:text-batik-gold border border-batik-gold/30 text-lg shadow"
											>
												<span className="font-bold">Fakta Unik:</span>{" "}
												{kueStories[selected].trivia}
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InteractiveKueStory;
