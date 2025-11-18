export default function Footer(){
  return (
    <footer className="bg-[#2E2E2E] text-white py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-semibold text-lg">Kavarna Cacao</div>
          <p className="text-white/70 text-sm mt-2">Warm, artisanal, and modern. Since 2003.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-white/70 text-sm">info@cacao.si</p>
          <p className="text-white/70 text-sm">+386 1 234 5678</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Hours</div>
          <p className="text-white/70 text-sm">Mon–Thu 8:00–22:00</p>
          <p className="text-white/70 text-sm">Fri–Sun 8:00–23:00</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Social</div>
          <div className="flex gap-3 text-white/80 text-sm">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-white/50 text-xs">© {new Date().getFullYear()} Kavarna Cacao. All rights reserved.</div>
    </footer>
  )
}
