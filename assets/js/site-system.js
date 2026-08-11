(() => {
  const initializeSiteSystem = () => {
    const enhancedStyles = [...document.querySelectorAll('link[rel="stylesheet"]')]
      .find(link => link.href.includes('/assets/css/hero-section.css'));
    if (enhancedStyles) enhancedStyles.href = 'assets/css/hero-section.css?v=20260810-featured1';

    if (!document.querySelector('.hero-upgraded') && !document.querySelector('.page-scene')) {
      const scene = document.createElement('div');
      scene.className = 'page-scene';
      scene.setAttribute('aria-hidden', 'true');
      document.body.prepend(scene);
    }

    const theme = document.querySelector('.theme');
    const syncTheme = () => {
      const isLight = document.body.classList.contains('light');
      theme?.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
      theme?.setAttribute('aria-pressed', String(isLight));
      document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
    };
    syncTheme();
    new MutationObserver(syncTheme).observe(document.body, { attributes: true, attributeFilter: ['class'] });

    const caseHeader = document.querySelector('.case-header');
    if (caseHeader) {
      document.body.classList.add('case-page');

      const pageName = window.location.pathname.split('/').pop() || '';
      const projectSequence = [
        { file: 'case-offer.html', label: 'Agentic Offer Pipeline' },
        { file: 'case-portal.html', label: 'WeIN Operations Portal' },
        { file: 'case-saas.html', label: 'Medical SaaS' },
        { file: 'case-shore.html', label: 'Shore Thing' }
      ];
      const currentIndex = projectSequence.findIndex(project => project.file === pageName);

      if (currentIndex >= 0 && !document.querySelector('.case-continuation')) {
        const previous = projectSequence[(currentIndex - 1 + projectSequence.length) % projectSequence.length];
        const next = projectSequence[(currentIndex + 1) % projectSequence.length];
        const continuation = document.createElement('nav');
        continuation.className = 'case-continuation fade';
        continuation.setAttribute('aria-label', 'Continue exploring projects');
        continuation.innerHTML = `
          <span class="case-continuation-label">Continue Exploring</span>
          <div class="case-continuation-links">
            <a href="${previous.file}" aria-label="Previous project: ${previous.label}">
              <i aria-hidden="true">←</i><span><small>Previous project</small>${previous.label}</span>
            </a>
            <a href="${next.file}" aria-label="Next project: ${next.label}">
              <span><small>Next project</small>${next.label}</span><i aria-hidden="true">→</i>
            </a>
          </div>`;
        document.querySelector('main')?.append(continuation);

        requestAnimationFrame(() => continuation.classList.add('in'));
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSiteSystem, { once: true });
  } else {
    initializeSiteSystem();
  }
})();
