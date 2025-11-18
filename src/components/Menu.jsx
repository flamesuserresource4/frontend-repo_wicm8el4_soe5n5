import { motion } from 'framer-motion'

const items = [
  { name: 'Espresso', desc: 'Single origin, rich crema', price: '2.20' },
  { name: 'Cappuccino', desc: 'Velvety foam, balanced cup', price: '3.00' },
  { name: 'Flat White', desc: 'Double shot, silky milk', price: '3.40' },
  { name: 'Affogato', desc: 'Espresso over gelato', price: '4.50' },
  { name: 'Tiramisu Slice', desc: 'Classic Italian dessert', price: '4.80' },
  { name: 'Pistachio Gelato', desc: 'Signature house-made', price: '3.80' },
]

export default function Menu(){
  return (
    <section id="menu" className="bg-white text-[#2E2E2E] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="md:flex md:items-end md:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Menu</h2>
          <a href="#" className="mt-3 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D8B38F] text-[#2E2E2E] font-medium shadow hover:scale-[1.03] transition-transform">View Full Menu</a>
        </div>
        <div className="mt-8 bg-[#F5F1EB] rounded-2xl p-6 md:p-8 shadow-md">
          <div className="grid grid-cols-12 text-sm font-semibold text-[#2E2E2E]/70 pb-3 border-b border-[#2E2E2E]/10">
            <div className="col-span-6 md:col-span-7">Item</div>
            <div className="col-span-4 md:col-span-4">Notes</div>
            <div className="col-span-2 md:col-span-1 text-right">Price</div>
          </div>
          <div className="divide-y divide-[#2E2E2E]/10">
            {items.map((it, i) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="grid grid-cols-12 py-4 md:py-5"
              >
                <div className="col-span-6 md:col-span-7 font-medium">{it.name}</div>
                <div className="col-span-4 md:col-span-4 text-[#2E2E2E]/70">{it.desc}</div>
                <div className="col-span-2 md:col-span-1 text-right font-semibold">€{it.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
