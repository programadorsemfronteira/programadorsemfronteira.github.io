(() => {
  const replaceLegacyArrows = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.includes('↗') && !node.parentElement.closest('script, style')) nodes.push(node);
    }
    nodes.forEach((textNode) => {
      const fragment = document.createDocumentFragment();
      textNode.nodeValue.split('↗').forEach((part, index) => {
        if (part) fragment.append(part);
        if (index < textNode.nodeValue.split('↗').length - 1) {
          const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          icon.setAttribute('class', 'portfolio-arrow-up-right');
          icon.setAttribute('aria-hidden', 'true');
          icon.setAttribute('viewBox', '0 0 17 17');
          icon.setAttribute('fill', 'currentColor');
          icon.innerHTML = '<path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>';
          fragment.append(icon);
        }
      });
      textNode.replaceWith(fragment);
    });
  };

  replaceLegacyArrows();
})();

(() => {
  const approachLink = document.querySelector('.portfolio-home #approach .button-solid');
  if (approachLink) {
    const target = new URL(approachLink.href, location.origin);
    target.pathname = target.pathname.replace(/\/work\/?$/, '/engineering/');
    target.hash = 'ai-agents-accelerate-delivery';
    approachLink.href = `${target.pathname}${target.hash}`;
  }

  const aiSection = document.querySelector('.engineering-ai');
  if (aiSection) aiSection.id = 'ai-agents-accelerate-delivery';
})();

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
