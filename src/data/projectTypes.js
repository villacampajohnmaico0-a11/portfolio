export const TONES = {
  lilac: { color: '#c9b8ff', bg: 'bg-[#c9b8ff]/12', border: 'border-[#c9b8ff]/35', ink: 'text-[#5b4bff]', paper: 'bg-[#c9b8ff]/20' },
  butter: { color: '#ffe58a', bg: 'bg-[#ffe58a]/14', border: 'border-[#ffe58a]/40', ink: 'text-[#8a6d00]', paper: 'bg-[#ffe58a]/25' },
  mint: { color: '#bdefd8', bg: 'bg-[#bdefd8]/14', border: 'border-[#bdefd8]/40', ink: 'text-[#1f8a55]', paper: 'bg-[#bdefd8]/25' },
  coral: { color: '#ff6b4a', bg: 'bg-[#ff6b4a]/14', border: 'border-[#ff6b4a]/40', ink: 'text-[#c03a20]', paper: 'bg-[#ff6b4a]/25' },
  ink: { color: '#14151a', bg: 'bg-[#14151a]/10', border: 'border-[#14151a]/25', ink: 'text-[#14151a]', paper: 'bg-[#14151a]/15', isDark: true },
  cobalt: { color: '#2f4bff', bg: 'bg-[#2f4bff]/12', border: 'border-[#2f4bff]/35', ink: 'text-[#1a33cc]', paper: 'bg-[#2f4bff]/20' },
  pop: { color: '#c6f432', bg: 'bg-[#c6f432]/16', border: 'border-[#c6f432]/45', ink: 'text-[#6f9a00]', paper: 'bg-[#c6f432]/30' },
  paper2: { color: '#ede7da', bg: 'bg-[#ede7da]/16', border: 'border-[#ede7da]/40', ink: 'text-[#14151a]', paper: 'bg-[#ede7da]/30' },
}

export const categoryTone = (tone) => TONES[tone] || TONES.lilac

export const categoryMockupKey = (id) => {
  const map = {
    events: 'WeddingInvitation',
    selling: 'Storefront',
    booking: 'BookingCalendar',
    food: 'RestaurantMenu',
    operations: 'Dashboard',
    services: 'BusinessSite',
    education: 'CoursePlatform',
    custom: 'CustomerPortal',
  }
  return map[id] || 'BusinessSite'
}

export const projectTypeMarquee = [
  'Wedding website',
  'Photo booth',
  'Online store',
  'Booking system',
  'Restaurant menu',
  'Inventory system',
  'POS',
  'Queue system',
  'Customer portal',
  'Landing page',
]

