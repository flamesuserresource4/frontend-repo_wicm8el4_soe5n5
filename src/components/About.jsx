import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="bg-[#F5F1EB] text-[#2E2E2E] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-6 order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Café</h2>
          <p className="text-base md:text-lg text-[#2E2E2E]/80 leading-relaxed">Kavarna Cacao blends classic European café culture with a modern, artisanal approach. From specialty coffee to house-made gelato, plated desserts, and cocktails, every detail is crafted to be warm, elegant, and inviting.</p>
          <div className="mt-6 flex gap-3">
            <a href="#locations" className="px-5 py-2.5 rounded-full bg-[#FFE5B4] text-[#2E2E2E] font-medium shadow hover:scale-[1.03] transition-transform">Visit Us</a>
            <a href="#franchise" className="px-5 py-2.5 rounded-full border border-[#2E2E2E]/20">Become a Partner</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-6 order-1 md:order-2"
        >
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" alt="About" className="rounded-2xl shadow-xl object-cover w-full h-[320px] md:h-[420px]"/>
        </motion.div>
      </div>
    </section>
  )
}
