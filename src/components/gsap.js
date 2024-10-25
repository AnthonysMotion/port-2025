import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateText = () => {
  document.body.style.overflow = 'hidden';

  const animationDuration = 2;

  const spansPromo = document.querySelectorAll('.promo-letter');

  spansPromo.forEach(span => {
    gsap.fromTo(span,
      { 
        opacity: 0, 
        x: -90,
        skewX: -20,
      },
      {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: span,
          start: "top 100%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          scrub: true
        }
      }
    );
  });

  const psoImages = document.querySelectorAll('.pso-img img');

  psoImages.forEach((img) => {
    gsap.fromTo(img,
      { 
        opacity: 0, 
        x: -120,
        rotateY: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        rotateY: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 100%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          scrub: true,
        }
      }
    );
  });

  gsap.fromTo(".hero h1 .letter, .hero h1 span",
    {
      y: 50,
      opacity: 0,
    },
    {
      duration: 0.6,
      y: 0,
      opacity: 1,
      stagger: 0.04,
      ease: "power3.out",
      delay: 0,
      onComplete: () => {
        document.body.style.overflow = '';
      }
    }
  );

  gsap.fromTo(".hero h1",
    {
      scale: 1.5
    },
    {
      scale: 1,
      delay: 2,
      duration: 1.5,
      ease: "power3.out",
    }
  )

  gsap.fromTo(".parallax-header-bg",
    {
      opacity: 0,
      scale: 2.5
    },
    {
      opacity: 1,
      duration: 5,
      delay: 2,
      scale: 1.1,
      ease: "power3.out"
    }
  )

  gsap.fromTo(".navbar img",
    {
      y: -50,
      opacity: 0,
    },
    {
      duration: animationDuration,
      y: 0,
      opacity: 1,
      stagger: 0.5,
      ease: "power3.out",
      delay: animationDuration,
    }
  );

  gsap.fromTo(".navbar-content .links a, .navbar-content .links span",
    {
      y: -50,
      opacity: 0,
    },
    {
      duration: animationDuration,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: animationDuration + 0.3,
    }
  );

  gsap.fromTo(".navbar a i",
    {
      y: -50,
      opacity: 0,
    },
    {
      duration: animationDuration,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: animationDuration + 0.6,
    }
  );

  gsap.fromTo(".accent-1",
    {
      y: 50,
      opacity: 0,
    },
    {
      duration: animationDuration,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: animationDuration + 1.5,
    }
  );

  gsap.fromTo(".accent-2",
    {
      y: 50,
      opacity: 0,
    },
    {
      duration: animationDuration,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: animationDuration + 1.2,
    }
  );

  gsap.fromTo(".accent-3",
    {
      y: 50,
      opacity: 0,
    },
    {
      duration: animationDuration,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: animationDuration + 0.9,
    }
  );
};
