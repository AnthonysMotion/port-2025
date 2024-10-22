import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateText = () => {
  gsap.fromTo(".hero h1 span", 
    {
      y: 50,
      opacity: 0,
    }, 
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.9
    }
  );

  gsap.fromTo(".navbar img", 
    {
      y: -50,
      opacity: 0,
    }, 
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.5,
      ease: "power3.out",
      delay: 0
    }
  );

  gsap.fromTo(".navbar-content .links a, .navbar-content .links span", 
    {
      y: -50,
      opacity: 0,
    }, 
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.3
    }
  );

  gsap.fromTo(".navbar a i", 
    {
      y: -50,
      opacity: 0,
    }, 
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.8
    }
  );

  gsap.fromTo(".accent-1", 
    {
      y: 50,
      opacity: 0,
    }, 
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 1.2
    }
  );

  gsap.fromTo(".accent-2", 
    {
      y: 50,
      opacity: 0,
    }, 
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 1.5
    }
  );

  gsap.fromTo(".accent-3", 
    {
      y: 50,
      opacity: 0,
    }, 
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 1.8
    }
  );
};