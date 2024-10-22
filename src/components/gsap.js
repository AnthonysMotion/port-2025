import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateText = () => {
  document.body.style.overflow = 'hidden';

  const animationDuration = 2;

  gsap.fromTo(".parallax-header-bg",
    {
        opacity: 0,
        scale: 2
    },
    {
        duration: 3,
        scale: 1,
        opacity: 1,
        delay: 2.8,
        ease: "power3.out",
    })

  // Animate h1 content first
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
      delay: 0.9,
      onComplete: () => {
        // Set overflow back to normal after the animation
        document.body.style.overflow = '';
      }
    }
  );

  // Animate h1 itself with scale effect
  gsap.fromTo(".hero h1", 
    {
      y: 50,
      opacity: 0,
      scale: 1.5
    }, 
    {
      duration: 0.9,
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scale: 1.5,
      onComplete: () => {
        gsap.to(".hero h1", {
          duration: 1.2,
          scale: 1,
          delay: 2,
          ease: "power4.out"
        });
      }
    }
  );


  const additionalDelay = 3;

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
      delay: additionalDelay,
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
      delay: additionalDelay + 0.3,
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
      delay: additionalDelay + 0.9,
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
      delay: additionalDelay + 1.8,
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
      delay: additionalDelay + 1.5,
    }
  );

  gsap.fromTo(".accent-3", 
    {
      y: 50,
      opacity: 0,
    }, 
    {
      duration: animationDuration + 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: additionalDelay + 1.2,
    }
  );
};
