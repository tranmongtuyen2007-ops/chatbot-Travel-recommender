import { Card, CardContent } from "@/components/ui/card"
import { Users, Maximize, Wifi } from "lucide-react"

const rooms = [
  {
    name: "Phòng Deluxe",
    image: "/deluxe-hotel-room-modern-elegant.jpg",
    size: "28m²",
    guests: "2 người",
    description: "Phòng tiêu chuẩn với đầy đủ tiện nghi hiện đại, view thành phố tuyệt đẹp.",
  },
  {
    name: "Phòng Executive",
    image: "/executive-hotel-room-luxury-spacious.jpg",
    size: "35m²",
    guests: "2-3 người",
    description: "Phòng rộng rãi với không gian làm việc riêng biệt, phù hợp cho khách công tác.",
  },
  {
    name: "Phòng Suite",
    image: "/hotel-suite-luxury-premium-bedroom.jpg",
    size: "50m²",
    guests: "4 người",
    description: "Phòng cao cấp với phòng khách riêng, ban công rộng và view panorama.",
  },
]

export function Rooms() {
  return (
    <section id="phong" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Phòng nghỉ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Khám phá các loại phòng được thiết kế tinh tế với đầy đủ tiện nghi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-3">{room.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{room.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Maximize className="h-4 w-4 text-primary" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span>WiFi miễn phí</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
