"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-serif font-bold text-primary">ABC</div>
            <div className="text-sm text-muted-foreground hidden sm:block">KHÁCH SẠN</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#gioi-thieu" className="text-sm hover:text-primary transition-colors">
              Giới thiệu
            </a>
            <a href="#phong" className="text-sm hover:text-primary transition-colors">
              Phòng
            </a>
            <a href="#tien-ich" className="text-sm hover:text-primary transition-colors">
              Tiện ích
            </a>
            <a href="#lien-he" className="text-sm hover:text-primary transition-colors">
              Liên hệ
            </a>
            <a href="tel:02838233999" className="flex items-center gap-2 text-sm text-primary">
              <Phone className="h-4 w-4" />
              028.3823 3999
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#gioi-thieu"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Giới thiệu
              </a>
              <a
                href="#phong"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Phòng
              </a>
              <a
                href="#tien-ich"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tiện ích
              </a>
              <a
                href="#lien-he"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </a>
              <a href="tel:02838233999" className="flex items-center gap-2 text-sm text-primary">
                <Phone className="h-4 w-4" />
                028.3823 3999
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
