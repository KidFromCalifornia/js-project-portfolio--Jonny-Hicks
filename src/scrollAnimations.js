// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with animation classes
  const animatedElements = document.querySelectorAll(
    ".animate-slide-down, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-zoom-in"
  );

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Add "active" class when in view
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe each animated element
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
