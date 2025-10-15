import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-hotel-lobby-vietnam-elegant-interior.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">Khách sạn ABC</h1>
        <p className="text-xl md:text-2xl mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
          Trải nghiệm sang trọng tại trung tâm Sài Gòn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Đặt phòng ngay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
          >
            Khám phá thêm
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
