/* Progressive enhancement; all portfolio content and links are static HTML. */
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const theme = document.querySelector('.nav-theme-toggle');
if (menu && nav) {
  menu.hidden = false;
  const closeMenu = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
}
let savedTheme;
try { savedTheme = localStorage.getItem('theme'); } catch {}
let dark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
function applyTheme() {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  if (theme) { theme.textContent = dark ? 'Light' : 'Dark'; theme.setAttribute('aria-pressed', String(dark)); theme.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme'); }
}
applyTheme();
if (theme) {
  theme.hidden = false;
  theme.addEventListener('click', () => { dark = !dark; applyTheme(); try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {} });
}
const filterBar = document.querySelector('.filter-bar');
if (filterBar) {
  filterBar.hidden = false;
  const cards = [...document.querySelectorAll('.additional-card')];
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]'); if (!btn) return;
    filterBar.querySelectorAll('button').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    cards.forEach(card => { card.hidden = btn.dataset.filter !== 'all' && card.dataset.category !== btn.dataset.filter; });
    document.querySelector('#filter-status').textContent = cards.filter(c => !c.hidden).length + ' projects shown';
  });
}

