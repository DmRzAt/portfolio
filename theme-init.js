(() => {
  const root = document.documentElement;
  root.classList.add('js');
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('site-theme'); } catch (_) {}
  // domyślnie jasny motyw; ciemny tylko gdy użytkownik sam go wybrał
  root.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';
})();
