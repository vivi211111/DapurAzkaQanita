import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const kueStories = [
	{
		name: "Maksubah",
		image: "/portfolio/kue-maksubah-prunes.jpg",
		story:
			"Maksubah adalah kue tradisional Palembang yang hanya dibuat pada momen istimewa seperti Lebaran dan pernikahan. Kue ini melambangkan kemakmuran dan kehangatan keluarga.",
		trivia: "Butuh hingga 30 butir telur untuk membuat satu loyang Maksubah!",
	},
	{
		name: "Lapis Legit",
		image: "/portfolio/kue-lapis-legit.jpg",
		story:
			"Lapis Legit dikenal sebagai kue seribu lapis, simbol kesabaran dan ketekunan. Biasanya disajikan saat hari besar sebagai tanda syukur dan kebersamaan.",
		trivia: "Lapis Legit bisa memiliki lebih dari 18 lapisan!",
	},
	{
		name: "Kue Delapan Jam",
		image: "/portfolio/BATIK2.jpg",
		story:
			"Kue Delapan Jam adalah kue khas Palembang yang dimasak selama 8 jam, biasanya disajikan pada acara besar dan pernikahan. Teksturnya lembut dan legit.",
		trivia: "Dinamakan Delapan Jam karena proses memasaknya yang sangat lama!",
	},
	{
		name: "Kue Srikaya",
		image: "/portfolio/BATIK3.jpg",
		story:
			"Kue Srikaya terbuat dari santan, telur, dan gula, dikukus hingga lembut. Biasanya disantap bersama ketan dan menjadi sajian favorit saat Lebaran.",
		trivia: "Kue ini punya aroma harum khas daun pandan dan tekstur creamy.",
	},
	{
		name: "Kue Kojo",
		image: "/portfolio/BATIK4.jpg",
		story:
			"Kue Kojo berwarna hijau dengan rasa manis legit, terbuat dari telur, santan, dan daun pandan. Sering dijadikan hantaran atau suguhan tamu.",
		trivia: "Nama 'Kojo' berasal dari kata 'koci' (kecil) karena bentuknya mungil.",
	},
];

const InteractiveKueStory = () => {
	const [selected, setSelected] = useState(0);
	const [showTrivia, setShowTrivia] = useState(false);

	return (
		<section className="py-20 bg-gradient-to-br from-batik-white to-batik-gold/10 dark:from-gray-900/80 dark:to-gray-800/80">
			<div className="max-w-6xl mx-auto px-2 sm:px-8 lg:px-12">
				<motion.h3
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="font-serif text-4xl font-bold text-batik-brown dark:text-batik-gold mb-12 text-center drop-shadow-lg"
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
									{showTrivia
										? "Sembunyikan Fakta Unik"
										: "Lihat Fakta Unik"}
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
		</section>
	);
};

export default InteractiveKueStory;
