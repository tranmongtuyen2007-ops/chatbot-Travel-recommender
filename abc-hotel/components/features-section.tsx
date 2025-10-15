import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Coffee, Car, Utensils, Dumbbell, Shield } from "lucide-react"

const features = [
  {
    icon: Wifi,
    title: "WiFi Miễn Phí",
    description: "Kết nối internet tốc độ cao trong toàn bộ khách sạn",
  },
  {
    icon: Coffee,
    title: "Phục Vụ 24/7",
    description: "Đội ngũ lễ tân sẵn sàng phục vụ quý khách mọi lúc",
  },
  {
    icon: Car,
    title: "Bãi Đỗ Xe",
    description: "Bãi đỗ xe rộng rãi và an toàn cho khách lưu trú",
  },
  {
    icon: Utensils,
    title: "Nhà Hàng",
    description: "Ẩm thực đa dạng từ Á đến Âu với đầu bếp chuyên nghiệp",
  },
  {
    icon: Dumbbell,
    title: "Phòng Gym",
    description: "Trang thiết bị tập luyện hiện đại và chuyên nghiệp",
  },
  {
    icon: Shield,
    title: "An Ninh 24/7",
    description: "Hệ thống an ninh và camera giám sát toàn diện",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Tiện Nghi & Dịch Vụ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Chúng tôi cung cấp đầy đủ tiện nghi để đảm bảo kỳ nghỉ của bạn thật thoải mái và trọn vẹn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors duration-300 bg-card">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
