(() => {
  const style = document.createElement("style");
  style.textContent = ".timeline-artifact{padding:0!important;overflow:hidden;background:#f2f1ed}.timeline-artifact-frame{min-height:0;margin:0;flex:1;overflow:hidden}.timeline-artifact-frame img{display:block;width:100%;height:100%;object-fit:cover}.timeline-artifact-caption{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:54px;box-sizing:border-box;margin:0;padding:10px 18px;border-top:1px solid #d6d7da;background:#fbfbfa}.timeline-artifact-caption span{color:#9a551c;font:700 9px/1.45 Courier New,monospace;letter-spacing:.14em}.timeline-artifact-caption small{color:#70727a;text-align:right}@media(min-width:801px){.timeline-chapter.is-artifact-right .timeline-artifact{order:2!important}.timeline-chapter.is-artifact-right .timeline-copy{order:1!important}}@media(prefers-reduced-motion:no-preference){html.portfolio-motion-ready .timeline-artifact-frame[data-reveal-on-view]{transform:translateY(28px) scale(.965);transform-origin:center;transition:opacity .62s ease-out,transform .62s cubic-bezier(.22,1,.36,1)}html.portfolio-motion-ready .timeline-artifact-frame[data-reveal-on-view].is-visible{transform:translateY(0) scale(1)}html.portfolio-motion-ready .timeline-artifact-frame[data-reveal-on-view]+.timeline-artifact-caption{opacity:0;transform:translateY(12px);transition:opacity .62s ease-out,transform .62s cubic-bezier(.22,1,.36,1)}html.portfolio-motion-ready .timeline-artifact-frame[data-reveal-on-view].is-visible+.timeline-artifact-caption{opacity:1;transform:translateY(0)}}";
  document.head.append(style);

  const motionStyle = document.createElement("style");
  motionStyle.textContent = ".timeline-artifact-shell{min-width:0;perspective:1200px;perspective-origin:center}.timeline-artifact{transform-style:preserve-3d}@media(min-width:801px){.timeline-artifact-shell{position:sticky;top:96px;align-self:start;box-sizing:border-box;min-height:0;aspect-ratio:1.22/1}.timeline-artifact{position:static!important;order:initial!important;width:100%;height:100%;min-height:0;aspect-ratio:auto}.timeline-chapter.is-artifact-right .timeline-artifact-shell{order:2!important}.timeline-chapter.is-artifact-right .timeline-copy{order:1!important}}@media(prefers-reduced-motion:no-preference){html.portfolio-motion-ready .timeline-artifact[data-reveal-on-view]{opacity:0;transform:translate3d(0,80px,-220px) rotateY(-12deg) rotateX(6deg);transform-origin:center;will-change:transform,opacity;transition:opacity .55s ease-out,transform .72s cubic-bezier(.16,1,.3,1)}html.portfolio-motion-ready .timeline-artifact[data-reveal-on-view].is-visible{opacity:1;transform:translate3d(0,0,0) rotateY(0) rotateX(0)}}";
  document.head.append(motionStyle);

  const perspectiveStyle = document.createElement("style");
  perspectiveStyle.textContent = "@media(prefers-reduced-motion:no-preference){html.portfolio-motion-ready .timeline-artifact[data-reveal-on-view]{transform:perspective(1200px) translate3d(0,80px,-220px) rotateY(-12deg) rotateX(6deg)}}";
  document.head.append(perspectiveStyle);

  const descriptions = {
    en: [
      "A late-1990s home computer and handwritten programming notes.",
      "An early home network lab with cables, a switch, and a system diagram.",
      "A game-platform engineering desk with delivery and operations tools.",
      "A remote cloud-architecture workstation with deployment sketches.",
      "An accessibility and product-platform workbench with component tokens.",
      "Early product sketches, a prototype, and launch-planning tools.",
      "An AI-native engineering workstation with a human final review."
    ],
    "pt-br": [
      "Um computador doméstico dos anos 1990 e anotações de programação manuscritas.",
      "Um laboratório doméstico de rede com cabos, switch e diagrama de sistema.",
      "Uma mesa de engenharia de plataforma de jogos com ferramentas de entrega e operações.",
      "Uma estação remota de arquitetura em nuvem com esboços de implantação.",
      "Uma bancada de acessibilidade e plataforma de produto com tokens de componentes.",
      "Esboços de produto inicial, um protótipo e ferramentas de planejamento de lançamento.",
      "Uma estação de engenharia nativa em IA com revisão humana final."
    ],
    es: [
      "Un ordenador doméstico de los años 1990 y notas de programación manuscritas.",
      "Un laboratorio doméstico de red con cables, switch y diagrama de sistema.",
      "Un escritorio de ingeniería de plataforma de juegos con herramientas de entrega y operaciones.",
      "Una estación remota de arquitectura en la nube con bocetos de despliegue.",
      "Un banco de accesibilidad y plataforma de producto con tokens de componentes.",
      "Bocetos de producto inicial, un prototipo y herramientas de planificación de lanzamiento.",
      "Una estación de ingeniería nativa de IA con revisión humana final."
    ]
  };

  const lang = document.documentElement.lang || "en";
  const localizedDescriptions = descriptions[lang] || descriptions.en;

  document.querySelectorAll(".timeline-artifact").forEach((artifact, index) => {
    if (artifact.parentElement?.classList.contains("timeline-artifact-shell")) return;
    const shell = document.createElement("div");
    shell.className = "timeline-artifact-shell";
    artifact.replaceWith(shell);
    shell.append(artifact);
    const label = artifact.querySelector("span")?.textContent?.trim() || "";
    const eyebrow = artifact.querySelector("small")?.textContent?.trim() || "";
    artifact.replaceChildren();

    const figure = document.createElement("figure");
    figure.className = "timeline-artifact-frame";
    const image = document.createElement("img");
    image.src = `/assets/img/journey-chapter-${String(index + 1).padStart(2, "0")}.png`;
    image.alt = localizedDescriptions[index] || "";
    image.loading = "lazy";
    figure.append(image);

    const caption = document.createElement("p");
    caption.className = "timeline-artifact-caption";
    const chapter = document.createElement("span");
    chapter.textContent = label;
    const descriptor = document.createElement("small");
    descriptor.textContent = eyebrow;
    caption.append(chapter, descriptor);
    artifact.dataset.revealOnView = "";
    artifact.append(figure, caption);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.dataset.revealPlayed) return;
      entry.target.dataset.revealPlayed = "true";
      entry.target.classList.add("is-visible");
      entry.target.animate([
        { opacity: 0, transform: "perspective(1200px) translate3d(0, 80px, -220px) rotateY(-12deg) rotateX(6deg)" },
        { opacity: 0.72, transform: "perspective(1200px) translate3d(0, 18px, -42px) rotateY(-4deg) rotateX(2deg)", offset: 0.62 },
        { opacity: 1, transform: "perspective(1200px) translate3d(0, 0, 0) rotateY(0) rotateX(0)" }
      ], { duration: 900, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".timeline-artifact[data-reveal-on-view]").forEach((artifact) => observer.observe(artifact));
})();
