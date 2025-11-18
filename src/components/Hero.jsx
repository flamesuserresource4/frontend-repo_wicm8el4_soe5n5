import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.85])

  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden" id="top">
      <motion.img
        style={{ y, opacity }}
        src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1920&auto=format&fit=crop"
        alt="Cacao Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"/>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 h-full flex items-center justify-center text-center">
        <div>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=200&auto=format&fit=crop" alt="Logo" className="mx-auto w-24 h-24 rounded-full object-cover shadow-xl border border-white/40" />
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">Kavarna Cacao</h1>
          <p className="mt-3 md:mt-4 text-lg md:text-2xl text-white/85 max-w-2xl mx-auto">Premium café & dessert experience on the Adriatic coast.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#menu" className="px-6 py-3 rounded-full bg-[#D8B38F] text-[#2E2E2E] font-medium shadow-lg hover:scale-[1.03] transition-transform">View Menu</a>
            <a href="#locations" className="px-6 py-3 rounded-full border border-white/70 text-white/90 backdrop-blur-sm hover:bg-white/10 transition">Visit Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
