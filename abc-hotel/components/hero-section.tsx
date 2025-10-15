import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-hotel-lobby-with-elegant-interior-design.jpg"
          alt="Khách sạn ABC"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground tracking-tight text-balance">
            Khách Sạn ABC
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Trải nghiệm sang trọng tại trung tâm Sài Gòn
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
              Đặt Phòng Ngay
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              028.3823 3999
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
