import {
  FaLaptopCode,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#212121] text-white rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

        {/* Info */}
        <div className="space-y-2 text-center md:text-right">
          {/* Location */}
          <div className="flex items-center gap-2 justify-center md:justify-end font-[Zain-bold] text-sm md:text-lg font-bold">
            <FaMapMarkerAlt className="text-[#ED1B24]" />
            غزة - شارع النصر - مفترق العائلات
          </div>

         {/* Contact Number */}
      <div className="flex items-center justify-center md:justify-end gap-2">
        <a
          href="tel:+970593221010"
          className="flex items-center gap-2 text-white font-[Zain-bold] text-sm md:text-lg  hover:text-[#ED1B24] transition"
        >
          <FaPhoneAlt className="text-[#ED1B24]" />
          970593221010+
        </a>
    </div>
        </div>

        {/* Social */}
        <div className="flex gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+970593221010"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#25D366] text-white shadow-lg 
                       hover:scale-110 transition transform duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-sm" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bistro_arafat?igsh=MXRtb24xN3Rob2IweQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full 
                       bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]
                       text-white shadow-lg
                       hover:scale-110 transition transform duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-sm" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1EFLVfxQTb/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#1877F2] text-white shadow-lg
                       hover:scale-110 transition transform duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm" />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@bistro_arafat?_r=1&_t=ZS-9327RaoOi9J"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black text-white shadow-lg
                       hover:scale-110 transition transform duration-300"
            aria-label="TikTok"
          >
            <FaTiktok className="text-sm" />
          </a>
        </div>

        {/* Signature */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-xs opacity-80 mt-4 md:mt-0">
          <a
            href="https://engmohammedaljojo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developer Portfolio"
            className="text-white hover:text-[#ED1B24] transition flex items-center gap-1"
          >
            <FaLaptopCode className="text-lg md:text-xl text-[#ED1B24]" />
            <span className="font-[lemonada]">
              Eng. Mohammed Eljoujo
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}
