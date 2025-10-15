export function AboutSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground text-balance">
                Chào mừng đến với ABC
              </h2>

              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Khách sạn ABC tọa lạc tại vị trí đắc địa ngay trung tâm Quận 1, TP.Hồ Chí Minh, mang đến cho quý khách
                  trải nghiệm lưu trú đẳng cấp với dịch vụ hoàn hảo và tiện nghi hiện đại.
                </p>

                <p>
                  Với thiết kế sang trọng và đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết mang đến cho bạn những
                  khoảnh khắc đáng nhớ trong chuyến công tác hay kỳ nghỉ của mình.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/modern-luxury-hotel-room-with-city-view.jpg"
                alt="Phòng khách sạn"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
