// src/data/images.js
// Centralized, local-only asset configuration.
// Every image here is a real screenshot or recording of a project I built.
// No external URLs, no placeholders.

// ── ISLAKILA (e-commerce storefront) ─────────────────────────────
import islakila1 from "../assets/ISLAKILA/1.png";
import islakila2 from "../assets/ISLAKILA/2.png";
import islakila3 from "../assets/ISLAKILA/3.png";
import islakila4 from "../assets/ISLAKILA/4.png";
import islakila5 from "../assets/ISLAKILA/5.png";
import islakila6 from "../assets/ISLAKILA/6.png";
import islakila7 from "../assets/ISLAKILA/7.png";
import islakila8 from "../assets/ISLAKILA/8.png";

// ── NELEUS ───────────────────────────────────────────────────────
import neleusVideo from "../assets/NELEUS/n1.mp4";
import neleus2 from "../assets/NELEUS/n2.png";
import neleus3 from "../assets/NELEUS/n3.png";
import neleus4 from "../assets/NELEUS/n4.png";
import neleus5 from "../assets/NELEUS/n5.png";
import neleus6 from "../assets/NELEUS/n6.png";
import neleus7 from "../assets/NELEUS/n7.png";
import neleus8 from "../assets/NELEUS/n8.png";
import neleus9 from "../assets/NELEUS/n9.png";
import neleus10 from "../assets/NELEUS/n10.png";

// ── PATAO POCKET PATIO (restaurant) ──────────────────────────────
import pataopatio1 from "../assets/PATAOPATIO/p1.png";
import pataopatio2 from "../assets/PATAOPATIO/p2.png";
import pataopatio3 from "../assets/PATAOPATIO/p3.mp4";
import pataopatio4 from "../assets/PATAOPATIO/p4.png";
import pataopatio5 from "../assets/PATAOPATIO/p5.png";
import pataopatio6 from "../assets/PATAOPATIO/p6.png";

// ── PICKLEBALL ───────────────────────────────────────────────────
import pickleballVideo from "../assets/PICKLEBALL/pb1.mp4";
import pickleball2 from "../assets/PICKLEBALL/pb2.png";
import pickleball3 from "../assets/PICKLEBALL/pb3.png";
import pickleball4 from "../assets/PICKLEBALL/pb4.png";
import pickleball5 from "../assets/PICKLEBALL/pb5.png";
import pickleball6 from "../assets/PICKLEBALL/pb6.png";
import pickleball7 from "../assets/PICKLEBALL/pb7.png";

// ── PLAS ENTERPRISE IMS (management system) ──────────────────────
import plasImsVideo from "../assets/PLAS-IMS/pl1.mp4";
import plasIms2 from "../assets/PLAS-IMS/pl2.png";
import plasIms3 from "../assets/PLAS-IMS/pl3.png";
import plasIms4 from "../assets/PLAS-IMS/pl4.png";
import plasIms5 from "../assets/PLAS-IMS/pl5.png";
import plasIms6 from "../assets/PLAS-IMS/pl6.png";
import plasIms7 from "../assets/PLAS-IMS/pl7.png";
import plasIms8 from "../assets/PLAS-IMS/pl8.png";
import plasIms9 from "../assets/PLAS-IMS/pl9.png";
import plasIms10 from "../assets/PLAS-IMS/pl10.png";
import plasIms11 from "../assets/PLAS-IMS/pl11.png";
import plasIms12 from "../assets/PLAS-IMS/pl12.png";
import plasIms13 from "../assets/PLAS-IMS/pl13.png";
import plasIms14 from "../assets/PLAS-IMS/pl14.png";
import plasIms15 from "../assets/PLAS-IMS/pl15.png";
import plasIms16 from "../assets/PLAS-IMS/pl16.png";
import plasIms17 from "../assets/PLAS-IMS/pl17.png";

import plasIms19 from "../assets/PLAS-IMS/pl19.png";

// ── STAYKILA (booking platform) ──────────────────────────────────
import staykilaVideo from "../assets/STAYKILA/s1.mp4";
import staykila2 from "../assets/STAYKILA/s2.png";
import staykila3 from "../assets/STAYKILA/s3.png";
import staykila4 from "../assets/STAYKILA/s4.png";
import staykila5 from "../assets/STAYKILA/s5.png";
import staykila6 from "../assets/STAYKILA/s6.png";
import staykila7 from "../assets/STAYKILA/s7.png";
import staykila8 from "../assets/STAYKILA/s8.png";
import staykila9 from "../assets/STAYKILA/s9.png";
import staykila10 from "../assets/STAYKILA/s10.png";
import staykila11 from "../assets/STAYKILA/s11.png";
import staykila12 from "../assets/STAYKILA/s12.png";
import staykila13 from "../assets/STAYKILA/s13.png";
import staykila14 from "../assets/STAYKILA/s14.png";
import staykila15 from "../assets/STAYKILA/s15.png";

/**
 * Real project media, organized by project slug.
 * `cover` is the primary screenshot used for cards and previews.
 * `video` (when present) is a screen recording of the project in use.
 * `gallery` contains every available screenshot for that project.
 */
