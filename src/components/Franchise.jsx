import { motion } from 'framer-motion'

export default function Franchise(){
  return (
    <section id="franchise" className="bg-[#F5F1EB] text-[#2E2E2E] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="md:col-span-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us / Franchise</h2>
          <p className="text-[#2E2E2E]/80">We partner with passionate entrepreneurs to bring Cacao to new neighborhoods. Our team supports design, training, supply chain, and launch. Tell us a bit about your vision, and we'll reach out.</p>
          <div className="mt-6">
            <a href="#" className="px-5 py-2.5 rounded-full bg-[#D8B38F] text-[#2E2E2E] font-medium shadow hover:scale-[1.03] transition-transform">Become a Partner</a>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="md:col-span-6 bg-white rounded-2xl shadow p-6 md:p-8 space-y-4"
          onSubmit={(e)=> e.preventDefault()}
        >
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input className="w-full rounded-xl border border-[#2E2E2E]/20 px-4 py-3" placeholder="Your name"/>
          </div>
          <div>
            <label className="text-sm block mb-1">Email</label>
            <input type="email" className="w-full rounded-xl border border-[#2E2E2E]/20 px-4 py-3" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="text-sm block mb-1">Message</label>
            <textarea className="w-full rounded-xl border border-[#2E2E2E]/20 px-4 py-3" placeholder="Tell us about your location and vision" rows="4"/>
          </div>
          <button className="px-5 py-2.5 rounded-full bg-[#FFE5B4] text-[#2E2E2E] font-medium shadow hover:scale-[1.03] transition-transform">Send</button>
        </motion.form>
      </div>
    </section>
  )
}
