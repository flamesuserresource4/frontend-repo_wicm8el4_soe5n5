import { useEffect, useState } from 'react'
import { Menu, Phone, MapPin } from 'lucide-react'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = 'text-sm md:text-base text-[#2E2E2E] hover:opacity-80 transition-opacity'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-[#F5F1EB]/80 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=200&auto=format&fit=crop" alt="Cacao" className="w-10 h-10 rounded-full object-cover shadow" />
            <div className="font-semibold tracking-wide text-[#2E2E2E]">Kavarna Cacao</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a className={linkClass} href="#about">About</a>
            <a className={linkClass} href="#categories">Categories</a>
            <a className={linkClass} href="#menu">Menu</a>
            <a className={linkClass} href="#locations">Locations</a>
            <a className={linkClass} href="#gallery">Gallery</a>
            <a className={linkClass} href="#franchise">Join Us</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#locations" className="inline-flex items-center gap-2 border border-[#2E2E2E]/20 text-[#2E2E2E] px-4 py-2 rounded-full hover:bg-white/60 transition shadow-sm">
              <MapPin size={18}/> Visit Us
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 bg-[#D8B38F] text-[#2E2E2E] px-4 py-2 rounded-full hover:scale-[1.03] transition-transform shadow-md">
              <Phone size={18}/> Order or Reserve
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md bg-white/70"><Menu/></button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <a className={linkClass} href="#about" onClick={() => setOpen(false)}>About</a>
            <a className={linkClass} href="#categories" onClick={() => setOpen(false)}>Categories</a>
            <a className={linkClass} href="#menu" onClick={() => setOpen(false)}>Menu</a>
            <a className={linkClass} href="#locations" onClick={() => setOpen(false)}>Locations</a>
            <a className={linkClass} href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
            <a className={linkClass} href="#franchise" onClick={() => setOpen(false)}>Join Us</a>
          </div>
        )}
      </div>
    </header>
  )
}
