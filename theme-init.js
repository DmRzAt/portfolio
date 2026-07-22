(() => {
  const root = document.documentElement;
  root.classList.add('js');
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('site-theme'); } catch (_) {}
  const systemTheme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  root.dataset.theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme;
})();
