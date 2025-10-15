import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Khách sạn ABC</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Trải nghiệm sang trọng tại trung tâm Sài Gòn với dịch vụ hoàn hảo và tiện nghi hiện đại.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#gioi-thieu" className="hover:text-primary-foreground transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#phong" className="hover:text-primary-foreground transition-colors">
                  Phòng nghỉ
                </a>
              </li>
              <li>
                <a href="#tien-ich" className="hover:text-primary-foreground transition-colors">
                  Tiện ích
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-primary-foreground transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Thông tin liên hệ</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>19-23, Quận 1, TP.Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:02838233999" className="hover:text-primary-foreground transition-colors">
                  028.3823 3999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@khachsanabc.vn" className="hover:text-primary-foreground transition-colors">
                  info@khachsanabc.vn
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Khách sạn ABC. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
