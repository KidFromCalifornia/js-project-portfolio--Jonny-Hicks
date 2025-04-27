class ScrollAnimation {
  constructor(selector, options = { threshold: 0.1 }) {
    this.sections = document.querySelectorAll(selector);
    console.log("Sections found:", this.sections); // Debugging
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      options
    );
    this.init();
  }

  init() {
    this.sections.forEach((section) => {
      console.log("Initializing section:", section); // Debugging
      section.classList.add("hidden"); // Add a hidden class initially
      this.observer.observe(section);
    });
  }

  handleIntersect(entries) {
    entries.forEach((entry) => {
      console.log("Intersection observed:", entry.target); // Debugging
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
        this.observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }
}

export default ScrollAnimation;
