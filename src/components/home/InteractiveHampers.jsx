import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const kueList = [
	{
		name: "Maksubah",
		image: "/portfolio/kue-maksubah-prunes.jpg",
		desc: "Kue legit khas Palembang, cocok untuk momen spesial.",
	},
	{
		name: "Lapis Legit",
		image: "/portfolio/kue-lapis-legit.jpg",
		desc: "Kue lapis klasik, simbol kebersamaan dan ketekunan.",
	},
	{
		name: "Bolu Kukus Pelangi",
		image: "/portfolio/kue-bolu-kukus.jpg",
		desc: "Bolu kukus warna-warni, favorit anak-anak dan keluarga.",
	},
];

const maxHampers = 3;

const InteractiveHampers = () => {
	const [selected, setSelected] = useState([]);
	const [showSummary, setShowSummary] = useState(false);

	const toggleKue = (idx) => {
		if (selected.includes(idx)) {
			setSelected(selected.filter((i) => i !== idx));
		} else if (selected.length < maxHampers) {
			setSelected([...selected, idx]);
		}
	};

	return (
		<section className="py-20 bg-gradient-to-br from-batik-gold/10 to-batik-cream/40 dark:from-gray-900/80 dark:to-gray-800/80">
			<div className="max-w-6xl mx-auto px-2 sm:px-8 lg:px-12">
				<motion.h3
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="font-serif text-4xl font-bold text-batik-brown dark:text-batik-gold mb-12 text-center drop-shadow-lg"
				>
					Simulasi Pilih Hampers Lebaran
				</motion.h3>
				<div className="flex flex-col md:flex-row gap-10 items-center justify-center">
					<div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
						{kueList.map((kue, idx) => (
							<motion.div
								key={kue.name}
								whileHover={{
									scale: 1.07,
									boxShadow: "0 8px 32px #DAA52033",
								}}
								className={`rounded-3xl shadow-2xl p-6 text-center border-2 transition-all duration-300 cursor-pointer bg-white/95 dark:bg-gray-900/90 relative overflow-hidden group ${
									selected.includes(idx)
										? "border-batik-gold ring-2 ring-batik-gold/40"
										: "border-batik-gold/20"
								}`}
								onClick={() => toggleKue(idx)}
							>
								<motion.img
									src={kue.image}
									alt={kue.name}
									className="w-28 h-28 object-cover rounded-2xl mx-auto mb-4 shadow-lg border-2 border-batik-gold/30 group-hover:scale-105 transition-transform duration-300"
									whileHover={{ scale: 1.1 }}
								/>
								<div className="font-bold text-batik-brown dark:text-batik-gold mb-2 text-lg drop-shadow">
									{kue.name}
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
									{kue.desc}
								</div>
								<motion.div
									className={`mt-2 px-4 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
										selected.includes(idx)
											? "bg-batik-gold text-white shadow-lg"
											: "bg-gray-100 dark:bg-gray-800 text-batik-brown"
									}`}
									animate={
										selected.includes(idx)
											? { scale: [1, 1.1, 1] }
											: {}
									}
									transition={{ duration: 0.5 }}
								>
									{selected.includes(idx) ? "Dipilih" : "Pilih"}
								</motion.div>
								{selected.includes(idx) && (
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.8 }}
										className="absolute top-2 right-2 bg-batik-gold text-white text-xs px-3 py-1 rounded-full shadow"
									>
										✓
									</motion.div>
								)}
							</motion.div>
						))}
					</div>
					<div className="flex-1 flex flex-col items-center mt-10 md:mt-0">
						<div className="bg-white/95 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 w-full max-w-lg text-center border-2 border-batik-gold/20 relative overflow-hidden">
							<h4 className="text-2xl font-bold text-batik-brown dark:text-batik-gold mb-6 drop-shadow">
								Hampers Anda
							</h4>
							<div className="flex flex-wrap gap-4 justify-center mb-6 min-h-[60px]">
								{selected.length === 0 && (
									<span className="text-gray-400">Belum ada kue dipilih</span>
								)}
								{selected.map((idx) => (
									<motion.div
										key={kueList[idx].name}
										layout
										className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-batik-gold/20 text-batik-brown dark:text-batik-gold border border-batik-gold/30 shadow"
									>
										<img
											src={kueList[idx].image}
											alt={kueList[idx].name}
											className="w-8 h-8 rounded-full"
										/>
										<span className="font-semibold">{kueList[idx].name}</span>
									</motion.div>
								))}
							</div>
							<motion.button
								whileHover={{ scale: 1.07 }}
								whileTap={{ scale: 0.97 }}
								disabled={selected.length === 0}
								onClick={() => setShowSummary(true)}
								className={`mt-2 px-6 py-3 rounded-xl font-bold shadow transition-colors text-lg ${
									selected.length === 0
										? "bg-gray-300 text-gray-500 cursor-not-allowed"
										: "bg-batik-gold text-white hover:bg-batik-brown"
								}`}
							>
								Lihat Ringkasan Hampers
							</motion.button>
							<AnimatePresence>
								{showSummary && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 20 }}
										transition={{ duration: 0.4 }}
										className="mt-8 p-6 rounded-2xl bg-batik-gold/10 text-batik-brown dark:text-batik-gold border border-batik-gold/30 text-lg shadow-lg"
									>
										<div className="font-bold mb-2 text-xl">Isi Hampers:</div>
										<ul className="mb-2">
											{selected.map((idx) => (
												<li key={kueList[idx].name}>{kueList[idx].name}</li>
											))}
										</ul>
										<div className="text-base text-gray-600 dark:text-gray-300 mb-2">
											Hampers ini cocok untuk hadiah Lebaran, keluarga, atau
											kerabat!
										</div>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.97 }}
											className="mt-2 px-6 py-2 rounded-xl bg-batik-gold text-white font-bold shadow hover:bg-batik-brown transition-colors text-base"
											onClick={() => setShowSummary(false)}
										>
											Tutup
										</motion.button>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
				<div className="text-center text-sm text-gray-500 mt-8">
					* Maksimal {maxHampers} jenis kue per hampers
				</div>
			</div>
		</section>
	);
};

export default InteractiveHampers;
