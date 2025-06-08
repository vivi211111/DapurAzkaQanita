import { motion } from "framer-motion"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import InteractiveKueStory from "../components/home/InteractiveKueStory"
import AdvantagesSection from "../components/home/AdvantagesSection"
import PortfolioSection from "../components/home/PortfolioSection"
import CTASection from "../components/home/CTASection"

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <HeroSection />
      <AboutSection />
      <InteractiveKueStory />
      <AdvantagesSection />
      <PortfolioSection />
    </motion.div>
  )
}

export default Home
