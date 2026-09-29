(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const revealTargets = document.querySelectorAll(
    '.portfolio-feature, .portfolio-journey, .portfolio-close, .work-heading, .tag-explorer, .work-list article'
  );
  // Journey artifacts manage their own once-only 3D entrance. Keeping them out
  // of this repeating observer prevents a threshold crossing from resetting them.
  const viewportTargets = document.querySelectorAll('[data-reveal-on-view]:not(.timeline-artifact)');

  revealTargets.forEach((element) => element.classList.add('scroll-reveal'));
  viewportTargets.forEach((element) => element.classList.add('scroll-reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  revealTargets.forEach((element) => observer.observe(element));

  const viewportObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

  viewportTargets.forEach((element) => viewportObserver.observe(element));
})();
