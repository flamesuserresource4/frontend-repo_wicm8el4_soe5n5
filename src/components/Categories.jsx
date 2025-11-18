import { motion } from 'framer-motion'

const categories = [
  { title: 'Coffee', desc: 'Specialty espresso & slow brew', img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop' },
  { title: 'Ice Cream', desc: 'House-made gelato & sorbetto', img: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=800&auto=format&fit=crop' },
  { title: 'Desserts', desc: 'Patisserie-style cakes & pastries', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop' },
  { title: 'Food', desc: 'Brunch plates & light bites', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop' },
  { title: 'Drinks & Cocktails', desc: 'Signature drinks & classics', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop' },
]

export default function Categories(){
  return (
    <section id="categories" className="bg-[#F5F1EB] text-[#2E2E2E] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-56 object-cover transform group-hover:scale-[1.03] transition-transform"/>
              </div>
              <div className="p-5">
                <div className="font-semibold text-lg">{c.title}</div>
                <p className="text-sm text-[#2E2E2E]/70 mt-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
