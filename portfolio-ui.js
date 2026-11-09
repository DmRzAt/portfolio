/* Progressive enhancements for deliberate project exploration and local email drafts. */
const RECIPIENT = 'dmytro.dev.zats@gmail.com';
const TYPES = ['website', 'store', 'app'];
const BRIEF_COPY = {
  pl: {
    types: { website: 'strona internetowa', store: 'sklep internetowy', app: 'aplikacja lub integracja' },
    subject: 'Zapytanie o projekt: ',
    greeting: 'Cześć Dmytro,',
    project: 'Chcę porozmawiać o projekcie: ',
    description: 'Opis projektu:',
    website: 'Obecna strona lub materiały:',
  },
  en: {
    types: { website: 'website', store: 'online store', app: 'app or integration' },
    subject: 'Project enquiry: ',
    greeting: 'Hi Dmytro,',
    project: 'I’d like to discuss a project: ',
    description: 'Project description:',
    website: 'Existing website or materials:',
  },
};

function boundedText(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

/** Construct a draft only. No data is transmitted or persisted by this function. */
export function buildBriefMailto(values = {}, language = 'pl') {
  const input = values && typeof values === 'object' ? values : {};
  const lang = typeof language === 'string' && /^en(?:-|$)/i.test(language) ? 'en' : 'pl';
  const copy = BRIEF_COPY[lang];
  const type = TYPES.includes(input.type) ? input.type : 'website';
  const label = copy.types[type];
  const description = boundedText(input.description, 2000);
  const website = boundedText(input.url, 500);
  const paragraphs = [copy.greeting, `${copy.project}${label}.`];
  if (description) paragraphs.push(`${copy.description}\n${description}`);
  if (website) paragraphs.push(`${copy.website}\n${website}`);
  // URLSearchParams also replaces lone UTF-16 surrogates rather than throwing.
  const query = new URLSearchParams({ subject: copy.subject + label, body: paragraphs.join('\n\n') });
  return `mailto:${RECIPIENT}?${query.toString().replaceAll('+', '%20')}`;
}

/** Switch projects only in response to a visitor's selection. */
export function setupShowcase(root, options = {}) {
  if (!root) return () => {};
  const panels = new Map([...root.querySelectorAll('[data-showcase-panel]')]
    .map(panel => [panel.dataset.showcasePanel, panel]));
  const buttons = [...root.querySelectorAll('[data-showcase-select]')].filter(button => {
    const id = button.dataset.showcaseSelect;
    const panel = panels.get(id);
    return ['kramo', 'slotify', 'quotly'].includes(id) && panel
      && button.getAttribute('aria-controls') === panel.id;
  });
  if (!buttons.length) return () => {};
  const status = root.querySelector('[data-showcase-status]');
  const view = root.ownerDocument?.defaultView;
  const reducedMotion = () => options.reducedMotion === undefined
    ? (view?.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? true)
    : Boolean(options.reducedMotion);
  let active = null;
  let animation = null;

  function select(id, animate = true) {
    if (id === active) return;
    animation?.cancel?.();
    animation = null;
    active = id;
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.showcaseSelect === id));
    for (const [key, panel] of panels) panel.hidden = key !== id;
    const panel = panels.get(id);
    if (status) status.textContent = panel.dataset.name || '';
    if (animate && !reducedMotion() && typeof panel.animate === 'function') {
      animation = panel.animate([
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 360, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }
  }

  select(buttons[0].dataset.showcaseSelect, false);
  const handlers = buttons.map(button => {
    const handler = () => select(button.dataset.showcaseSelect);
    button.addEventListener('click', handler);
    return [button, handler];
  });
  const choices = root.querySelector('.showcase-choices');
  if (choices) choices.hidden = false;
  return () => {
    animation?.cancel?.();
    for (const [button, handler] of handlers) button.removeEventListener('click', handler);
  };
}

/** Keep the ordinary email link usable; enhance it with an optional local brief. */
export function setupBrief(form) {
  if (!form) return () => {};
  const email = form.querySelector('[data-brief-email]');
  if (!email) return () => {};
  const update = () => {
    email.setAttribute('href', buildBriefMailto({
      type: form.querySelector('[name="projectType"]:checked')?.value,
      description: form.querySelector('[name="description"]')?.value,
      url: form.querySelector('[name="website"]')?.value,
    }, form.ownerDocument?.documentElement?.lang));
  };
  const preventSubmit = event => event.preventDefault();
  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('submit', preventSubmit);
  update();
  form.hidden = false;
  return () => {
    form.removeEventListener('input', update);
    form.removeEventListener('change', update);
    form.removeEventListener('submit', preventSubmit);
  };
}

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-showcase]').forEach(root => setupShowcase(root));
  document.querySelectorAll('[data-brief-form]').forEach(form => setupBrief(form));
}
