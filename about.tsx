import { MapPin, Phone, Mail } from "lucide-react"

export function About() {
  return (
    <section id="gioi-thieu" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Chào mừng đến với Khách sạn ABC
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tọa lạc tại vị trí đắc địa ngay trung tâm Quận 1, Khách sạn ABC mang đến cho quý khách trải nghiệm lưu trú
              đẳng cấp với dịch vụ hoàn hảo và tiện nghi hiện đại.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Với thiết kế sang trọng, phòng ốc tiện nghi và đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết mang đến
              cho bạn những kỷ niệm đáng nhớ trong chuyến công tác hay du lịch tại Sài Gòn.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p className="text-muted-foreground">19-23, Quận 1, TP.Hồ Chí Minh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <a href="tel:02838233999" className="text-primary hover:underline">
                    028.3823 3999
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@khachsanabc.vn" className="text-primary hover:underline">
                    info@khachsanabc.vn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img src="/luxury-hotel-exterior-vietnam-modern-building.jpg" alt="Khách sạn ABC" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
