gsap.registerPlugin(ScrollTrigger);


gsap.to(".wrp", {
  y: 0,
  duration: 1.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".download_links",
    start: "top top",
  },
});

gsap.to(".customize-animate", {
  y: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".customize-animate",
  },
});

gsap.to(".header", {
  y: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".app_features",
  },
});
gsap.to(".features_grid_wrapper", {
  y: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".features_grid_wrapper",
  },
});

gsap.to(".header", {
  y: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".take_look",
  },
});
gsap.to(".actions_wrapper", {
  y: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".actions_wrapper",
  },
});

 

gsap
  .timeline({
    duration: 1,
    scrollTrigger: {
      trigger: ".slider",
      start: "top top",
      end: "top",
    },
  })
  .to(".bg", { width: "100%" }, 0);
