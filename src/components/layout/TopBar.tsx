import { FaWhatsapp } from "react-icons/fa"
export default function TopBar(){
  return (
    <div className="w-full bg-[#005671] text-white text-xs">
      <div className="max-w-7xl mx-auto px-6 h-[36px] flex items-center justify-end gap-6">
        <span>info@avithalo.com</span>
        <span className="opacity-50">|</span>
        <span>+34 971 495 582</span>
        <span className="opacity-50">|</span>
        <a href="https://wa.me/34649299279" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <FaWhatsapp size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}