"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="lien-he" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Liên hệ với chúng tôi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Họ và tên
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Số điện thoại
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0123 456 789"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nội dung
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Nhập nội dung cần liên hệ..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Gửi liên hệ
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src="/hotel-reception-desk-modern-elegant.jpg" alt="Lễ tân khách sạn" className="w-full h-full object-cover" />
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Thông tin liên hệ</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Địa chỉ:</strong>
                    <br />
                    19-23, Quận 1, TP.Hồ Chí Minh
                  </p>
                  <p>
                    <strong className="text-foreground">Điện thoại:</strong>
                    <br />
                    <a href="tel:02838233999" className="text-primary hover:underline">
                      028.3823 3999
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Email:</strong>
                    <br />
                    <a href="mailto:info@khachsanabc.vn" className="text-primary hover:underline">
                      info@khachsanabc.vn
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Giờ làm việc:</strong>
                    <br />
                    24/7 - Phục vụ quý khách mọi lúc
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
