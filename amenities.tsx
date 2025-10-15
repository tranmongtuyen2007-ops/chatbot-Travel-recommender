import { Coffee, Utensils, Dumbbell, Car, Wifi, Shield } from "lucide-react"

const amenities = [
  {
    icon: Utensils,
    title: "Nhà hàng",
    description: "Thưởng thức ẩm thực Việt và quốc tế",
  },
  {
    icon: Coffee,
    title: "Quầy bar",
    description: "Đồ uống cao cấp và không gian thư giãn",
  },
  {
    icon: Dumbbell,
    title: "Phòng gym",
    description: "Trang thiết bị hiện đại, mở cửa 24/7",
  },
  {
    icon: Car,
    title: "Bãi đỗ xe",
    description: "An toàn và tiện lợi cho khách lưu trú",
  },
  {
    icon: Wifi,
    title: "WiFi tốc độ cao",
    description: "Miễn phí trong toàn bộ khách sạn",
  },
  {
    icon: Shield,
    title: "An ninh 24/7",
    description: "Đảm bảo an toàn tuyệt đối",
  },
]

export function Amenities() {
  return (
    <section id="tien-ich" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Tiện ích</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Trải nghiệm đầy đủ các tiện ích cao cấp trong suốt thời gian lưu trú
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
