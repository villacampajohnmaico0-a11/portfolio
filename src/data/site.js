// src/data/site.js
// Personal developer portfolio identity.

export const site = {
  brandName: "Rey Islakila",
  businessDescription:
    "Web developer and custom system developer — I build modern websites, booking platforms, dashboards, and management systems.",
  email: "hello@islakila.dev",
  linkedIn: "#",
  instagram: "#",
  facebook: "#",
  phone: "",
  projectTypeOptions: [
    "Business Website",
    "E-Commerce Website",
    "Hotel / Booking Website",
    "Restaurant Website",
    "Custom Management System",
    "Web Application / Dashboard",
    "Other",
  ],
  budgetOptions: [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Not sure yet",
  ],
  hero: {
    headline: "I build websites and systems that actually work for you.",
    alternateHeadline:
      "Real software for real businesses — designed, built, and shipped.",
    supportingText:
      "I'm a web developer and Computer Engineering student, founder of Islakila and StayKila, and a Computer Engineering Intern at Plas Enterprises & Engineering Services. I build modern websites, web applications, booking platforms, dashboards, and custom management systems that help businesses reach more customers and run smoother.",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "My Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  footerLinks: [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "My Work", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Modern websites",
    "Web applications",
    "Booking platforms",
    "Dashboards",
    "Custom management systems",
  ],
};

export const meta = {
  title: "Rey Islakila | Web Developer & Custom System Developer",
  description:
    "I build modern websites, web applications, booking platforms, dashboards, and custom management systems. Founder of Islakila and StayKila.",
  canonical: "https://islakila.dev",
  twitterHandle: "@islakila",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rey Islakila",
  jobTitle: "Web Developer & Custom System Developer",
  description:
    "Developer and founder of Islakila and StayKila. I build modern websites, booking platforms, dashboards, and custom management systems.",
  url: "https://islakila.dev",
  email: "hello@islakila.dev",
  knowsAbout: [
    "Web Development",
    "E-Commerce",
    "Booking Platforms",
    "Dashboards",
    "Custom Management Systems",
  ],
};
