import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t-4 border-[#aeca1d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/bennet.png"
              alt="Bennet Pharmaceuticals Ltd."
              width={200}
              height={50}
              className="h-12 w-auto"
            />
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-[#9DC41A]" />
                <p className="text-sm">
                  608 B Wing, 6th Floor
                  <br />
                  Manubhai Tower, Sayajigunj, Sayajigunj,
                  <br />
                  Vadodara, Gujarat 390005
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#9DC41A]" />
                <p className="text-sm">0265 236 1750</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#9DC41A]" />
                <p className="text-sm">sale@bennet.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#9DC41A]" />
                <p className="text-sm">10:00 - 18:00, Mon - Sat</p>
              </div>
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quicklinks</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Manufacturing",
                "Our Products",
                "Life At Bennet",
                "Careers",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[#9DC41A]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News and Events */}
          <div>
            <h3 className="text-lg font-bold mb-6">News and Events</h3>
            <ul className="space-y-3">
              {[
                "Press Releases",
                "Corporate Events",
                "Awards and Recognition",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[#9DC41A]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Facebook className="w-5 h-5" />
                <span className="text-sm">xyz@.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Twitter className="w-5 h-5" />
                <span className="text-sm">xyz@.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">xyz@.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
