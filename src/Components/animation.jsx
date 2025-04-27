class ScrollAnimation {
  constructor(selector, options = {}) {
    this.elements = document.querySelectorAll(selector);
    this.options = Object.assign({ threshold: 0.1 }, options);
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      this.options
    );
    this.init();
  }

  init() {
    this.elements.forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(50px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      this.observer.observe(el);
    });
  }

  handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        this.observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }
}

// Export the component for reuse
export default ScrollAnimation;
