import "./main.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init("user_zt1zjf6n7wcllS3fggzFs");

const introAnim = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "#intro #logo-k-letter",
    {
      yPercent: -70,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
    }
  );
  tl.fromTo(
    "#intro #logo-m-letter",
    {
      yPercent: 70,
      opacity: 0,
    },
    {
      yPercent: -0,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
    },
    "<"
  );
  tl.to("#intro #logo-k-letter", {
    yPercent: 70,
    opacity: 0,
    duration: 1,
    ease: "power4.in",
  });
  tl.to(
    "#intro #logo-m-letter",
    {
      yPercent: -70,
      opacity: 0,

      duration: 1,
      ease: "power4.in",
    },
    "<"
  );
  tl.to(
    "#intro",
    {
      opacity: 0,
      duration: 1,
      ease: "power4.in",
      onComplete: () => document.querySelector("#intro").classList.add("hide"),
    },
    "<"
  );
  return tl;
};

// DELETE THIS AFTER ADDING PROJECT
function projectsComingSoon() {
  gsap.fromTo(
    ".coming-soon .row",
    {
      xPercent: 0,
    },
    {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".coming-soon .row",
        start: "0% 100%",
        end: "100% 0%",
        scrub: 3,
      },
    }
  );
}
// projectsComingSoon();

// opening and closing nav
const navContent = document.querySelector(".navigation__content");
const toggler = document.querySelector(".toggler");
const navLinks = document.querySelectorAll(".nav-link");

toggler.addEventListener("click", function () {
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
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (getComputedStyle(toggler).display === "none") return;

    if (toggler.getAttribute("aria-expanded") === "false") {
      toggler.setAttribute("aria-expanded", "true");
      navContent.classList.add("nav-opening");
    } else {
      toggler.setAttribute("aria-expanded", "false");
      navContent.classList.add("nav-closing");
      setTimeout(() => {
        navContent.classList.remove("nav-opening");
        navContent.classList.remove("nav-closing");
      }, 260);
    }
  });
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
  if ((innerWidth || document.clientWidth || body.clientWidth) < 765) {
    //  < 765
    const lpTimeline = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
      delay: 1,
    });
    //intro animation
    lpTimeline.add(introAnim());
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
  } else if ((innerWidth || document.clientWidth || body.clientWidth) < 1024) {
    // < 1024
    // animation for tablets
    const lpTimeline = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
      delay: 1,
    });
    //intro animation
    lpTimeline.add(introAnim());
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
        clearProps: "all",
      },
      "<60%"
    );
    // date fade in
    lpTimeline.from(".hero-img .date", { autoAlpha: 0 }, "<70%");
    // logo slide in
    lpTimeline.from(".logo", { yPercent: -101, duration: 1 }, "<50%");

    // quotation initial state
    gsap.set(".quotation__quote", { xPercent: -60, autoAlpha: 0 });
    gsap.set(".quotation__author", { autoAlpha: 0 }, "<30%");
    gsap.set(".quotation__sign", { autoAlpha: 0, yPercent: 100 }, "<");
  } else {
    // >= 1024
    // animation for desktops
    const lpTimeline = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
      delay: 1,
    });
    //intro animation
    lpTimeline.add(introAnim());
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
    lpTimeline.fromTo(
      ".social",
      { yPercent: 60, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 0.4,
        stagger: 0.1,
        ease: "back.out(2)",
        clearProps: "all",
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
        clearProps: "all",
      },
      "<60%"
    );
    // date fade in
    lpTimeline.from(".hero-img .date", { autoAlpha: 0 }, "<70%");
    // logo slide in
    lpTimeline.from(".logo", { yPercent: -101, duration: 1 }, "<50%");
    // quotation fade in
    lpTimeline.from(
      ".quotation",
      {
        autoAlpha: 0,
        duration: 2.5,
      },
      "<20%"
    );
  }
}
lpAnimation();

function projectsAnimation() {
  const cards = gsap.utils.toArray(".project-card");

  ScrollTrigger.matchMedia({
    // small
    "(max-width: 764px)": function () {
      cards.forEach((card) => {
        // set initial state
        gsap.set(card.children, { autoAlpha: 0, y: 150 });
        gsap.to(card.children, {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.25,
          scrollTrigger: {
            trigger: card,
          },
          clearProps: "all",
        });
      });
    },

    "(min-width: 765px)": function () {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card) => {
        // set initial state
        gsap.set(card.children, { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "0% 100%",
            end: "100% 0%",
            scrub: 1.3,
          },
        });

        tl.fromTo(
          card.children[1],
          {
            y: 70,
          },
          {
            y: 0,
          }
        );
        tl.fromTo(
          card.children[2],
          {
            y: 50,
          },
          {
            y: 0,
          },
          "<"
        );
        tl.fromTo(
          card.children[0],
          {
            y: 30,
          },
          {
            y: 0,
          },
          "<"
        );
      });
      return function () {
        tl.kill();
      };
    },
  });
}
projectsAnimation();

