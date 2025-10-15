import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <ChatbotWidget />
    </main>
  )
}