export const projectImages = {
  islakila: {
    cover: islakila1,
    video: null,
    gallery: [
      islakila1,
      islakila2,
      islakila3,
      islakila4,
      islakila5,
      islakila6,
      islakila7,
      islakila8,
    ],
  },
  neleus: {
    cover: neleus2,
    video: neleusVideo,
    gallery: [
      neleus2,
      neleus3,
      neleus4,
      neleus5,
      neleus6,
      neleus7,
      neleus8,
      neleus9,
      neleus10,
    ],
  },
  pataopatio: {
    cover: pataopatio1,
    video: pataopatio3,
    gallery: [
      pataopatio1,
      pataopatio2,
      pataopatio3,
      pataopatio4,
      pataopatio5,
      pataopatio6,
    ],
  },
  pickleball: {
    cover: pickleball2,
    video: pickleballVideo,
    gallery: [
      pickleball2,
      pickleball3,
      pickleball4,
      pickleball5,
      pickleball6,
      pickleball7,
    ],
  },
  plasims: {
    cover: plasIms2,
    video: plasImsVideo,
    gallery: [
      plasIms2,
      plasIms3,
      plasIms4,
      plasIms5,
      plasIms6,
      plasIms7,
      plasIms8,
      plasIms9,
      plasIms10,
      plasIms11,
      plasIms12,
      plasIms13,
      plasIms14,
      plasIms15,
      plasIms16,
      plasIms17,
      plasIms19,
    ],
  },
  staykila: {
    cover: staykila2,
    video: staykilaVideo,
    gallery: [
      staykila2,
      staykila3,
      staykila4,
      staykila5,
      staykila6,
      staykila7,
      staykila8,
      staykila9,
      staykila10,
      staykila11,
      staykila12,
      staykila13,
      staykila14,
      staykila15,
    ],
  },
};

/**
 * Convenience helper: project media by project slug.
 * Used by Projects, ProjectDetail, and the Hero Showcase.
 */
export const getProjectMedia = (slug) => projectImages[slug] || null;

// Backwards-compatible `images` export for any section that imports it.
// Each entry now points to a real project screenshot instead of a stock photo.
export const images = {
  storefront: {
    src: projectImages.islakila.cover,
    alt: "Islakila e-commerce storefront homepage",
    focalPoint: "50% 50%",
    fallbackColor: "#DDE3FF",
  },
  hotel: {
    src: projectImages.staykila.cover,
    alt: "StayKila booking platform room listing page",
    focalPoint: "50% 50%",
    fallbackColor: "#FFE58A",
  },
  dashboard: {
    src: projectImages.plasims.cover,
    alt: "Plas Enterprise IMS inventory dashboard",
    focalPoint: "50% 50%",
    fallbackColor: "#BDEFD8",
  },
  cafe: {
    src: projectImages.pataopatio.cover,
    alt: "Patao Pocket Patio restaurant website menu section",
    focalPoint: "50% 50%",
    fallbackColor: "#FFD6C7",
  },
  realEstate: {
    src: projectImages.staykila.gallery[1],
    alt: "StayKila property listing page",
    focalPoint: "50% 50%",
    fallbackColor: "#C9B8FF",
  },
  office: {
    src: projectImages.neleus.cover,
    alt: "Neleus web application dashboard",
    focalPoint: "50% 50%",
    fallbackColor: "#E8D5FF",
  },
  booking: {
    src: projectImages.staykila.gallery[2],
    alt: "StayKila booking flow with calendar selection",
    focalPoint: "50% 50%",
    fallbackColor: "#DDE3FF",
  },
  portfolio: {
    src: projectImages.pickleball.cover,
    alt: "Pickleball club website homepage",
    focalPoint: "50% 50%",
    fallbackColor: "#C9B8FF",
  },
  property: {
    src: projectImages.staykila.gallery[3],
    alt: "StayKila property details with photos",
    focalPoint: "50% 50%",
    fallbackColor: "#BDEFD8",
  },
  portal: {
    src: projectImages.plasims.gallery[2],
    alt: "Plas Enterprise IMS client portal view",
    focalPoint: "50% 50%",
    fallbackColor: "#FFE58A",
  },
  boutique: {
    src: projectImages.islakila.gallery[1],
    alt: "Islakila product collection page",
    focalPoint: "50% 50%",
    fallbackColor: "#F5E2C8",
  },

  // ─────────────────────────────────────────────
  // MARQUEE ARTISTIC IMAGES (previously stock photos)
  // Each is now a real project screenshot.
  // ─────────────────────────────────────────────
  artStores: {
    src: projectImages.islakila.gallery[2],
    alt: "Islakila storefront product detail page",
    focalPoint: "50% 50%",
    fallbackColor: "#DDE3FF",
  },
  artBooking: {
    src: projectImages.staykila.gallery[4],
    alt: "StayKila booking confirmation step",
    focalPoint: "50% 50%",
    fallbackColor: "#E8D5FF",
  },
  artDashboard: {
    src: projectImages.plasims.gallery[3],
    alt: "Plas Enterprise IMS analytics dashboard",
    focalPoint: "50% 50%",
    fallbackColor: "#BDEFD8",
  },
  artMenus: {
    src: projectImages.pataopatio.gallery[1],
    alt: "Patao Pocket Patio digital menu page",
    focalPoint: "50% 50%",
    fallbackColor: "#FFD6C7",
  },
  artProperty: {
    src: projectImages.staykila.gallery[5],
    alt: "StayKila property gallery view",
    focalPoint: "50% 50%",
    fallbackColor: "#C9B8FF",
  },
  artPortfolio: {
    src: projectImages.neleus.gallery[2],
    alt: "Neleus application feature screen",
    focalPoint: "50% 50%",
    fallbackColor: "#C9B8FF",
  },
  artPortal: {
    src: projectImages.plasims.gallery[4],
    alt: "Plas Enterprise IMS records portal",
    focalPoint: "50% 50%",
    fallbackColor: "#FFE58A",
  },
};