// quotation animation on tablets
ScrollTrigger.matchMedia({
  // quotation scroll animation
  "(min-width:765px) and (max-width:1023px)": function () {
    gsap.set(".quotation__quote", { xPercent: -60, autoAlpha: 0 });
    gsap.set(".quotation__author", { autoAlpha: 0 }, "<30%");
    gsap.set(".quotation__sign", { autoAlpha: 0, yPercent: 100 }, "<");

    const qtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".quotation",
        start: "0% 80%",
        end: "100% 50%",
        scrub: 1.2,
      },
    });

    qtl.to(".quotation__quote", { xPercent: 0, autoAlpha: 1 });
    qtl.to(".quotation__author", { autoAlpha: 0.3 }, "<30%");
    qtl.to(".quotation__sign", { autoAlpha: 1, yPercent: 0 }, "<");

    return function () {
      console.log("changing width");
      gsap.set(".quotation__quote", { xPercent: 0, autoAlpha: 1 });
      gsap.set(".quotation__author", { autoAlpha: 0.3 });
      gsap.set(".quotation__sign", { autoAlpha: 1, yPercent: 0 });

      qtl.kill();
    };
  },
});

function aboutMeAnimation() {
  ScrollTrigger.matchMedia({
    "(min-width:765px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-me__content",
          start: "0% 50%",
        },
      });

      gsap.set(".w1", { xPercent: 200, yPercent: 350, autoAlpha: 0 });
      gsap.set(".w2", { xPercent: -100, yPercent: 100, autoAlpha: 0 });
      gsap.set(".w3", { yPercent: 150, autoAlpha: 0 });
      gsap.set(".w4", { xPercent: -150, autoAlpha: 0 });
      gsap.set(".w5", { xPercent: 50, yPercent: -50, autoAlpha: 0 });
      gsap.set(".w6", { xPercent: -350, yPercent: -250, autoAlpha: 0 });
      gsap.set(".w7", { xPercent: 500, yPercent: -500, autoAlpha: 0 });

      tl.to(".w1", { xPercent: 0, yPercent: 0, autoAlpha: 1 }, "<10%");
      tl.to(".w2", { xPercent: 0, yPercent: 0, autoAlpha: 1 }, "<10%");
      tl.to(".w3", { yPercent: 0, autoAlpha: 1 }, "<10%");
      tl.to(".w4", { xPercent: 0, autoAlpha: 1 }, "<10%");
      tl.to(".w5", { xPercent: 0, yPercent: 0, autoAlpha: 1 }, "<10%");
      tl.to(".w6", { xPercent: 0, yPercent: 0, autoAlpha: 1 }, "<10%");
      tl.to(".w7", { xPercent: 0, yPercent: 0, autoAlpha: 1 }, "<10%");

      return function () {
        gsap.set([".w1", ".w1", ".w2", ".w3", ".w4", ".w5", ".w6", ".w7"], {
          xPercent: 0,
          yPercent: 0,
          autoAlpha: 1,
        });

        tl.kill();
      };
    },
  });
}
aboutMeAnimation();

const showAlert = (alert) => {
  alert.classList.add("isVisible");
  setTimeout(() => {
    alert.classList.remove("isVisible");
  }, 7000);
};

document.querySelector(".contact__form").addEventListener("submit", (e) => {
  const userEmail = document.querySelector("#email").value;
  const userName = document.querySelector("#name").value;
  const userMessage = document.querySelector("#message").value;

  const alert = document.querySelector(".alert");

  e.preventDefault();

  showAlert(document.querySelector(".sending-alert"));

  console.log("form submition");
  console.log(userEmail, userName, userMessage);

  const templateParams = {
    message_fromName: userName,
    message: userMessage,
    message_fromEmail: userEmail,
  };

  emailjs.send("service_rgc56e3", "template_1l0zn5c", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert.innerHTML = "<p>Your message has been sent.</p>";
      showAlert(alert);
    },
    function (error) {
      console.log("FAILED...", error);
      alert.innerHTML = "<p>Something went wrong. Try again later.</p>";
      showAlert(alert);
    }
  );
});
