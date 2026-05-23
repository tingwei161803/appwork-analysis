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

  /* Derive AW batches from data (e.g. "AW#13", "AW#20", ...) */
  const BATCHES = (() => {
    const set = new Set();
    DATA.forEach((d) => { if (d.batch) set.add(d.batch); });
    const arr = Array.from(set);
    arr.sort((a, b) => {
      const na = parseInt(a.replace(/[^\d]/g, ''), 10) || 0;
      const nb = parseInt(b.replace(/[^\d]/g, ''), 10) || 0;
      return na - nb;
    });
    return arr.map((k) => ({ key: k, zh: k, en: k }));
  })();

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
      filtersBtn: '篩選',
      filterIndustry: '產業', filterCountry: '地區', filterStatus: '狀態', filterBatch: 'AW 屆數', all: '全部',
      axisIndustry: '產業', axisCountry: '地區', axisStatus: '狀態', axisBatch: '屆數',
      navChapters: '10 面向分析', navViz: '統計圖表', navPortfolio: '投資組合',
      chaptersTitle: '10 面向深度分析',
      chaptersSub: '從基金、團隊到主題演進，把 AppWorks 拆成可閱讀的章節。每章包含事實 + Claude 的觀察。',
      vizTitle: '投資組合統計', vizSub: '把資料集裡的產業、地區、狀態分布視覺化。',
      vizIndustry: '產業分布', vizCountry: '地區分布', vizStatus: '狀態分布',
      portfolioTitle: '投資組合圖鑑',
      portfolioSub: '每家公司可開啟詳細卡片；支援雙語切換、3 軸 + AW 屆數篩選與搜尋。',
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
      filtersBtn: 'Filters',
      filterIndustry: 'Industry', filterCountry: 'Country', filterStatus: 'Status', filterBatch: 'AW batch', all: 'All',
      axisIndustry: 'Industry', axisCountry: 'Country', axisStatus: 'Status', axisBatch: 'Batch',
      navChapters: '10 chapters', navViz: 'Charts', navPortfolio: 'Portfolio',
      chaptersTitle: 'Ten-chapter deep dive',
      chaptersSub: 'Funds, team, thesis evolution—AppWorks broken down into readable chapters. Facts plus Claude\'s observations.',
      vizTitle: 'Portfolio statistics', vizSub: 'Industry, country, and status distribution across the dataset.',
      vizIndustry: 'By industry', vizCountry: 'By country', vizStatus: 'By status',
      portfolioTitle: 'Portfolio Atlas',
      portfolioSub: 'Open any card for details; bilingual switch with 3-axis + AW batch filtering and search.',
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
    batch: 'all',
    q: '',
    filtersOpen: false,
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
    const o = { industry: state.industry, country: state.country, status: state.status, batch: state.batch, ...extra };
    return DATA.filter((d) =>
      (o.industry === 'all' || d.industry === o.industry) &&
      (o.country === 'all' || d.country === o.country) &&
      (o.status === 'all' || d.status === o.status) &&
      (o.batch === 'all' || d.batch === o.batch) &&
      matches(d, state.q)
    );
  }
  function renderChips() {
    // Industry chips
    const indItems = [{ key: 'all', label: t('all'), count: countWith({ industry: 'all' }).length, icon: 'apps' }]
      .concat(INDUSTRIES.map((c) => ({
        key: c.key, label: c[state.lang],
        count: countWith({ industry: c.key }).length,
        icon: c.icon
      })));
    fillChips($('#chips-industry'), indItems, state.industry, (key) => { state.industry = key; renderChips(); renderCards(); renderActiveFilters(); });

    // Country chips
    const ctyItems = [{ key: 'all', label: t('all'), count: countWith({ country: 'all' }).length, icon: 'public' }]
      .concat(COUNTRIES.map((c) => ({
        key: c.key, label: c[state.lang],
        count: countWith({ country: c.key }).length,
        icon: null
      })));
    fillChips($('#chips-country'), ctyItems, state.country, (key) => { state.country = key; renderChips(); renderCards(); renderActiveFilters(); });

    // Status chips
    const stItems = [{ key: 'all', label: t('all'), count: countWith({ status: 'all' }).length, icon: 'apps' }]
      .concat(STATUSES.map((s) => ({
        key: s.key, label: s[state.lang],
        count: countWith({ status: s.key }).length,
        icon: null,
        accent: s.key
      })));
    fillChips($('#chips-status'), stItems, state.status, (key) => { state.status = key; renderChips(); renderCards(); renderActiveFilters(); });

    // Batch chips (AW#1..AW#33)
    const batchItems = [{ key: 'all', label: t('all'), count: countWith({ batch: 'all' }).length, icon: 'apps' }]
      .concat(BATCHES.map((b) => ({
        key: b.key, label: b[state.lang],
        count: countWith({ batch: b.key }).length,
        icon: null
      })));
    fillChips($('#chips-batch'), batchItems, state.batch, (key) => { state.batch = key; renderChips(); renderCards(); renderActiveFilters(); });
  }

  function renderActiveFilters() {
    const items = [];
    if (state.industry !== 'all') items.push({ axis: 'industry', axisLabel: t('axisIndustry'), key: state.industry, label: indLabel(state.industry, state.lang) });
    if (state.country  !== 'all') items.push({ axis: 'country',  axisLabel: t('axisCountry'),  key: state.country,  label: ctyLabel(state.country,  state.lang) });
    if (state.status   !== 'all') items.push({ axis: 'status',   axisLabel: t('axisStatus'),   key: state.status,   label: stLabel(state.status,   state.lang) });
    if (state.batch    !== 'all') items.push({ axis: 'batch',    axisLabel: t('axisBatch'),    key: state.batch,    label: state.batch });

    const badge = $('#filter-badge');
    badge.textContent = items.length ? String(items.length) : '';
    badge.classList.toggle('has-active', items.length > 0);

    const wrap = $('#active-filters');
    wrap.innerHTML = items.map((it) => `
      <span class="active-filter-pill">
        <span class="active-filter-pill__axis">${esc(it.axisLabel)}</span>
        ${esc(it.label)}
        <button data-axis="${esc(it.axis)}" aria-label="Remove ${esc(it.label)}">
          <span class="material-symbols-rounded">close</span>
        </button>
      </span>
    `).join('');
    $$('.active-filter-pill button', wrap).forEach((b) => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        state[b.dataset.axis] = 'all';
        renderChips(); renderCards(); renderActiveFilters();
      });
    });
  }

  function applyFiltersOpen() {
    const btn = $('#filters-toggle');
    const panel = $('#filters-panel');
    btn.setAttribute('aria-expanded', String(state.filtersOpen));
    panel.hidden = !state.filtersOpen;
  }
  $('#filters-toggle').addEventListener('click', () => {
    state.filtersOpen = !state.filtersOpen;
    localStorage.setItem('aw.filtersOpen', state.filtersOpen ? '1' : '0');
    applyFiltersOpen();
  });
  state.filtersOpen = localStorage.getItem('aw.filtersOpen') === '1';

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
      (state.batch === 'all' || d.batch === state.batch) &&
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

  /* ===== Chapters ===== */
  const CHAPTERS = window.CHAPTERS || [];
  function renderChapters() {
    const wrap = $('#chapter-list');
    if (!wrap) return;
    const lang = state.lang;
    wrap.innerHTML = CHAPTERS.map((c, idx) => {
      const sectionsHtml = c.sections.map((s) => `
        <div class="chapter__section">
          <h4>${esc(s.heading[lang])}</h4>
          ${s.paragraphs[lang].map((p) => `<p>${esc(p)}</p>`).join('')}
        </div>
      `).join('');
      return `
        <article class="chapter" data-id="${esc(c.id)}" aria-expanded="false" style="--cat:var(--c-${esc(c.accent)})">
          <button class="chapter__head ripple-host" aria-controls="ch-body-${esc(c.id)}">
            <span class="chapter__icon"><span class="material-symbols-rounded">${esc(c.icon)}</span></span>
            <span class="chapter__title">
              <span class="chapter__num">CH ${String(idx + 1).padStart(2, '0')}</span>
              <h3>${esc(c.title[lang])}</h3>
              <p>${esc(c.lede[lang])}</p>
            </span>
            <span class="chapter__chev material-symbols-rounded">expand_more</span>
          </button>
          <div class="chapter__body" id="ch-body-${esc(c.id)}">
            ${sectionsHtml}
            <div class="chapter__observation">${esc(c.observation[lang])}</div>
          </div>
        </article>
      `;
    }).join('');
    $$('.chapter', wrap).forEach((el) => {
      const head = $('.chapter__head', el);
      attachRipple(head);
      head.addEventListener('click', () => {
        const open = el.getAttribute('aria-expanded') === 'true';
        el.setAttribute('aria-expanded', String(!open));
      });
    });
  }

  /* ===== Charts ===== */
  let charts = { industry: null, country: null, status: null };
  function chartColors(keys, mapper) {
    return keys.map((k) => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(mapper(k)).trim();
      return v || '#888';
    });
  }
  function renderCharts() {
    if (typeof Chart === 'undefined') return;
    Object.values(charts).forEach((c) => c && c.destroy());
    const lang = state.lang;
    const ind = INDUSTRIES.map((i) => ({ key: i.key, label: i[lang], count: DATA.filter((d) => d.industry === i.key).length })).filter((x) => x.count > 0).sort((a, b) => b.count - a.count);
    const cty = COUNTRIES.map((c) => ({ key: c.key, label: c[lang], count: DATA.filter((d) => d.country === c.key).length })).filter((x) => x.count > 0).sort((a, b) => b.count - a.count);
    const st  = STATUSES.map((s) => ({ key: s.key, label: s[lang], count: DATA.filter((d) => d.status === s.key).length, color: s.color })).filter((x) => x.count > 0);

    const onSurface = getComputedStyle(document.documentElement).getPropertyValue('--on-surface').trim();
    const onSurfVar = getComputedStyle(document.documentElement).getPropertyValue('--on-surface-variant').trim();
    const gridLine = getComputedStyle(document.documentElement).getPropertyValue('--outline-variant').trim();

    const donutOpts = {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right', labels: { color: onSurface, font: { size: 11 }, boxWidth: 10, padding: 8 } },
        tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}` } }
      },
      cutout: '55%',
    };

    charts.industry = new Chart($('#chart-industry'), {
      type: 'doughnut',
      data: { labels: ind.map((x) => x.label), datasets: [{
        data: ind.map((x) => x.count),
        backgroundColor: chartColors(ind.map((x) => x.key), (k) => `--c-${k}`),
        borderWidth: 0,
      }] },
      options: donutOpts,
    });

    charts.country = new Chart($('#chart-country'), {
      type: 'doughnut',
      data: { labels: cty.map((x) => x.label), datasets: [{
        data: cty.map((x) => x.count),
        backgroundColor: ['#0b57d0','#1a73e8','#8430ce','#d93025','#12a150','#e8710a','#00838f','#c2185b','#5e35b1','#455a64','#689f38','#f59e0b','#74777f'],
        borderWidth: 0,
      }] },
      options: donutOpts,
    });

    charts.status = new Chart($('#chart-status'), {
      type: 'bar',
      data: { labels: st.map((x) => x.label), datasets: [{
        label: 'Count',
        data: st.map((x) => x.count),
        backgroundColor: st.map((x) => x.color),
        borderRadius: 6,
      }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: onSurfVar, font: { size: 11 } }, grid: { display: false } },
          y: { ticks: { color: onSurfVar, font: { size: 11 } }, grid: { color: gridLine } },
        }
      },
    });
  }

  /* init */
  $$('.ripple-host').forEach(attachRipple);

  $('#stat-companies').textContent = DATA.length;
  $('#stat-industries').textContent = INDUSTRIES.length;
  $('#stat-countries').textContent = COUNTRIES.length;
  $('#stat-ipos').textContent = DATA.filter((d) => d.status === 'ipo' || d.status === 'hectocorn' || d.status === 'decacorn').length;

  applyStaticI18n();
  applyFiltersOpen();
  renderChips();
  renderActiveFilters();
  renderCards();
  renderChapters();
  renderCharts();

  /* Re-render chapters + charts when language or theme changes (charts depend on CSS vars). */
  const origSetLang = setLang;
  // Note: setLang already calls renderChips/renderCards; hook chapters + charts via observer on attributes.
  new MutationObserver(() => { renderChapters(); renderCharts(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'data-theme'] });

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
