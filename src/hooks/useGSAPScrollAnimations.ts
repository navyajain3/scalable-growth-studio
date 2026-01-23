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

// Scroll Reveal - fade in and slide up elements as they enter viewport
export const useScrollReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal section headers
      gsap.utils.toArray<HTMLElement>(".reveal-header").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Reveal cards with stagger effect
      gsap.utils.toArray<HTMLElement>(".reveal-cards").forEach((container) => {
        const cards = container.querySelectorAll(".reveal-card");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Reveal individual elements
      gsap.utils.toArray<HTMLElement>(".reveal-item").forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Reveal from left
      gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
        gsap.fromTo(
          el,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Reveal from right
      gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
        gsap.fromTo(
          el,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Reveal with scale
      gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
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
          y: -45,
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

// Who We Help - Entire grid parallax (both columns move together to stay aligned)
export const useWhoWeHelpParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Apply parallax to the entire section content grid
      gsap.to(".who-we-help-grid", {
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: ".who-we-help-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);
};

// Why Us - Uniform card parallax (no stagger to keep aligned)
export const useWhyUsParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Apply uniform parallax to the entire cards container
      gsap.to(".reveal-cards", {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: "#why-us",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
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
        y: -25,
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

// Insights - Article cards parallax (uniform movement)
export const useInsightsParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Apply uniform parallax to the entire cards container
      gsap.to(".reveal-cards", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".reveal-cards",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
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
        y: -18,
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
        { y: 40 },
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
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(".contact-form", {
        y: -20,
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
