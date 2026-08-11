(() => {
  const extra = document.createElement('link');
  extra.rel = 'stylesheet';
  extra.href = 'assets/css/hero-section.css';
  document.head.append(extra);

  const body = document.body;
  const theme = document.querySelector('.theme');
  const hero = document.querySelector('.hero-upgraded');
  let scene = document.querySelector('.page-scene');
  if (!scene) {
    scene = document.createElement('div');
    scene.className = 'page-scene';
    scene.setAttribute('aria-hidden', 'true');
    document.body.prepend(scene);
  }
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = matchMedia('(pointer: coarse)').matches;

  if (localStorage.getItem('af-theme') === 'light') body.classList.add('light');

  theme?.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('af-theme', body.classList.contains('light') ? 'light' : 'dark');
    const label = theme.querySelector('span');
    if (label) label.textContent = body.classList.contains('light') ? 'Light' : 'Dark';
  });

  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }), { threshold: 0.08 });
  document.querySelectorAll('.fade').forEach(element => io.observe(element));

  const roles = [
    'AI Product Engineer',
    'Product Owner + Builder',
    'Agentic Systems Engineer',
    'Full-stack Product Engineer'
  ];
  const role = document.querySelector('[data-role]');
  if (role && !prefersReduced) {
    let index = 0;
    setInterval(() => {
      role.classList.add('switching');
      setTimeout(() => {
        index = (index + 1) % roles.length;
        role.textContent = roles[index];
        role.classList.remove('switching');
      }, 230);
    }, 2800);
  }

  if (!coarsePointer && !prefersReduced && scene) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.append(glow);

    addEventListener('pointermove', event => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      scene.style.setProperty('--mx', `${event.clientX}px`);
      scene.style.setProperty('--my', `${event.clientY}px`);

      if (hero) {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
        hero.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
      }
    }, { passive: true });
  }

  document.querySelectorAll('.acc button').forEach(button => {
    button.addEventListener('click', () => button.closest('.acc').classList.toggle('open'));
  });

  const tabs = [...document.querySelectorAll('[data-profile-tab]')];
  const panels = [...document.querySelectorAll('[data-profile-panel]')];
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.toggle('active', item === tab));
    panels.forEach(panel => {
      panel.hidden = panel.dataset.profilePanel !== tab.dataset.profileTab;
    });
  }));

  document.querySelector('.signal-form')?.addEventListener('submit', event => {
    event.preventDefault();
    window.location.href = `mailto:af8847492@gmail.com?subject=${encodeURIComponent(event.currentTarget.title.value)}&body=${encodeURIComponent(`${event.currentTarget.message.value}\n\nFrom: ${event.currentTarget.email.value}`)}`;
  });
})();

queueMicrotask(() => {
  const style = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .find(link => link.href.includes('/assets/css/hero-section.css'));
  if (style) style.href = 'assets/css/hero-section.css?v=20260810-scene2';

  if (!document.querySelector('.hero-upgraded') && !document.querySelector('.page-scene')) {
    const scene = document.createElement('div');
    scene.className = 'page-scene';
    scene.setAttribute('aria-hidden', 'true');
    document.body.prepend(scene);
  }
});