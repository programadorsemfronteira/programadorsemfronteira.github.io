(() => {
  const menuToggle = document.querySelector('.portfolio-menu-toggle');
  const header = document.querySelector('.portfolio-header');
  if (menuToggle && header) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      header.classList.toggle('is-menu-open', !isOpen);
    });
  }

  const links = [...document.querySelectorAll('.portfolio-nav [data-nav-target]')];
  if (!links.length) return;

  const select = (target) => {
    links.forEach((link) => {
      if (link.dataset.navTarget === target) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  if (location.pathname.includes('/work/')) return;

  const selectFromHash = () => {
    const target = location.hash.slice(1);
    if (links.some((link) => link.dataset.navTarget === target)) select(target);
  };

  selectFromHash();
  window.addEventListener('hashchange', selectFromHash);

  const sections = links.map((link) => document.getElementById(link.dataset.navTarget)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) select(entry.target.id);
    });
  }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
})();
