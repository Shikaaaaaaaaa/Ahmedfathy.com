(() => {
  const enhancedStyles = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .find(link => link.href.includes('/assets/css/hero-section.css'));
  if (enhancedStyles) enhancedStyles.href = 'assets/css/hero-section.css?v=20260809-approach1';

  const body = document.body;
  const hero = document.querySelector('.hero-upgraded');
  const theme = document.querySelector('.theme');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const syncTheme = () => {
    const isLight = body.classList.contains('light');
    const label = theme?.querySelector('span');
    if (label) label.textContent = isLight ? 'Light' : 'Dark';
    theme?.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    theme?.setAttribute('aria-pressed', String(isLight));
    document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
  };

  syncTheme();
  new MutationObserver(syncTheme).observe(body, { attributes: true, attributeFilter: ['class'] });

  const scene = document.querySelector('.page-scene') || document.createElement('div');
  if (!scene.isConnected) {
    scene.className = 'page-scene';
    scene.setAttribute('aria-hidden', 'true');
    body.prepend(scene);
  }

  if (!hero || reducedMotion) return;

  let pointerX = 0;
  let pointerY = 0;
  let scrollY = 0;
  let pointerClientX = innerWidth * .7;
  let pointerClientY = innerHeight * .3;
  let frame = 0;
  const coarsePointer = matchMedia('(pointer: coarse)').matches;

  const renderScene = () => {
    scene.style.setProperty('--scene-x', `${pointerX}px`);
    scene.style.setProperty('--scene-y', `${pointerY + scrollY}px`);
    scene.style.setProperty('--mx', `${pointerClientX}px`);
    scene.style.setProperty('--my', `${pointerClientY}px`);
    hero.style.setProperty('--scene-x', `${pointerX}px`);
    hero.style.setProperty('--scene-y', `${pointerY + scrollY}px`);
    hero.style.setProperty('--mx', `${pointerClientX}px`);
    hero.style.setProperty('--my', `${pointerClientY}px`);
    frame = 0;
  };
  const requestScene = () => {
    if (!frame) frame = requestAnimationFrame(renderScene);
  };
  const updateScroll = () => {
    scrollY = Math.max(0, Math.min(82, window.scrollY * .035));
    requestScene();
  };

  addEventListener('scroll', updateScroll, { passive: true });
  addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  if (!coarsePointer) {
    addEventListener('pointermove', event => {
      const x = event.clientX / innerWidth - .5;
      const y = event.clientY / innerHeight - .5;
      pointerX = x * -18;
      pointerY = y * -12;
      pointerClientX = event.clientX;
      pointerClientY = event.clientY;
      requestScene();
    }, { passive: true });
  }
})();
