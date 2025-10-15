import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Liên Hệ</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho quý khách
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 bg-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Địa Chỉ</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        19-23, Quận 1<br />
                        TP.Hồ Chí Minh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Điện Thoại</h3>
                      <a href="tel:02838233999" className="text-muted-foreground hover:text-primary transition-colors">
                        028.3823 3999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Giờ Làm Việc</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Lễ tân: 24/7
                        <br />
                        Nhà hàng: 6:00 - 23:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/map-of-district-1-ho-chi-minh-city-vietnam.jpg"
                alt="Bản đồ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
