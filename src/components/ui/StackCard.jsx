// src/components/ui/StackCard.jsx
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// How small a card gets once the next card has fully covered it.
const END_SCALE = 0.93;
// How dark a card gets once covered (0 to 1).
const END_DIM = 0.55;
// Light spring that softens fast wheel/trackpad flicks.
const SMOOTH = { stiffness: 140, damping: 28, mass: 0.3, restDelta: 0.001 };
// Space kept below a card so its bottom edge is always visible.
const BOTTOM_GAP = 40;
// Cards never get shorter than this.
const MIN_CARD_HEIGHT = 520;
function StackCardItem({
  card,
  index,
  total,
  topOffset,
  cardHeight,
  cardTop,
  fadeDuration,
  scrollY,
  isStacking,
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimateStack = isStacking && !prefersReducedMotion;
  const hasNext = index < total - 1;

  // The next card starts sliding over this one at "coverStart",
  // and fully covers it at "coverEnd". The shrink follows that whole slide.
  const coverStart = cardTop - topOffset;
  const coverEnd = cardTop + cardHeight - topOffset;
  const hideAt = coverEnd + fadeDuration;

  const scale = useTransform(
    scrollY,
    [coverStart, coverEnd],
    hasNext ? [1, END_SCALE] : [1, 1],
  );
  const dim = useTransform(
    scrollY,
    [coverStart, coverEnd],
    hasNext ? [0, END_DIM] : [0, 0],
  );

  const [hidden, setHidden] = useState(
    () => shouldAnimateStack && hasNext && scrollY.get() >= hideAt,
  );

  useMotionValueEvent(scrollY, "change", (value) => {
    const shouldHide = shouldAnimateStack && hasNext && value >= hideAt;
    setHidden((current) => (current === shouldHide ? current : shouldHide));
  });

  const style = {
    "--stack-card-height": `${cardHeight}px`,
    ...(isStacking && {
      top: `${topOffset}px`,
      zIndex: `calc(var(--z-stacked-card) + ${index})`,
      transformOrigin: "top center",
      ...(shouldAnimateStack && {
        scale,
        visibility: hidden ? "hidden" : "visible",
      }),
    }),
  };

  return (
    <motion.article
      initial={
        isStacking || prefersReducedMotion
          ? false
          : { opacity: 0, y: 48, scale: 0.97 }
      }
      whileInView={
        isStacking || prefersReducedMotion
          ? undefined
          : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      className="stack-card sticky w-full overflow-hidden rounded-[14px] bg-transparent will-change-transform">
      {card.content}

      {/* Darkens the card as others stack on top, so depth reads clearly */}
      {shouldAnimateStack && hasNext ? (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[14px] bg-black"
          style={{ opacity: dim }}
        />
      ) : null}
    </motion.article>
  );
}

export default function StackCard({
  cards,
  topOffset = 96,
  cardHeight = 480,
  fadeDuration = 40,
  mobileStack = false,
  mobileTopOffset = topOffset,
  mobileCardHeight = cardHeight,
  mobileAutoHeight = false,
}) {
  const ref = useRef(null);
  const [viewportH, setViewportH] = useState(() => window.innerHeight);

  useEffect(() => {
    const update = () => setViewportH(window.innerHeight);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY: rawScrollY } = useScroll();
  const smoothScrollY = useSpring(rawScrollY, SMOOTH);
  const scrollY = prefersReducedMotion ? rawScrollY : smoothScrollY;

  const [sectionTop, setSectionTop] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(
    () => window.matchMedia("(max-width: 1023px)").matches,
  );
  const [measuredMobileHeight, setMeasuredMobileHeight] =
    useState(mobileCardHeight);
  const mediaQuery = mobileStack ? "(min-width: 320px)" : "(min-width: 1024px)";
  const [isStacking, setIsStacking] = useState(
    () => window.matchMedia(mediaQuery).matches,
  );
  const activeTopOffset =
    mobileStack && isMobileViewport ? mobileTopOffset : topOffset;
  const fittedDesktopHeight = Math.max(
    MIN_CARD_HEIGHT,
    Math.min(cardHeight, viewportH - activeTopOffset - BOTTOM_GAP),
  );

  const activeCardHeight =
    mobileStack && isMobileViewport
      ? mobileAutoHeight
        ? measuredMobileHeight
        : mobileCardHeight
      : fittedDesktopHeight;
  useEffect(() => {
    const stackQuery = window.matchMedia(mediaQuery);
    const updateStacking = () => setIsStacking(stackQuery.matches);
    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => setIsMobileViewport(mobileQuery.matches);

    stackQuery.addEventListener("change", updateStacking);
    mobileQuery.addEventListener("change", updateViewport);
    return () => {
      stackQuery.removeEventListener("change", updateStacking);
      mobileQuery.removeEventListener("change", updateViewport);
    };
  }, [mediaQuery]);

  useLayoutEffect(() => {
    if (!ref.current) return undefined;

    const measure = () => {
      setSectionTop(ref.current.getBoundingClientRect().top + window.scrollY);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(ref.current);
    document.fonts.ready.then(measure);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useLayoutEffect(() => {
    if (!mobileStack || !mobileAutoHeight || !ref.current) return undefined;

    const measureCardHeight = () => {
      const cardHeights = [
        ...ref.current.querySelectorAll(":scope > .stack-card"),
      ].map((card) => card.scrollHeight);
      const nextHeight = Math.ceil(Math.max(mobileCardHeight, ...cardHeights));
      setMeasuredMobileHeight((current) =>
        current === nextHeight ? current : nextHeight,
      );
    };

    measureCardHeight();
    const observer = new ResizeObserver(measureCardHeight);
    ref.current
      .querySelectorAll(":scope > .stack-card > *")
      .forEach((content) => observer.observe(content));
    window.addEventListener("resize", measureCardHeight);
    document.fonts.ready.then(measureCardHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureCardHeight);
    };
  }, [mobileStack, mobileAutoHeight, mobileCardHeight]);

  return (
    <div
      ref={ref}
      className={`stack-card-container relative${mobileStack ? " mobile-stack-enabled" : ""}`}
      style={{ "--stack-card-height": `${activeCardHeight}px` }}>
      {cards.map((card, index) => (
        <StackCardItem
          key={`${card.id || index}-${isStacking}-${sectionTop + index * activeCardHeight}`}
          card={card}
          index={index}
          total={cards.length}
          topOffset={activeTopOffset}
          cardHeight={activeCardHeight}
          cardTop={sectionTop + index * activeCardHeight}
          fadeDuration={fadeDuration}
          scrollY={scrollY}
          isStacking={isStacking}
        />
      ))}
      <div
        aria-hidden="true"
        style={{ height: isStacking ? `${activeCardHeight * 0.5}px` : "0px" }}
      />
    </div>
  );
}
