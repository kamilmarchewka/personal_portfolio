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
