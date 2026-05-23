/* AppWorks Portfolio Atlas — interactivity
   i18n · 3-axis filter (industry × country × status) · search · progressive render · dialog */
(() => {
  'use strict';

  const DATA = (window.PORTFOLIO || []).map((d, i) => ({ ...d, n: i + 1 }));
  const INDUSTRIES = window.INDUSTRIES || [];
  const COUNTRIES = window.COUNTRIES || [];
  const STATUSES = window.STATUSES || [];
  const BATCH = 60;
  const APPWORKS_URL = 'https://appworks.tw/investments/';

  const indLabel = (k, lang) => (INDUSTRIES.find((x) => x.key === k) || {})[lang] || k;
  const indIcon  = (k) => (INDUSTRIES.find((x) => x.key === k) || {}).icon || 'label';
  const ctyLabel = (k, lang) => (COUNTRIES.find((x) => x.key === k) || {})[lang] || k;
  const stLabel  = (k, lang) => (STATUSES.find((x) => x.key === k) || {})[lang] || k;

  const I18N = {
    zh: {
      brand: 'AppWorks 投資組合圖鑑',
      brandSub: '台灣 × 大東南亞 創投與加速器',
      eyebrow: '整理自 AppWorks 官方資料與公開報導',
      heroTitle: 'AppWorks 投了哪些 <span class="grad">公司</span>？',
      heroDesc: '把 AppWorks 在台灣與大東南亞（GSEA）的投資組合整理成一份可搜尋、可篩選、可雙語切換的互動圖鑑。每家公司附上產業、地區、階段與目前狀態。',
      statCompanies: '收錄公司', statIndustries: '產業類別', statCountries: '涵蓋地區', statIPOs: '已上市',
      searchPlaceholder: '搜尋公司、產業、加速器屆數或關鍵字…',
      filterIndustry: '產業', filterCountry: '地區', filterStatus: '狀態', all: '全部',
      cardCta: '查看詳情',
      secOverview: '公司概述', secHighlights: '重點觀察', secMeta: '基本資料', secSources: '資料來源',
      metaCountry: '地區', metaIndustry: '產業', metaStage: '投資階段', metaBatch: 'AW 加速器', metaYear: '投資年份', metaStatus: '目前狀態',
      original: '到 AppWorks 看投資組合', prev: '上一個', next: '下一個',
      emptyTitle: '找不到符合的公司', emptyDesc: '換個關鍵字，或清除篩選條件試試。',
      results: (n) => `${n} 家公司`,
      themeDark: '切換深色', themeLight: '切換淺色',
      noUrl: '尚無額外連結',
      footer: '資料整理自 <a href="https://appworks.tw/investments/" target="_blank" rel="noopener">AppWorks Investments</a>、Crunchbase 與公開新聞。非官方整理，內容僅供研究參考。',
    },
    en: {
      brand: 'AppWorks Portfolio Atlas',
      brandSub: 'A Taiwan × Greater SEA VC + Accelerator',
      eyebrow: 'Curated from AppWorks official site + public coverage',
      heroTitle: 'Every company <span class="grad">AppWorks</span> has backed',
      heroDesc: "An interactive, searchable, bilingual atlas of AppWorks' portfolio across Taiwan and Greater Southeast Asia. Each company is tagged with industry, country, stage and current status.",
      statCompanies: 'Companies', statIndustries: 'Industries', statCountries: 'Countries', statIPOs: 'IPOs',
      searchPlaceholder: 'Search company, industry, AW batch, or keyword…',
      filterIndustry: 'Industry', filterCountry: 'Country', filterStatus: 'Status', all: 'All',
      cardCta: 'View details',
      secOverview: 'Overview', secHighlights: 'Notes', secMeta: 'Profile', secSources: 'Sources',
      metaCountry: 'Country', metaIndustry: 'Industry', metaStage: 'Stage', metaBatch: 'AW batch', metaYear: 'Invested', metaStatus: 'Status',
      original: 'View on AppWorks', prev: 'Previous', next: 'Next',
      emptyTitle: 'No matching companies', emptyDesc: 'Try a different keyword or clear the filters.',
      results: (n) => `${n} compan${n === 1 ? 'y' : 'ies'}`,
      themeDark: 'Switch to dark', themeLight: 'Switch to light',
      noUrl: 'No external link yet',
      footer: 'Data compiled from <a href="https://appworks.tw/investments/" target="_blank" rel="noopener">AppWorks Investments</a>, Crunchbase and public news. Unofficial reference only.',
    },
  };

  const state = {
    lang: localStorage.getItem('aw.lang') || 'zh',
    theme: localStorage.getItem('aw.theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    industry: 'all',
    country: 'all',
    status: 'all',
    q: '',
  };
  let filtered = DATA.slice();
  let shown = 0;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const t = (k) => I18N[state.lang][k];
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function attachRipple(el) {
    el.addEventListener('pointerdown', (e) => {
      const r = el.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const span = document.createElement('span');
      span.className = 'ripple';
      span.style.width = span.style.height = size + 'px';
      span.style.left = (e.clientX - r.left - size / 2) + 'px';
      span.style.top = (e.clientY - r.top - size / 2) + 'px';
      el.appendChild(span);
      span.addEventListener('animationend', () => span.remove());
    });
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    const dark = state.theme === 'dark';
    $('#theme-icon').textContent = dark ? 'light_mode' : 'dark_mode';
    $('#theme-toggle').title = dark ? t('themeLight') : t('themeDark');
  }
  $('#theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('aw.theme', state.theme);
    applyTheme();
  });

  function applyStaticI18n() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-Hant' : 'en';
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $('#search').placeholder = t('searchPlaceholder');
    $('#lang-zh').setAttribute('aria-pressed', String(state.lang === 'zh'));
    $('#lang-en').setAttribute('aria-pressed', String(state.lang === 'en'));
    applyTheme();
  }
  function setLang(lang) {
    if (lang === state.lang) return;
    state.lang = lang;
    localStorage.setItem('aw.lang', lang);
    applyStaticI18n();
    renderChips();
    renderCards();
    if (openIndex >= 0) renderDialog();
  }
  $('#lang-zh').addEventListener('click', () => setLang('zh'));
  $('#lang-en').addEventListener('click', () => setLang('en'));

  function fillChips(wrap, items, active, onPick) {
    wrap.innerHTML = items.map((it) => `
      <button class="chip ripple-host" data-key="${esc(it.key)}" aria-pressed="${active === it.key}"
        ${it.accent ? `style="--cat:var(--c-${esc(it.accent)})"` : ''}>
        <span class="leadcheck"><span class="material-symbols-rounded">check</span></span>
        ${it.icon ? `<span class="material-symbols-rounded">${esc(it.icon)}</span>` : ''}
        ${esc(it.label)} <span class="count">${it.count}</span>
      </button>`).join('');
    $$('.chip', wrap).forEach((b) => {
      attachRipple(b);
      b.addEventListener('click', () => onPick(b.dataset.key));
    });
  }
  function countWith(extra) {
    return DATA.filter((d) =>
      (extra.industry === 'all' || d.industry === extra.industry) &&
      (extra.country === 'all' || d.country === extra.country) &&
      (extra.status === 'all' || d.status === extra.status) &&
      matches(d, state.q)
    );
  }
  function renderChips() {
    // Industry chips
    const indItems = [{ key: 'all', label: t('all'), count: countWith({ industry: 'all', country: state.country, status: state.status }).length, icon: 'apps' }]
      .concat(INDUSTRIES.map((c) => ({
        key: c.key, label: c[state.lang],
        count: countWith({ industry: c.key, country: state.country, status: state.status }).length,
        icon: c.icon
      })));
    fillChips($('#chips-industry'), indItems, state.industry, (key) => { state.industry = key; renderChips(); renderCards(); });

    // Country chips
    const ctyItems = [{ key: 'all', label: t('all'), count: countWith({ industry: state.industry, country: 'all', status: state.status }).length, icon: 'public' }]
      .concat(COUNTRIES.map((c) => ({
        key: c.key, label: c[state.lang],
        count: countWith({ industry: state.industry, country: c.key, status: state.status }).length,
        icon: null
      })));
    fillChips($('#chips-country'), ctyItems, state.country, (key) => { state.country = key; renderChips(); renderCards(); });

    // Status chips
    const stItems = [{ key: 'all', label: t('all'), count: countWith({ industry: state.industry, country: state.country, status: 'all' }).length, icon: 'apps' }]
      .concat(STATUSES.map((s) => ({
        key: s.key, label: s[state.lang],
        count: countWith({ industry: state.industry, country: state.country, status: s.key }).length,
        icon: null,
        accent: s.key
      })));
    fillChips($('#chips-status'), stItems, state.status, (key) => { state.status = key; renderChips(); renderCards(); });
  }

  function matches(d, q) {
    if (!q) return true;
    const hay = [
      d.name, d.id, d.stage || '', d.batch || '',
      d.summary?.zh, d.summary?.en, d.highlight?.zh, d.highlight?.en,
      indLabel(d.industry, 'zh'), indLabel(d.industry, 'en'),
      ctyLabel(d.country, 'zh'), ctyLabel(d.country, 'en'),
      stLabel(d.status, 'zh'), stLabel(d.status, 'en'),
    ].join(' ').toLowerCase();
    return q.toLowerCase().split(/\s+/).filter(Boolean).every((term) => hay.includes(term));
  }
  function computeFiltered() {
    filtered = DATA.filter((d) =>
      (state.industry === 'all' || d.industry === state.industry) &&
      (state.country === 'all' || d.country === state.country) &&
      (state.status === 'all' || d.status === state.status) &&
      matches(d, state.q));
  }

  function cardHTML(d, i) {
    const lang = state.lang;
    const summary = d.summary?.[lang] || d.summary?.zh || d.summary?.en || '';
    const stColor = `var(--c-${esc(d.status)})`;
    return `
      <button class="card" data-id="${esc(d.id)}" style="animation-delay:${Math.min(i, 12) * 28}ms">
        <div class="card__top">
          <span class="cat-pill" style="--cat:var(--c-${esc(d.industry)})">
            <span class="ic"></span>
            <span class="material-symbols-rounded" style="font-size:14px">${esc(indIcon(d.industry))}</span>
            ${esc(indLabel(d.industry, lang))}
          </span>
          <span class="status-pill" style="--cat:${stColor}">${esc(stLabel(d.status, lang))}</span>
        </div>
        <h3>${esc(d.name)}</h3>
        <p>${esc(summary)}</p>
        <div class="card__meta">
          <span><span class="material-symbols-rounded">place</span>${esc(ctyLabel(d.country, lang))}</span>
          ${d.batch ? `<span><span class="material-symbols-rounded">rocket_launch</span>${esc(d.batch)}</span>` : ''}
          ${d.year ? `<span><span class="material-symbols-rounded">event</span>${esc(d.year)}</span>` : ''}
        </div>
        <span class="card__cta">${t('cardCta')}<span class="material-symbols-rounded">arrow_forward</span></span>
      </button>`;
  }

  function renderCards() {
    computeFiltered();
    shown = 0;
    const grid = $('#grid');
    $('#result-count').textContent = t('results')(filtered.length);
    if (!filtered.length) {
      grid.innerHTML = `<div class="empty">
        <span class="material-symbols-rounded">search_off</span>
        <h3>${t('emptyTitle')}</h3><p>${t('emptyDesc')}</p></div>`;
      $('#load-sentinel').hidden = true;
      return;
    }
    grid.innerHTML = '';
    appendBatch();
  }
  function appendBatch() {
    const grid = $('#grid');
    const slice = filtered.slice(shown, shown + BATCH);
    const frag = document.createElement('div');
    frag.innerHTML = slice.map((d, i) => cardHTML(d, shown + i)).join('');
    Array.from(frag.children).forEach((c) => {
      c.addEventListener('click', () => openDialog(filtered.findIndex((d) => d.id === c.dataset.id)));
      grid.appendChild(c);
    });
    shown += slice.length;
    $('#load-sentinel').hidden = shown >= filtered.length;
  }

  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting) && shown < filtered.length) appendBatch();
  }, { rootMargin: '600px' });
  io.observe($('#load-sentinel'));

  /* search */
  const searchEl = $('#search');
  const clearEl = $('#search-clear');
  let searchTimer;
  searchEl.addEventListener('input', () => {
    clearEl.classList.toggle('show', !!searchEl.value);
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.q = searchEl.value.trim(); renderChips(); renderCards(); }, 120);
  });
  clearEl.addEventListener('click', () => {
    searchEl.value = ''; state.q = ''; clearEl.classList.remove('show'); renderChips(); renderCards(); searchEl.focus();
  });

  /* dialog */
  const scrim = $('#scrim');
  const dialog = $('#dialog');
  let openIndex = -1;
  let lastFocus = null;

  function sourceItems(arr) {
    return (arr || []).map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">
      <span class="material-symbols-rounded">link</span>${esc(s.title || s.url)}</a></li>`).join('');
  }

  function renderDialog() {
    const d = filtered[openIndex];
    if (!d) return;
    const lang = state.lang;
    const overview = d.summary?.[lang] || d.summary?.zh || d.summary?.en || '';
    const hl = d.highlight?.[lang] || d.highlight?.zh || d.highlight?.en || '';
    const stColor = `var(--c-${esc(d.status)})`;
    const srcUrl = d.sources && d.sources[0] && d.sources[0].url;
    dialog.innerHTML = `
      <div class="dialog__head">
        <div class="dialog__title">
          <div class="pill-row">
            <span class="cat-pill" style="--cat:var(--c-${esc(d.industry)})">
              <span class="ic"></span>
              <span class="material-symbols-rounded" style="font-size:14px">${esc(indIcon(d.industry))}</span>
              ${esc(indLabel(d.industry, lang))}
            </span>
            <span class="status-pill" style="--cat:${stColor}">${esc(stLabel(d.status, lang))}</span>
          </div>
          <h2 id="dlg-title">${esc(d.name)}</h2>
        </div>
        <button class="icon-btn ripple-host" id="dlg-close" aria-label="Close">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>
      <div class="dialog__body">
        <section>
          <h4><span class="material-symbols-rounded">info</span>${t('secOverview')}</h4>
          <p class="lead">${esc(overview)}</p>
        </section>
        ${hl ? `<section>
          <h4><span class="material-symbols-rounded">lightbulb</span>${t('secHighlights')}</h4>
          <p class="lead">${esc(hl)}</p>
        </section>` : ''}
        <section>
          <h4><span class="material-symbols-rounded">badge</span>${t('secMeta')}</h4>
          <dl class="kv-grid">
            <dt>${t('metaCountry')}</dt><dd>${esc(ctyLabel(d.country, lang))}</dd>
            <dt>${t('metaIndustry')}</dt><dd>${esc(indLabel(d.industry, lang))}</dd>
            ${d.stage ? `<dt>${t('metaStage')}</dt><dd>${esc(d.stage)}</dd>` : ''}
            ${d.batch ? `<dt>${t('metaBatch')}</dt><dd>${esc(d.batch)}</dd>` : ''}
            ${d.year  ? `<dt>${t('metaYear')}</dt><dd>${esc(d.year)}</dd>`   : ''}
            <dt>${t('metaStatus')}</dt><dd>${esc(stLabel(d.status, lang))}</dd>
          </dl>
        </section>
        ${(d.sources && d.sources.length) ? `<section>
          <h4><span class="material-symbols-rounded">menu_book</span>${t('secSources')}</h4>
          <ul class="sources">${sourceItems(d.sources)}</ul>
        </section>` : ''}
        <div class="dialog__foot">
          <a class="btn-text ripple-host" href="${esc(srcUrl || APPWORKS_URL)}" target="_blank" rel="noopener">
            <span class="material-symbols-rounded">open_in_new</span>${t('original')}
          </a>
          <div class="dialog__nav">
            <button class="btn-text ripple-host" id="dlg-prev"><span class="material-symbols-rounded">arrow_back</span>${t('prev')}</button>
            <button class="btn-text ripple-host" id="dlg-next">${t('next')}<span class="material-symbols-rounded">arrow_forward</span></button>
          </div>
        </div>
      </div>`;
    $$('.ripple-host', dialog).forEach(attachRipple);
    $('#dlg-close').addEventListener('click', closeDialog);
    $('#dlg-prev').addEventListener('click', () => openDialog((openIndex - 1 + filtered.length) % filtered.length));
    $('#dlg-next').addEventListener('click', () => openDialog((openIndex + 1) % filtered.length));
    dialog.scrollTop = 0;
  }

  function openDialog(index) {
    if (index < 0 || index >= filtered.length) return;
    const firstOpen = openIndex < 0;
    openIndex = index;
    renderDialog();
    history.replaceState(null, '', '#' + filtered[openIndex].id);
    if (firstOpen) {
      lastFocus = document.activeElement;
      scrim.hidden = false;
      requestAnimationFrame(() => scrim.classList.add('open'));
      document.body.style.overflow = 'hidden';
    }
    $('#dlg-close').focus();
  }
  function closeDialog() {
    if (openIndex < 0) return;
    openIndex = -1;
    scrim.classList.remove('open');
    document.body.style.overflow = '';
    history.replaceState(null, '', location.pathname + location.search);
    setTimeout(() => { scrim.hidden = true; }, 280);
    if (lastFocus) lastFocus.focus();
  }
  scrim.addEventListener('click', (e) => { if (e.target === scrim) closeDialog(); });
  document.addEventListener('keydown', (e) => {
    if (openIndex < 0) return;
    if (e.key === 'Escape') { closeDialog(); return; }
    if (e.key === 'Tab') {
      const f = $$('a[href], button:not([disabled])', dialog);
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !dialog.contains(active))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
      return;
    }
    if (e.key === 'ArrowLeft') openDialog((openIndex - 1 + filtered.length) % filtered.length);
    else if (e.key === 'ArrowRight') openDialog((openIndex + 1) % filtered.length);
  });

  /* init */
  $$('.ripple-host').forEach(attachRipple);

  $('#stat-companies').textContent = DATA.length;
  $('#stat-industries').textContent = INDUSTRIES.length;
  $('#stat-countries').textContent = COUNTRIES.length;
  $('#stat-ipos').textContent = DATA.filter((d) => d.status === 'ipo' || d.status === 'hectocorn' || d.status === 'decacorn').length;

  applyStaticI18n();
  renderChips();
  renderCards();

  function openFromHash() {
    let id;
    try { id = decodeURIComponent(location.hash.replace('#', '')); } catch (_) { return; }
    if (!id) { if (openIndex >= 0) closeDialog(); return; }
    if (openIndex >= 0 && filtered[openIndex] && filtered[openIndex].id === id) return;
    const idx = filtered.findIndex((d) => d.id === id);
    if (idx >= 0) openDialog(idx);
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();