export const projectTypes = [
  {
    id: 'events',
    name: 'Events and celebrations',
    shortName: 'Events',
    tone: 'lilac',
    icon: 'Calendar',
    count: 6,
    outcome:
      'One beautiful place for your guests to find the date, venue, programme and RSVP details.',
    items: [
      {
        id: 'wedding-website',
        name: 'Wedding website',
        description:
          'A full wedding site with invitation, love story, schedule, venue map, RSVP, gift registry and photo gallery.',
        icon: 'Mail',
        projectType: 'Other',
        features: [
          'Invitation and love story pages',
          'Schedule and venue map',
          'RSVP and guest list management',
          'Gift registry and photo gallery',
        ],
        bestFor: 'Couples planning a wedding.',
      },
      {
        id: 'event-party-website',
        name: 'Event or party website',
        description:
          'A simple site for birthdays, debuts, christenings and reunions, with RSVP and a guest list.',
        icon: 'CalendarDays',
        projectType: 'Other',
        features: [
          'Event details and date',
          'RSVP and guest list',
          'Photo sharing after the event',
        ],
        bestFor: 'Birthdays, debuts, christenings and reunions.',
      },
      {
        id: 'event-ticketing',
        name: 'Event registration and ticketing',
        description:
          'Sell or distribute tickets for seminars, concerts and conferences, with QR tickets and check-in.',
        icon: 'CreditCard',
        projectType: 'Other',
        features: [
          'Online registration and tickets',
          'QR codes for entry',
          'Guest check-in on the day',
        ],
        bestFor: 'Seminars, concerts and conferences.',
      },
      {
        id: 'photo-booth-system',
        name: 'Photo booth system',
        description:
          'Guests capture photos, apply filters and share instantly by QR or email, with an online gallery for the event.',
        icon: 'Camera',
        projectType: 'Other',
        features: [
          'Photo capture and filters',
          'Instant QR or email sharing',
          'Online guest gallery',
          'Event branding',
        ],
        bestFor: 'Weddings, parties and corporate events.',
      },
      {
        id: 'photo-gallery-delivery',
        name: 'Photo gallery and delivery',
        description:
          'A private gallery where photography clients can view, download and favourite their photos.',
        icon: 'Image',
        projectType: 'Other',
        features: [
          'Client-only photo gallery',
          'Download and favourite picks',
          'Photographer branding',
        ],
        bestFor: 'Photographers delivering client galleries.',
      },
      {
        id: 'live-event-page',
        name: 'Live event page',
        description:
          'A single page for the day of the event, with the programme, a live slideshow and a guestbook or message wall.',
        icon: 'Mic',
        projectType: 'Other',
        features: [
          'Event programme and schedule',
          'Live slideshow of photos',
          'Guestbook or message wall',
        ],
        bestFor: 'Conferences, weddings and live gatherings.',
      },
    ],
  },
  {
    id: 'selling',
    name: 'Online selling',
    shortName: 'Selling',
    tone: 'butter',
    icon: 'ShoppingBag',
    count: 5,
    outcome: 'A shop that is always open, with products, cart and checkout that just work.',
    items: [
      {
        id: 'online-store',
        name: 'Online store',
        description:
          'Products, cart, checkout and orders with an admin dashboard so you can manage everything in one place.',
        icon: 'ShoppingBag',
        projectType: 'E-Commerce Website',
        features: [
          'Product catalogue and pages',
          'Cart and secure checkout',
          'Order management dashboard',
          'Mobile-friendly shopping',
        ],
        bestFor: 'Shops ready to sell online.',
      },
      {
        id: 'preorder-catalog',
        name: 'Pre-order or catalog store',
        description:
          'A browsable catalogue for sellers who take orders through chat or Facebook instead of an online checkout.',
        icon: 'Image',
        projectType: 'E-Commerce Website',
        features: [
          'Product catalogue with photos',
          'Enquiry or pre-order flow',
          'No checkout required',
        ],
        bestFor: 'Sellers taking orders by chat.',
      },
      {
        id: 'marketplace',
        name: 'Marketplace',
        description: 'A single platform where multiple sellers can list products and manage their own orders.',
        icon: 'Users',
        projectType: 'E-Commerce Website',
        features: [
          'Multiple seller accounts',
          'Product listings per seller',
          'Shared checkout or per-seller orders',
        ],
        bestFor: 'Platforms hosting many sellers.',
      },
      {
        id: 'subscription-membership',
        name: 'Subscription or membership site',
        description:
          'Monthly boxes, paid content or member-only pages with recurring billing and member access.',
        icon: 'CreditCard',
        projectType: 'E-Commerce Website',
        features: [
          'Recurring subscription billing',
          'Member-only pages and content',
          'Member account management',
        ],
        bestFor: 'Box subscriptions and paid communities.',
      },
      {
        id: 'digital-products',
        name: 'Digital products store',
        description:
          'Sell ebooks, templates, courses and downloads that customers receive instantly after purchase.',
        icon: 'Printer',
        projectType: 'E-Commerce Website',
        features: [
          'Digital file delivery',
          'Instant download after purchase',
          'Secure file access',
        ],
        bestFor: 'Creators selling downloads.',
      },
    ],
  },
  {
    id: 'booking',
    name: 'Booking and reservations',
    shortName: 'Booking',
    tone: 'mint',
    icon: 'CalendarDays',
    count: 5,
    outcome: 'Let customers check availability and book a room, appointment or space without calling.',
    items: [
      {
        id: 'hotel-resort-booking',
        name: 'Hotel, resort, and apartment booking',
        description:
          'Show rooms and availability, take reservations and manage bookings from a calendar.',
        icon: 'Building',
        projectType: 'Hotel / Booking Website',
        features: [
          'Room listings and photos',
          'Availability calendar',
          'Online reservations',
          'Booking management',
        ],
        bestFor: 'Hotels, resorts and serviced apartments.',
      },
      {
        id: 'appointment-booking',
        name: 'Appointment booking',
        description:
          'Let clients book appointments online for salons, clinics, spas, barbers, consultants and tutors.',
        icon: 'Clock',
        projectType: 'Hotel / Booking Website',
        features: [
          'Service and staff selection',
          'Available time slots',
          'Booking confirmations',
        ],
        bestFor: 'Salons, clinics, spas and consultants.',
      },
      {
        id: 'rental-systems',
        name: 'Rental systems',
        description:
          'Rent cars, motorbikes, equipment, venues or gowns with a calendar, availability and deposits.',
        icon: 'MapPin',
        projectType: 'Hotel / Booking Website',
        features: [
          'Item catalogue with calendar',
          'Availability and dates',
          'Deposit and booking flow',
        ],
        bestFor: 'Rental businesses of any size.',
      },
      {
        id: 'tour-travel-booking',
        name: 'Tour and travel booking',
        description:
          'Present travel packages and itineraries, and let travellers enquire or book their trip.',
        icon: 'Globe',
        projectType: 'Hotel / Booking Website',
        features: [
          'Tour packages and itineraries',
          'Destination photos',
          'Booking or enquiry form',
        ],
        bestFor: 'Tour operators and travel agents.',
      },
      {
        id: 'court-space-reservation',
        name: 'Court or space reservation',
        description:
          'Reserve sports courts, studios or coworking spaces by the hour with a simple calendar.',
        icon: 'Clock',
        projectType: 'Hotel / Booking Website',
        features: [
          'Space or court listings',
          'Hourly availability calendar',
          'Reservation confirmation',
        ],
        bestFor: 'Sports venues, studios and coworking spaces.',
      },
    ],
  },
  {
    id: 'food',
    name: 'Food and hospitality',
    shortName: 'Food',
    tone: 'coral',
    icon: 'UtensilsCrossed',
    count: 4,
    outcome: 'A menu that sells itself, with ordering or reservations built in.',
    items: [
      {
        id: 'restaurant-cafe',
        name: 'Restaurant or cafe website',
        description:
          'Present your menu, location and opening hours, and let guests reserve a table.',
        icon: 'Building',
        projectType: 'Restaurant Website',
        features: [
          'Menu presentation',
          'Location and opening hours',
          'Table reservations',
        ],
        bestFor: 'Restaurants, cafes and bistros.',
      },
      {
        id: 'online-food-ordering',
        name: 'Online food ordering',
        description:
          'Customers browse your menu, order for delivery or pickup and track their order.',
        icon: 'ShoppingBag',
        projectType: 'Restaurant Website',
        features: [
          'Online menu and cart',
          'Delivery or pickup options',
          'Order tracking',
        ],
        bestFor: 'Restaurants and takeaways.',
      },
      {
        id: 'qr-menu-table-ordering',
        name: 'QR menu and table ordering',
        description:
          'Guests scan a QR code at the table, order from their phone and the kitchen receives the order.',
        icon: 'Camera',
        projectType: 'Restaurant Website',
        features: [
          'QR menu access',
          'Table ordering',
          'Kitchen display or tickets',
        ],
        bestFor: 'Cafes and restaurants with table service.',
      },
      {
        id: 'catering-inquiry-quote',
        name: 'Catering inquiry and quote system',
        description:
          'Clients request a catering quote for their event, and you respond with pricing and availability.',
        icon: 'Mail',
        projectType: 'Restaurant Website',
        features: [
          'Catering enquiry form',
          'Quote generation',
          'Event date and guest details',
        ],
        bestFor: 'Caterers and event food services.',
      },
    ],
  },
  {
    id: 'operations',
    name: 'Business operations',
    shortName: 'Operations',
    tone: 'ink',
    icon: 'LayoutDashboard',
    count: 8,
    outcome: 'One system for stock, sales, staff and invoices, so your team stops chasing information.',
    items: [
      {
        id: 'inventory-management',
        name: 'Inventory management (IMS)',
        description:
          'Track stock levels, manage suppliers and get low-stock alerts before you run out.',
        icon: 'Camera',
        projectType: 'Custom Management System',
        features: [
          'Stock tracking and levels',
          'Supplier records',
          'Low-stock alerts',
        ],
        bestFor: 'Shops and warehouses holding stock.',
      },
      {
        id: 'pos',
        name: 'POS (point of sale)',
        description:
          'Process sales, print receipts and see daily reports from one screen.',
        icon: 'CreditCard',
        projectType: 'Custom Management System',
        features: [
          'Sales and checkout',
          'Receipt printing',
          'Daily sales reports',
        ],
        bestFor: 'Retail stores and cafes.',
      },
      {
        id: 'employee-attendance',
        name: 'Employee and attendance system',
        description:
          'Staff clock in and out, view schedules and request leave in one place.',
        icon: 'Clock',
        projectType: 'Custom Management System',
        features: [
          'Time in and time out',
          'Staff schedules',
          'Leave requests',
        ],
        bestFor: 'Teams with shift workers.',
      },
      {
        id: 'payroll-hr',
        name: 'Payroll and HR system',
        description:
          'Manage employee records, payroll and HR administration in one secure system.',
        icon: 'Users',
        projectType: 'Custom Management System',
        features: [
          'Employee records',
          'Payroll administration',
          'HR documents and policies',
        ],
        bestFor: 'Growing teams with HR needs.',
      },
      {
        id: 'crm',
        name: 'CRM or customer database',
        description:
          'Keep track of leads, follow-ups and customer history so no opportunity slips through.',
        icon: 'UserCircle',
        projectType: 'Custom Management System',
        features: [
          'Lead and contact records',
          'Follow-up tracking',
          'Customer interaction history',
        ],
        bestFor: 'Service businesses managing clients.',
      },
      {
        id: 'invoicing-billing',
        name: 'Invoicing and billing system',
        description:
          'Create quotes and invoices, track payments and stay on top of what is owed.',
        icon: 'CreditCard',
        projectType: 'Custom Management System',
        features: [
          'Quotes and invoices',
          'Payment tracking',
          'Overdue reminders',
        ],
        bestFor: 'Freelancers and service businesses.',
      },
      {
        id: 'document-management',
        name: 'Document management',
        description:
          'Upload, organise and approve documents with version control and access permissions.',
        icon: 'Printer',
        projectType: 'Custom Management System',
        features: [
          'Document upload and folders',
          'Approval workflow',
          'Access permissions',
        ],
        bestFor: 'Offices handling paperwork.',
      },
      {
        id: 'reports-dashboards',
        name: 'Reports and analytics dashboards',
        description:
          'Visualise your business data, track metrics and make better decisions from one dashboard.',
        icon: 'ShieldCheck',
        projectType: 'Custom Management System',
        features: [
          'Data charts and metrics',
          'Performance dashboards',
          'Custom reports',
        ],
        bestFor: 'Teams that run on data.',
      },
    ],
  },
  {
    id: 'services',
    name: 'Professional services',
    shortName: 'Services',
    tone: 'cobalt',
    icon: 'BriefcaseBusiness',
    count: 8,
    outcome: 'A credible, professional site that shows what you do and makes it easy to get in touch.',
    items: [
      {
        id: 'company-website',
        name: 'Company or business website',
        description:
          'A polished site that presents your services, about page and contact details.',
        icon: 'Building',
        projectType: 'Business Website',
        features: [
          'Services and about pages',
          'Contact form and business info',
          'Mobile-friendly design',
        ],
        bestFor: 'Any service business.',
      },
      {
        id: 'portfolio-website',
        name: 'Portfolio website',
        description:
          'Showcase your work for photographers, designers, architects and makers.',
        icon: 'Image',
        projectType: 'Business Website',
        features: [
          'Project gallery',
          'Work categories and filters',
          'Contact enquiries',
        ],
        bestFor: 'Photographers, designers and makers.',
      },
      {
        id: 'real-estate-website',
        name: 'Real estate website',
        description:
          'List properties with filters and let buyers or renters send enquiries.',
        icon: 'MapPin',
        projectType: 'Property & Listing Site',
        features: [
          'Property listings',
          'Search and filters',
          'Owner or agent enquiry form',
        ],
        bestFor: 'Real estate agents and landlords.',
      },
      {
        id: 'construction-website',
        name: 'Construction company website',
        description:
          'Show completed projects, a photo gallery and quote requests for new builds.',
        icon: 'Building',
        projectType: 'Business Website',
        features: [
          'Project gallery',
          'Before and after photos',
          'Quote request form',
        ],
        bestFor: 'Builders and contractors.',
      },
      {
        id: 'clinic-dental',
        name: 'Clinic or dental website',
        description:
          'Present services and doctors, and let patients book appointments online.',
        icon: 'ShieldCheck',
        projectType: 'Business Website',
        features: [
          'Services and doctor profiles',
          'Appointment booking',
          'Location and contact',
        ],
        bestFor: 'Clinics and dental practices.',
      },
      {
        id: 'law-accounting-consulting',
        name: 'Law, accounting, or consulting website',
        description:
          'Build credibility with services, expertise and consultation requests.',
        icon: 'BriefcaseBusiness',
        projectType: 'Business Website',
        features: [
          'Services and credentials',
          'Consultation request form',
          'Trust-focused design',
        ],
        bestFor: 'Lawyers, accountants and consultants.',
      },
      {
        id: 'church-organization',
        name: 'Church or organization website',
        description:
          'Share events, sermons, donations and announcements with your community.',
        icon: 'Users',
        projectType: 'Business Website',
        features: [
          'Events and announcements',
          'Sermons or media',
          'Donation page',
        ],
        bestFor: 'Churches and non-profit groups.',
      },
      {
        id: 'non-profit-donation',
        name: 'Non-profit and donation website',
        description:
          'Present your cause, add a donate button and share updates with supporters.',
        icon: 'ShieldCheck',
        projectType: 'Business Website',
        features: [
          'Cause and mission page',
          'Donation button',
          'News and updates',
        ],
        bestFor: 'Charities and non-profits.',
      },
    ],
  },
  {
    id: 'education',
    name: 'Education and community',
    shortName: 'Education',
    tone: 'pop',
    icon: 'BookOpen',
    count: 4,
    outcome: 'A place for students, members or the community to learn, join and stay informed.',
    items: [
      {
        id: 'school-portal',
        name: 'School website with student portal',
        description:
          'Announcements, grades and enrolment for students and parents in one secure portal.',
        icon: 'GraduationCap',
        projectType: 'Other',
        features: [
          'Student and parent portal',
          'Announcements and grades',
          'Enrolment forms',
        ],
        bestFor: 'Schools and training centres.',
      },
      {
        id: 'online-course-platform',
        name: 'Online course platform (LMS)',
        description:
          'Lessons, quizzes and certificates delivered through a learning management system.',
        icon: 'BookOpen',
        projectType: 'Custom Management System',
        features: [
          'Course lessons and modules',
          'Quizzes and assessments',
          'Certificates of completion',
        ],
        bestFor: 'Educators and course creators.',
      },
      {
        id: 'membership-alumni-portal',
        name: 'Membership or alumni portal',
        description:
          'Member or alumni profiles, a directory and exclusive content for your community.',
        icon: 'UserCircle',
        projectType: 'Other',
        features: [
          'Member profiles and directory',
          'Exclusive member content',
          'Community updates',
        ],
        bestFor: 'Alumni networks and membership groups.',
      },
      {
        id: 'community-directory',
        name: 'Community directory or listings',
        description:
          'A local directory of businesses, jobs or classifieds for your community.',
        icon: 'MapPin',
        projectType: 'Other',
        features: [
          'Business and job listings',
          'Search and categories',
          'Contact or apply buttons',
        ],
        bestFor: 'Local communities and towns.',
      },
    ],
  },
  {
    id: 'custom',
    name: 'Customer tools and custom',
    shortName: 'Custom',
    tone: 'paper2',
    icon: 'UserCircle',
    count: 10,
    outcome: 'A tailored tool — portals, calculators, loyalty programs or your own web app.',
    items: [
      {
        id: 'customer-portal',
        name: 'Customer portal',
        description:
          'A secure area where customers can see orders, requests, invoices and support tickets.',
        icon: 'UserCircle',
        projectType: 'Custom Management System',
        features: [
          'Customer login and dashboard',
          'Orders and invoices',
          'Support tickets',
        ],
        bestFor: 'Businesses with repeat customers.',
      },
      {
        id: 'queue-ticket-system',
        name: 'Queue or ticket system',
        description:
          'Customers take a number and track their status online or on screen.',
        icon: 'CreditCard',
        projectType: 'Custom Management System',
        features: [
          'Digital queue numbers',
          'Status tracking',
          'Staff display screen',
        ],
        bestFor: 'Clinics, shops and service counters.',
      },
      {
        id: 'loyalty-rewards',
        name: 'Loyalty and rewards system',
        description:
          'Points, vouchers and QR scanning to reward returning customers.',
        icon: 'Star',
        projectType: 'Custom Management System',
        features: [
          'Points and rewards',
          'Voucher codes',
          'QR scanning at checkout',
        ],
        bestFor: 'Shops and cafes with regulars.',
      },
      {
        id: 'quote-price-calculator',
        name: 'Quote or price calculator',
        description:
          'Visitors get an instant quote or price estimate based on their own inputs.',
        icon: 'CreditCard',
        projectType: 'Custom Management System',
        features: [
          'Input-based calculations',
          'Instant quote results',
          'Enquiry follow-up',
        ],
        bestFor: 'Builders, cleaners and service quotes.',
      },
      {
        id: 'survey-feedback-forms',
        name: 'Survey, feedback, or form systems',
        description:
          'Custom surveys, feedback collection and online forms with responses in one place.',
        icon: 'Mail',
        projectType: 'Other',
        features: [
          'Custom forms and surveys',
          'Response collection',
          'Results dashboard',
        ],
        bestFor: 'Research and customer feedback.',
      },
      {
        id: 'digital-business-card',
        name: 'Link-in-bio or digital business card',
        description:
          'One page with all of a person’s contacts and links, easy to share by QR.',
        icon: 'UserCircle',
        projectType: 'Other',
        features: [
          'One-page link hub',
          'Social and contact links',
          'QR code sharing',
        ],
        bestFor: 'Freelancers and creators.',
      },
      {
        id: 'landing-page',
        name: 'Landing page',
        description:
          'One focused page built to sell a single product or collect leads.',
        icon: 'Rocket',
        projectType: 'Business Website',
        features: [
          'Single-focus page',
          'Call to action and form',
          'Fast-loading design',
        ],
        bestFor: 'Product launches and campaigns.',
      },
      {
        id: 'custom-web-app',
        name: 'Custom web app',
        description:
          'Your own product with user accounts, dashboards and features built around your idea.',
        icon: 'LayoutDashboard',
        projectType: 'Custom Management System',
        features: [
          'User accounts and login',
          'Custom dashboards',
          'Product-specific features',
        ],
        bestFor: 'Startups and SaaS ideas.',
      },
      {
        id: 'automation-system',
        name: 'Automation system',
        description:
          'Auto-emails, notifications and reports that run without manual work.',
        icon: 'Rocket',
        projectType: 'Custom Management System',
        features: [
          'Automated emails and alerts',
          'Scheduled reports',
          'Workflow triggers',
        ],
        bestFor: 'Teams wanting to save admin time.',
      },
      {
        id: 'chatbot-ai-assistant',
        name: 'Chatbot or AI assistant',
        description:
          'An assistant on your site that answers customer questions 24/7.',
        icon: 'Mic',
        projectType: 'Custom Management System',
        features: [
          'Automated answers',
          'Escalation to a person',
          'Training on your info',
        ],
        bestFor: 'Businesses with frequent questions.',
      },
    ],
  },
]