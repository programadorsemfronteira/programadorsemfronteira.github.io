(() => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('[data-interactive-hero]').forEach((artifact) => {
    const glare = artifact.querySelector('[data-hero-glare]');
    if (!glare) return;

    let frame;
    let hovering = false;
    const current = { x: 0.5, y: 0.5, rotateX: 0, rotateY: 0, scale: 1 };
    const target = { ...current };
    const ease = 0.12;

    const render = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      current.rotateX += (target.rotateX - current.rotateX) * ease;
      current.rotateY += (target.rotateY - current.rotateY) * ease;
      current.scale += (target.scale - current.scale) * ease;

      artifact.style.transform = `perspective(1100px) rotateX(${current.rotateX.toFixed(2)}deg) rotateY(${current.rotateY.toFixed(2)}deg) scale(${current.scale.toFixed(3)})`;
      glare.style.background = `radial-gradient(420px circle at ${current.x * 100}% ${current.y * 100}%, color-mix(in oklab, #ad6900 24%, transparent), transparent 55%)`;

      const settling = Math.abs(target.rotateX - current.rotateX) > 0.01 || Math.abs(target.rotateY - current.rotateY) > 0.01 || Math.abs(target.scale - current.scale) > 0.001;
      frame = hovering || settling ? requestAnimationFrame(render) : undefined;
    };

    const startRendering = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const reset = () => {
      hovering = false;
      target.rotateX = 0;
      target.rotateY = 0;
      target.scale = 1;
      glare.style.opacity = '0';
      startRendering();
    };

    artifact.addEventListener('mousemove', (event) => {
      const bounds = artifact.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      hovering = true;
      target.x = x;
      target.y = y;
      target.rotateX = (0.5 - y) * 10;
      target.rotateY = (x - 0.5) * 10;
      target.scale = 1.015;
      glare.style.opacity = '1';
      startRendering();
    });

    artifact.addEventListener('mouseleave', reset);
  });
})();
