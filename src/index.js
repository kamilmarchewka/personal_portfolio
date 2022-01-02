import "./main.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// opening and closing nav
const navContent = document.querySelector(".navigation__content");
document.querySelector(".toggler").addEventListener("click", function () {
  if (this.getAttribute("aria-expanded") === "false") {
    this.setAttribute("aria-expanded", "true");
    navContent.classList.add("nav-opening");
  } else {
    this.setAttribute("aria-expanded", "false");
    navContent.classList.add("nav-closing");
    setTimeout(() => {
      navContent.classList.remove("nav-opening");
      navContent.classList.remove("nav-closing");
    }, 260);
  }
});

// section idicator
function sectionIndicatorAnimation() {
  const indicators = document.querySelectorAll(
    ".section-indicator__placeholder"
  );
  const sections = [
    document.querySelector(".main-header"),
    document.querySelector(".projects h2"),
    document.querySelector(".about-me h2"),
    document.querySelector(".contact h2"),
  ];

  let currentSection = sections[0].getAttribute("data-section");

  const resetIndicators = (idicat) => {
    idicat.forEach((i) => {
      i.classList.remove("isActive");
    });
  };

  document.addEventListener("scroll", () => {
    // checking which section we are currently looking on
    sections.forEach((section) => {
      if (
        section.getBoundingClientRect().top <=
        (innerWidth / 2.3 ||
          document.clientWidth / 2.3 ||
          body.clientWidth / 2.3)
      ) {
        currentSection = section.getAttribute("data-section");
      }
    });

    resetIndicators(indicators);
    indicators[currentSection].classList.add("isActive");
  });
}
sectionIndicatorAnimation();

//landing page animations
function lpAnimation() {
  // getting vp width
  if ((innerWidth || document.clientWidth || body.clientWidth) < 765) {
    // animation for phones
    const lpTimeline = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
      delay: 1,
    });
    // img slide in
    lpTimeline.from(".hero-img__box", {
      yPercent: 101,
      duration: 1.7,
    });
    // headlines slide in
    lpTimeline.fromTo(
      ".main-header h1 span",
      {
        yPercent: 101,
      },
      { yPercent: 0, stagger: 0.15 },
      "<30%"
    );
    // nav  slide in
    lpTimeline.from(
      ".navigation",
      {
        yPercent: -101,
        duration: 1,
      },
      "<60%"
    );
    // date fade in
    lpTimeline.from(".hero-img .date", {
      x: 10,
      autoAlpha: 0,
      duration: 0.1,
    });
  } else {
    // animation for desktops
    const lpTimeline = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
      delay: 1,
    });
    // img fade in
    lpTimeline.from(".hero-img__box", {
      xPercent: -101,
      duration: 1.7,
    });
    lpTimeline.from(
      ".hero-img",
      {
        xPercent: -50,
        duration: 1.7,
      },
      "<"
    );

    // headlines slide in
    lpTimeline.fromTo(
      ".main-header h1 span",
      {
        xPercent: 101,
      },
      { xPercent: 0, duration: 1, stagger: 0.15 },
      "<10%"
    );

    // socials fade in
    lpTimeline.from(
      ".social",
      {
        yPercent: 60,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "back.out(2)",
      },
      "<20%"
    );
    // navlinks fade in
    lpTimeline.from(
      ".nav-link",
      {
        y: 5,
        autoAlpha: 0,
        stagger: 0.1,
      },
      "<60%"
    );
    // date fade in
    lpTimeline.from(".hero-img .date", { autoAlpha: 0 }, "<70%");
    // logo slide in
    lpTimeline.from(".logo", { yPercent: -101, duration: 1 }, "<50%");
    // quotation fade in
    lpTimeline.from(".quotation", {
      autoAlpha: 0,
      duration: 2.5,
    });
  }
}
lpAnimation();

// projects section animation
function projectsAnimation() {
  const cards = document.querySelectorAll(".project-card");

  ScrollTrigger.matchMedia({
    // small
    "(max-width: 764px)": function () {
      // setup animations and ScrollTriggers for screens 960px wide or greater...
      // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

      let cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: card,
          },
        });
      });

      // cards.forEach((card) => {
      //   const img = card.querySelector(".project-card__img-box");
      //   const headline = card.querySelector("h3");
      //   const description = card.querySelector("p");
      //   const buttons = card.querySelectorAll("button");

      //   gsap.from(card, {
      //     y: 20,
      //     autoAlpha: 0,
      //     scrollTrigger: {
      //       trigger: card,
      //       markers: true,
      //     },
      //     clearProps: "all",
      //   });
      // });
    },

    // medium
    "(min-width: 600px) and (max-width: 959px)": function () {
      // The ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
    },
  });
}

projectsAnimation();
