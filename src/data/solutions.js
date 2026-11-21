import {
  BriefcaseBusiness,
  ShoppingBag,
  CalendarDays,
  UtensilsCrossed,
  LayoutDashboard,
  Building2,
} from "lucide-react";

export const solutions = [
  {
    id: "business-websites",
    projectType: "Business Website",
    label: "For service businesses",
    title: "Business Websites",
    description:
      "Look credible the moment customers find you. A fast, polished website that shows what you offer and makes it easy to reach you.",
    features: [
      "Professional multi-page site",
      "Service and product showcase",
      "Contact forms and business info",
      "Local SEO-friendly structure",
    ],
    benefits: [
      "Professional first impression",
      "Clear customer journey",
      "Easy contact and enquiries",
    ],
    icon: BriefcaseBusiness,
  },
  {
    id: "ecommerce",
    projectType: "E-Commerce Website",
    label: "For growing brands",
    title: "E-Commerce Websites",
    description:
      "Open your shop online and sell around the clock without the friction of a confusing buying experience.",
    features: [
      "Product catalogue and pages",
      "Cart and checkout flow",
      "Order management setup",
      "Mobile-friendly shopping experience",
    ],
    benefits: [
      "Sell online with confidence",
      "Keep products easy to browse",
      "Build trust at checkout",
    ],
    icon: ShoppingBag,
  },
  {
    id: "booking",
    projectType: "Hotel / Booking Website",
    label: "For hospitality and care",
    title: "Hotel / Booking Websites",
    description:
      "Help visitors explore availability, choose a room or package, and book with less friction.",
    features: [
      "Availability and booking flow",
      "Property and room presentation",
      "Reservation enquiry or checkout",
      "Simple admin and content updates",
    ],
    benefits: [
      "Streamline enquiries",
      "Create a premium booking journey",
      "Keep bookings organized",
    ],
    icon: CalendarDays,
  },
  {
    id: "restaurant",
    projectType: "Restaurant Website",
    label: "For food businesses",
    title: "Restaurant Websites",
    description:
      "Make ordering simple, showcase your menu, and keep customers coming back with a dining experience they enjoy online.",
    features: [
      "Menu presentation and ordering",
      "Reservations and contact details",
      "Loyalty and promotion highlights",
      "Optimized mobile ordering experience",
    ],
    benefits: [
      "Make ordering easier",
      "Keep your menu up to date",
      "Reach more hungry customers",
    ],
    icon: UtensilsCrossed,
  },
  {
    id: "dashboard",
    projectType: "Custom Management System",
    label: "For internal operations",
    title: "Custom Management Systems",
    description:
      "Turn routine admin work into a smoother system so your team can focus on running the business instead of chasing information.",
    features: [
      "Staff and customer records",
      "Reporting and task tracking",
      "Document management and workflow",
      "Control panels built around your process",
    ],
    benefits: [
      "Less time spent on admin",
      "Track operations in one place",
      "Create better daily decisions",
    ],
    icon: LayoutDashboard,
  },
  {
    id: "property",
    projectType: "Property & Listing Site",
    label: "For real estate and property",
    title: "Property & Listing Sites",
    description:
      "Present your spaces clearly, give buyers and renters the information they need, and make it easy to enquire.",
    features: [
      "Property listings and filters",
      "Location and detail pages",
      "Agent or owner enquiry flow",
      "Responsive presentation on every screen",
    ],
    benefits: [
      "Showcase properties better",
      "Improve lead quality",
      "Make browsing an easier experience",
    ],
    icon: Building2,
  },
];
