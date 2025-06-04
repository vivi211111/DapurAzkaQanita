import { Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const kueStories = [
	{
		name: "Maksubah",
		image: "/portfolio/kue-maksubah-prunes.jpg",
		story:
			"Maksubah adalah kue tradisional Palembang yang hanya dibuat pada momen istimewa seperti Lebaran dan pernikahan. Kue ini melambangkan kemakmuran dan kehangatan keluarga.",
	},
	{
		name: "Lapis Legit",
		image: "/portfolio/kue-lapis-legit.jpg",
		story:
			"Lapis Legit dikenal sebagai kue seribu lapis, simbol kesabaran dan ketekunan. Biasanya disajikan saat hari besar sebagai tanda syukur dan kebersamaan.",
	},
	{
		name: "Bolu Kukus Pelangi",
		image: "/portfolio/kue-bolu-kukus.jpg",
		story:
			"Bolu Kukus Pelangi dengan warna-warni ceria sering menjadi favorit anak-anak saat Lebaran, melambangkan kebahagiaan dan harapan baru.",
	},
];

const AboutSection = () => {
	const [selectedStory, setSelectedStory] = useState(0);

	return (
		<section className="py-8 md:py-20 bg-batik-cream/30 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-8 sm:px-4 lg:px-8">
				{/* MOBILE: compact, gambar atas, konten bawah */}
				<div className="md:hidden">
					<div className="flex flex-col gap-5">
						{/* Gambar */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="w-full "
						>
							<div className="rounded-lg overflow-hidden shadow border border-batik-gold/30">
								<img
									src="/about/DapurAzka.jpg"
									alt="Dapur Azka Qanita"
									className="w-full h-50 object-center scale-105"
								/>
							</div>
						</motion.div>

						{/* Konten */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="font-bold text-xl text-batik-brown dark:text-batik-gold mb-1"
							>
								Tentang Dapur Azka Qanita
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.15 }}
								className="text-sm text-gray-700 dark:text-gray-300 mb-1"
							>
								Sejak berdiri pada tahun 1890, Dapur Azka Qanita telah menjadi warisan keluarga yang terus dijaga dan dilestarikan selama tiga generasi. Resep otentik yang kami gunakan diwariskan dari ibu ke anak, menjadikan setiap hidangan penuh dengan cita rasa asli dan kehangatan rumah.
							</motion.p>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="text-sm text-gray-600 dark:text-gray-400 mb-2"
							>
								Kami bukan sekadar usaha biasa, melainkan penjaga tradisi kuliner Palembang yang fokus melayani pesanan khusus terutama pada hari besar dan hari raya. Dengan bahan-bahan pilihan dan teknik pembuatan yang terjaga kualitasnya, Dapur Azka Qanita terus menghadirkan kue tradisional yang lezat dan penuh makna.
							</motion.p>
							{/* Highlight Cards */}
							<div className="grid grid-cols-2 gap-2 mb-2">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.25 }}
									className="bg-batik-gold/10 rounded-md p-2 flex flex-col items-center shadow"
								>
									<Users className="text-batik-brown text-lg mb-1" size={16} />
									<div className="text-lg font-bold text-batik-brown dark:text-batik-gold">1000+</div>
									<div className="text-[10px] text-batik-brown dark:text-batik-gold font-medium text-center">Pelanggan Setia</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.3 }}
									className="bg-batik-gold/10 rounded-md p-2 flex flex-col items-center shadow"
								>
									<Award className="text-batik-brown text-lg mb-1" size={16} />
									<div className="text-lg font-bold text-batik-brown dark:text-batik-gold">100+</div>
									<div className="text-[10px] text-batik-brown dark:text-batik-gold font-medium text-center">Tahun Berpengalaman</div>
								</motion.div>
							</div>
							{/* Feature List */}
							<motion.ul
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.35 }}
								className="mb-0 space-y-1 text-batik-brown dark:text-batik-gold/90 text-xs"
							>
								<li className="flex items-center text-sm gap-2"><span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>Pelayanan Ramah</li>
								<li className="flex items-center text-sm gap-2"><span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>Proses Memasak Masih Tradisional</li>
								<li className="flex items-center text-sm gap-2"><span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>Rasa Kue Autentik</li>
							</motion.ul>
						</motion.div>
					</div>
				</div>

				{/* DESKTOP: grid 2 kolom, layout tetap */}
				<div className="hidden md:block">
					<div className="grid grid-cols-2 gap-10 items-start">
						{/* Left: Image */}
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="w-full"
						>
							<div className="rounded-2xl overflow-hidden shadow-lg border border-batik-gold/30 dark:border-batik-gold/10">
								<img
									src="/about/DapurAzka.jpg"
									alt="Dapur Azka Qanita"
									className="w-full object-center scale-110 hover:scale-105 transition-transform duration-500 rounded-t-2xl"
								/>
							</div>
						</motion.div>
						{/* Right: Content */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<motion.h2
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.1 }}
								className="font-bold text-4xl text-batik-brown dark:text-batik-gold mb-4"
							>
								Tentang Dapur Azka Qanita
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.2 }}
								className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-2xl"
							>
								Sejak berdiri pada tahun 1890, Dapur Azka Qanita telah menjadi warisan keluarga yang terus dijaga dan dilestarikan selama tiga generasi. Resep otentik yang kami gunakan diwariskan dari ibu ke anak, menjadikan setiap hidangan penuh dengan cita rasa asli dan kehangatan rumah.
							</motion.p>
							<motion.p
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.3 }}
								className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl"
							>
								Kami bukan sekadar usaha biasa, melainkan penjaga tradisi kuliner Palembang yang fokus melayani pesanan khusus terutama pada hari besar dan hari raya. Dengan bahan-bahan pilihan dan teknik pembuatan yang terjaga kualitasnya, Dapur Azka Qanita terus menghadirkan kue tradisional yang lezat dan penuh makna.
							</motion.p>
							{/* Highlight Cards */}
							<div className="grid grid-cols-2 gap-4 mb-6">
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: 0.4 }}
									className="bg-batik-gold/10 dark:bg-batik-gold/20 rounded-xl p-5 flex flex-col items-center shadow"
								>
									<Users className="text-batik-brown mb-2" size={20} />
									<div className="text-2xl font-bold text-batik-brown dark:text-batik-gold">1000+</div>
									<div className="text-sm text-batik-brown dark:text-batik-gold font-medium text-center">Pelanggan Setia</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: 0.5 }}
									className="bg-batik-gold/10 dark:bg-batik-brown/30 rounded-xl p-5 flex flex-col items-center shadow"
								>
									<Award className="text-batik-brown dark:text-batik-gold mb-2" size={20} />
									<div className="text-2xl font-bold text-batik-brown dark:text-batik-gold">100+</div>
									<div className="text-sm text-batik-brown dark:text-batik-gold font-medium text-center">Tahun Berpengalaman</div>
								</motion.div>
							</div>
							{/* Feature List */}
							<motion.ul
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.6 }}
								className="mb-0 space-y-2 text-batik-brown dark:text-batik-gold/90 text-base"
							>
								<li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>Pelayanan Ramah</li>
								<li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>Proses Memasak Masih Tradisional</li>
								<li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>Rasa Kue Autentik</li>
							</motion.ul>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
