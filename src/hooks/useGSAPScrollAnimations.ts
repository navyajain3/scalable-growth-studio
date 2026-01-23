import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAPScrollAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Refresh ScrollTrigger after all content loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { gsap, ScrollTrigger };
};

// Hero parallax - background glow moves slower
export const useHeroParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Background glow parallax
      gsap.to(".hero-glow", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Subtle text parallax (moves slightly slower than scroll)
      gsap.to(".hero-content", {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);
};

// Services parallax - images move at different rate than text
export const useServicesParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-image").forEach((image) => {
        gsap.to(image, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

// Process parallax - cards have subtle staggered depth
export const useProcessParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-image").forEach((image) => {
        gsap.to(image, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

// Section reveal animations - fade in elements as they scroll into view
export const useSectionReveals = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal section headers
      gsap.utils.toArray<HTMLElement>(".section-header").forEach((header) => {
        gsap.from(header, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

// Who We Help - Desktop image parallax
export const useWhoWeHelpParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Sticky image container parallax
      gsap.to(".who-we-help-visual", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".who-we-help-section",
          start: "top center",
          end: "bottom center",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);
};

// Why Us - Staggered card depth parallax
export const useWhyUsParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".why-us-card").forEach((card, index) => {
        // Alternate between -10px and -18px for organic depth
        const yOffset = index % 2 === 0 ? -10 : -18;
        gsap.to(card, {
          y: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

// Stats - Counter and testimonials depth
export const useStatsParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Stats row moves slower
      gsap.to(".stats-row", {
        y: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);
};

// Insights - Article cards parallax with column stagger
export const useInsightsParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".insight-card").forEach((card, index) => {
        // Stagger by column: left -12, center -18, right -14
        const column = index % 3;
        const yOffset = column === 0 ? -12 : column === 1 ? -18 : -14;
        gsap.to(card, {
          y: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

// FAQ - Subtle accordion depth
export const useFAQParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".faq-container", {
        y: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);
};

// Footer - Rise up effect
export const useFooterParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { y: 20 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top bottom",
            end: "top 70%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);
};

// Contact - Form and content parallax
export const useContactParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content moves at different rate than right form
      gsap.to(".contact-content", {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(".contact-form", {
        y: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    });

    return () => ctx.revert();
  }, []);
};

// Cleanup utility
export const cleanupScrollTriggers = () => {
  ScrollTrigger.killAll();
};
