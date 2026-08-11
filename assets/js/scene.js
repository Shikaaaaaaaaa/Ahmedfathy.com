(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealElements = [...document.querySelectorAll('[data-evidence-reveal]')];
  const scrollScenes = [...document.querySelectorAll('[data-scroll-scene]')];

  root.classList.add('is-enhanced');

  const revealAll = () => revealElements.forEach(element => element.classList.add('is-visible'));

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealElements.forEach(element => observer.observe(element));
  }

  if (!scrollScenes.length || reducedMotion.matches) {
    scrollScenes.forEach(scene => scene.style.setProperty('--scene-progress', '1'));
    return;
  }

  let ticking = false;

  const clamp = value => Math.min(1, Math.max(0, value));
  const updateScenes = () => {
    const viewportHeight = window.innerHeight || 1;

    scrollScenes.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      const travel = Math.max(1, rect.height + viewportHeight);
      const progress = clamp((viewportHeight - rect.top) / travel);
      scene.style.setProperty('--scene-progress', progress.toFixed(4));
      scene.dispatchEvent(new CustomEvent('sceneprogress', { detail: { progress } }));
    });

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScenes);
  };

  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate, { passive: true });
  requestUpdate();
})();
