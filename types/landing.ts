// export type CTA = {
//   label: string;
//   sectionId?: string;
//   href?: string;
//   variant?: "primary" | "secondary";
// };

export type CTA =
  | {
      kind: "scroll";
      label: string;
      sectionId: string;
      variant: "primary" | "secondary";
    }
  | {
      kind: "external";
      label: string;
      href: string;
      variant: "primary" | "secondary";
    };

// export type HeroSection = {
//   type: "hero";
//   id: string;
//   eyebrow?: string;
//   title: string;
//   highlightedText?: string;
//   description: string;
//   primaryCta: CTA;
//   secondaryCta?: CTA;
// };

export type HeroSection = {
  type: "hero";
  id: string;
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  image?: {
    src: string;
    alt: string;
  };
};

export type TrustBarSection = {
  type: "trust-bar";
  id: string;
  items: {
    label: string;
    value: string;
  }[];
};

export type GallerySection = {
  type: "gallery";
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export type ServicesItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight?: boolean;
};

export type ServicesSection = {
  type: "services";
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServicesItem[];
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQSection = {
  type: "faq";
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQItem[];
};

export type ContactSection = {
  type: "contact";
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  email?: string;
  whatsappLabel?: string;
};

export type LandingSection =
  | HeroSection
  | TrustBarSection
  | GallerySection
  | ServicesSection
  | FAQSection
  | ContactSection;

export type ThemeConfig = {
  colors: {
    background: string;
    surface: string;
    primary: string;
    primaryHover: string;
    text: string;
    muted: string;
    border: string;
  };
};

export type SeoConfig = {
  title: string;
  description: string;
};

export type LandingPageConfig = {
  slug: string;
  businessName: string;
  segment: string;
  seo: SeoConfig;
  theme: ThemeConfig;
  sections: LandingSection[];
};