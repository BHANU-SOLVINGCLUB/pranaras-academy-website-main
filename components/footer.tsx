import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-2 -mt-16">
            <Image
              src="/Pranaras Logo.png"
              alt="Pranaras Academy"
              width={580}
              height={140}
              className="h-60 sm:h-64 w-auto bg-transparent"
            />
            <p className="text-base font-semibold text-primary-foreground tracking-wide leading-relaxed pl-4 sm:pl-8 -mt-4">
              Build Skills. Shape Futures.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/social-impact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Social Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Soft Skills Training</li>
              <li className="text-sm text-primary-foreground/80">Leadership Development</li>
              <li className="text-sm text-primary-foreground/80">Corporate Training</li>
              <li className="text-sm text-primary-foreground/80">Life Coaching</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>sales@pranarasacademy.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+918886999022" className="hover:text-primary-foreground transition-colors">
                  +91 88869 99022
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Madhapur, Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Follow us on Instagram" className="text-primary-foreground hover:opacity-70 transition-opacity">
                <FaInstagram size={30} />
              </a>
              <a href="#" aria-label="Follow us on LinkedIn" className="text-primary-foreground hover:opacity-70 transition-opacity">
                <FaLinkedin size={30} />
              </a>
              <a href="#" aria-label="Follow us on YouTube" className="text-primary-foreground hover:opacity-70 transition-opacity">
                <FaYoutube size={30} />
              </a>
              <a href="#" aria-label="Follow us on Facebook" className="text-primary-foreground hover:opacity-70 transition-opacity">
                <FaFacebook size={30} />
              </a>
              <a href="#" aria-label="Follow us on WhatsApp" className="text-primary-foreground hover:opacity-70 transition-opacity">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/15 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Pranaras Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
