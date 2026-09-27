(() => {
  const controls = [...document.querySelectorAll('[data-tag-control]')];
  const projects = [...document.querySelectorAll('[data-project-tags]')];
  if (!projects.length) return;
  const url = new URL(window.location.href);
  const chosen = new Set((url.searchParams.get('tags') || '').split(',').filter(Boolean));
  function render() {
    controls.forEach((input) => { input.checked = chosen.has(input.value); });
    projects.forEach((project) => {
      const tags = project.dataset.projectTags.split(',');
      project.hidden = chosen.size > 0 && !tags.some((tag) => chosen.has(tag));
    });
    if (controls.length) {
      chosen.size ? url.searchParams.set('tags', [...chosen].join(',')) : url.searchParams.delete('tags');
      history.replaceState({}, '', url);
    }
  }
  controls.forEach((input) => input.addEventListener('change', () => { input.checked ? chosen.add(input.value) : chosen.delete(input.value); render(); }));
  render();

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
    let current = 0;
    const show = (index) => { current = (index + slides.length) % slides.length; slides.forEach((slide, i) => { slide.hidden = i !== current; }); };
    carousel.querySelector('[data-carousel-previous]').addEventListener('click', () => show(current - 1));
    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => show(current + 1));
  });
})();
