(() => {
  const chapters = [...document.querySelectorAll('[data-timeline-chapter]')];
  const links = [...document.querySelectorAll('[data-timeline-link]')];
  if (!chapters.length || !links.length) return;

  const select = (id) => links.forEach((link) => {
    const active = link.dataset.timelineLink === id;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'step');
    else link.removeAttribute('aria-current');
  });

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) select(visible[0].target.id);
  }, { rootMargin: '-24% 0px -58% 0px', threshold: 0 });

  chapters.forEach((chapter) => observer.observe(chapter));
  select(location.hash.slice(1) || chapters[0].id);
})();
