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
    <footer className="mt-16 bg-[#050205] text-[#FFFFFF] rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

        {/* Info */}
        <div className="space-y-2 text-center md:text-right">

          {/* Location */}
          <div className="flex items-center gap-2 justify-center md:justify-end 
                          font-[Cairo] font-medium font text-md md:text-lg 
                          text-white transition  cursor-pointer">
            <FaMapMarkerAlt className="text-[#D3AC69]" />
            غزة - شارع النصر - مفترق العائلات
          </div>

          {/* Contact Number */}
          <div className="flex items-center justify-center md:justify-end gap-2">
            <a
              href="tel:+970593221010"
              className="flex items-center gap-2 text-white 
                         font-[Cairo] font-medium text-md md:text-lg 
                        transition"
            >
              <FaPhoneAlt className="text-[#D3AC69]" />
              970593221010+
            </a>
          </div>

        </div>

{/* Social */}
<div className="flex gap-5">

  {[
    { href: "https://wa.me/+972597417420", icon: <FaWhatsapp /> },
    { href: "https://www.instagram.com/bistro_arafat?igsh=MXRtb24xN3Rob2IweQ==", icon: <FaInstagram /> },
    { href: "https://www.facebook.com/share/1EFLVfxQTb/", icon: <FaFacebookF /> },
    { href: "https://www.tiktok.com/@bistro_arafat?_r=1&_t=ZS-9327RaoOi9J", icon: <FaTiktok /> },
  ].map((item, i) => (
    <a
      key={i}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        p-3
        rounded-full
        bg-[#D3AC69]
        text-[#050205]
        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_0_28px_rgba(211,172,105,0.95)]
      "
    >
      <span className="relative z-10  text-lg md:text-xl">
        {item.icon}
      </span>

   
    </a>
  ))}

</div>

        {/* Signature */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-xs opacity-80 mt-4 md:mt-0">
          <a
            href="https://engmohammedaljojo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  
                       transition flex items-center gap-1"
          >
            <FaLaptopCode className="text-[#D3AC69] text-lg md:text-xl" />
            <span className="font-[Cairo] font-bold text-md md:text-lg">
              Eng. Mohammed Eljoujo
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}

