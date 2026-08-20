import type { LandingSection } from "@/types/landing";
import HeroSection from "@/components/prototype-machine/sections/HeroSection";
import ServicesSection from "@/components/prototype-machine/sections/ServicesSection";
import FAQSection from "@/components/prototype-machine/sections/FAQSection";
import ContactSection from "@/components/prototype-machine/sections/ContactSection";
import TrustBarSection from "@/components/prototype-machine/sections/TrustBarSection";
import GallerySection from "@/components/prototype-machine/sections/GallerySection";

type RenderSectionProps = {
	section: LandingSection;
};

export function renderSection({ section }: RenderSectionProps) {
	switch (section.type) {
		case "hero":
			return <HeroSection key={section.id} section={section} />;

		case "trust-bar":
			return <TrustBarSection key={section.id} section={section} />;

		case "gallery":
			return <GallerySection key={section.id} section={section} />;

		case "services":
			return <ServicesSection key={section.id} section={section} />;

		case "faq":
			return <FAQSection key={section.id} section={section} />;

		case "contact":
			return <ContactSection key={section.id} section={section} />;

		default:
			return null;
	}
}
