import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateText = () => {
  document.body.style.overflow = 'hidden';

  const animationDuration = 2;

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
      scale: 2
    },
    {
      opacity: 1,
      duration: 2,
      delay: 2,
      scale: 1,
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

/*
  const portfolioItems = gsap.utils.toArray(".portfolio-item");

  portfolioItems.forEach(item => {
    const title = item.querySelector('h3');
  
    gsap.fromTo(item,
      {
        opacity: 0,
      },
      { 
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          once: false,
        }
      }
    );
  });
*/
};
