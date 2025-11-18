import { motion } from 'framer-motion'

const locations = [
  { name: 'Portorož', address: 'Obala 14, 6320 Portorož', hours: 'Mon–Sun 8:00–23:00', lat: 45.516, lng: 13.591, img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop' },
  { name: 'Ljubljana', address: 'Mestni trg 1, 1000 Ljubljana', hours: 'Mon–Sun 8:00–22:00', lat: 46.051, lng: 14.506, img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop' },
]

export default function Locations(){
  return (
    <section id="locations" className="bg-[#F5F1EB] text-[#2E2E2E] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="md:flex md:items-end md:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">Locations</h2>
          <a href="#" className="mt-3 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2E2E2E]/20">Get Directions</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-md bg-white">
            <iframe
              title="map"
              className="w-full h-[360px] md:h-[520px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-PLACEHOLDER&q=Portoro%C5%BE,Slovenia`}>
            </iframe>
          </div>
          <div className="md:col-span-5 grid sm:grid-cols-2 md:grid-cols-1 gap-6">
            {locations.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden bg-white shadow-md"
              >
                <img src={l.img} alt={l.name} className="w-full h-40 object-cover"/>
                <div className="p-5">
                  <div className="font-semibold text-lg">{l.name}</div>
                  <div className="text-sm text-[#2E2E2E]/70">{l.address}</div>
                  <div className="text-sm mt-1">{l.hours}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
