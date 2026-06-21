/* AW#32 Investment Radar — interactivity
   i18n · theme/lang (shared with atlas via aw.* keys) · radar leaderboard · DD dialog */
(() => {
  'use strict';

  const META = window.AW32_META || {};
  const CTX = window.AW32_CTX || null;
  const SYN = window.AW32_SYNTHESIS || null;
  const COMPANIES = (window.AW32 || []).slice();

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (m) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

  /* ---------- Category metadata ---------- */
  const CATS = {
    saas: { zh: 'AI SaaS／自動化', en: 'AI SaaS / Automation', color: '#00897b', icon: 'smart_toy' },
    edge: { zh: 'Edge AI／晶片硬體', en: 'Edge AI / Chip Hardware', color: '#1a73e8', icon: 'memory' },
    deep: { zh: '硬科技：製造／國防', en: 'Deep Tech: Mfg / Defense', color: '#e8710a', icon: 'precision_manufacturing' },
    vert: { zh: '垂直 SaaS', en: 'Vertical SaaS', color: '#7b4fd0', icon: 'domain' },
    cons: { zh: '消費／社群', en: 'Consumer / Social', color: '#c2185b', icon: 'groups' },
    sec:  { zh: '企業安全', en: 'Enterprise Security', color: '#546e7a', icon: 'security' },
  };
  const catColor = (k) => (CATS[k] || {}).color || 'var(--primary)';
  const catLabel = (k) => (CATS[k] || {})[state.lang] || k;
  const catIcon = (k) => (CATS[k] || {}).icon || 'label';

  const DIMS = [
    { key: 'team',      zh: '團隊', en: 'Team' },
    { key: 'market',    zh: '市場', en: 'Market' },
    { key: 'moat',      zh: '護城河', en: 'Moat' },
    { key: 'traction',  zh: '牽引力', en: 'Traction' },
    { key: 'thesisFit', zh: '主軸契合', en: 'Thesis fit' },
    { key: 'gseaFit',   zh: 'GSEA 契合', en: 'GSEA fit' },
    { key: 'stageFit',  zh: '階段契合', en: 'Stage fit' },
  ];
  const CONV = {
    high:   { zh: '高信心', en: 'High' },
    medium: { zh: '中信心', en: 'Medium' },
    low:    { zh: '低信心', en: 'Low' },
  };
  const convClass = (c) => `conv-${c || 'low'}`;

  /* ---------- i18n (UI chrome) ---------- */
  const I18N = {
    zh: {
      brand: 'AW#32 投資雷達', brandSub: 'AppWorks 會 follow-on 投哪幾家？',
      backAtlas: '回圖鑑',
      eyebrow: '真實資料盡職調查 · 獨立非官方分析',
      heroTitle: 'AW#32 這 19 家，<span class="grad">AppWorks 會投誰？</span>',
      heroDesc: 'AppWorks 加速器不收股權；真正出手的是 AppWorks Funds。本頁對 AW#32 Demo Day 全部 19 家新創做真實資料盡職調查，逐家評估「Funds 後續 follow-on 投資」的機率與理由。',
      statTotal: '受評新創', statHigh: '領先標的', statCats: '產業類別', statTier1: '最高投資分',
      navMethod: '方法論', navThesis: 'AppWorks 打法', navRadar: '投資雷達排名', navCompanies: '逐家檔案', navSynthesis: '綜合觀察',
      methodTitle: '怎麼判斷「AppWorks 會不會投」', methodSub: '先把關鍵前提講清楚，再說評分方法。',
      thesisTitle: 'AppWorks Funds 現在的打法', thesisSub: '用真實資料還原基金規模、主軸與「從加速器校友裡挑誰投」的邏輯。',
      thesisOverview: '基金概況', thesisPillars: '投資主軸', thesisFollowOn: 'Follow-on 邏輯', thesisDeals: '近期出手',
      radarTitle: '投資雷達：19 家排名', radarSub: '依「Funds follow-on 投資機率」綜合分數排序。點任一列看完整盡職調查。',
      companiesTitle: '逐家盡職調查檔案', companiesSub: '依產業分類；每張卡片可開啟完整 DD 報告（團隊查核、牽引力、護城河、風險、七維評分、資料來源）。',
      synthesisTitle: '綜合觀察', synthesisSub: '把 19 家放在一起看：誰最可能被投、為什麼，以及這一屆透露的方向。',
      synTopTitle: '最可能拿到 AppWorks Funds 支票', synDistTitle: '信心分布', synVerdictTitle: '一句話總結',
      filterAll: '全部', sortLabel: '排序：', sortScore: '分數', sortAz: 'A–Z',
      cardCta: '看完整 DD', tier: 'Tier',
      ddWhat: '在做什麼', ddFit: 'AppWorks Funds 契合度', ddVerdict: '投資判斷', ddTeam: '團隊查核', ddTraction: '牽引力（真實資料）',
      ddMarket: '市場與時機', ddCompetitors: '競爭格局', ddMoat: '護城河', ddRisks: '風險', ddScores: '七維評分', ddSources: '資料來源', ddClaimed: 'Demo Day 宣稱（未驗證）',
      ddVerified: '可驗證', ddPresenter: '報告人', ddVisit: '官網', ddLinkedIn: 'LinkedIn',
      moatStrong: '強', moatMedium: '中', moatWeak: '弱',
      prev: '上一家', next: '下一家', close: '關閉',
      themeDark: '切換深色', themeLight: '切換淺色',
      footer: '本頁新創名單與 Demo Day 資料整理自 <a href="https://mattye.dev/projects/one-more-step/aw32/" target="_blank" rel="noopener">Matt Ye《One More Step》AW#32 整理</a>，盡職調查內容由各公司官網、LinkedIn 與公開報導查證。投資判斷為獨立分析，非 AppWorks 官方立場，亦非投資建議。',
    },
    en: {
      brand: 'AW#32 Investment Radar', brandSub: 'Which ones will AppWorks follow-on into?',
      backAtlas: 'Atlas',
      eyebrow: 'Real-data due diligence · independent, unofficial',
      heroTitle: 'Of these 19 AW#32 startups, <span class="grad">which will AppWorks back?</span>',
      heroDesc: "AppWorks' accelerator is equity-free; the checks come from AppWorks Funds. This page runs real-data due diligence on all 19 AW#32 Demo Day startups and scores each one's likelihood of a Funds follow-on investment.",
      statTotal: 'Startups assessed', statHigh: 'Leading picks', statCats: 'Categories', statTier1: 'Top score',
      navMethod: 'Method', navThesis: 'AppWorks playbook', navRadar: 'Radar ranking', navCompanies: 'Dossiers', navSynthesis: 'Synthesis',
      methodTitle: 'How we judge "would AppWorks invest"', methodSub: 'The key premises first, then the scoring method.',
      thesisTitle: "AppWorks Funds' current playbook", thesisSub: "Real-data reconstruction of fund size, focus, and how they pick which alumni to back.",
      thesisOverview: 'Fund overview', thesisPillars: 'Thesis pillars', thesisFollowOn: 'Follow-on logic', thesisDeals: 'Recent deals',
      radarTitle: 'Investment Radar: 19 ranked', radarSub: 'Sorted by overall Funds-follow-on likelihood. Click any row for the full dossier.',
      companiesTitle: 'Per-company DD dossiers', companiesSub: 'Grouped by category. Each card opens a full DD report — team check, traction, moat, risks, 7-dimension scores, sources.',
      synthesisTitle: 'Synthesis', synthesisSub: 'All 19 together: who is most fundable, why, and what this batch signals.',
      synTopTitle: 'Most likely to get an AppWorks Funds check', synDistTitle: 'Conviction distribution', synVerdictTitle: 'Bottom line',
      filterAll: 'All', sortLabel: 'Sort: ', sortScore: 'Score', sortAz: 'A–Z',
      cardCta: 'Full DD', tier: 'Tier',
      ddWhat: 'What they do', ddFit: 'AppWorks Funds fit', ddVerdict: 'Investment verdict', ddTeam: 'Team verification', ddTraction: 'Traction (real data)',
      ddMarket: 'Market & timing', ddCompetitors: 'Competitive landscape', ddMoat: 'Moat', ddRisks: 'Risks', ddScores: '7-dimension scores', ddSources: 'Sources', ddClaimed: 'Demo Day claim (unverified)',
      ddVerified: 'Verified', ddPresenter: 'Presenter', ddVisit: 'Website', ddLinkedIn: 'LinkedIn',
      moatStrong: 'Strong', moatMedium: 'Medium', moatWeak: 'Weak',
      prev: 'Prev', next: 'Next', close: 'Close',
      themeDark: 'Dark mode', themeLight: 'Light mode',
      footer: 'Startup roster and Demo Day data curated from <a href="https://mattye.dev/projects/one-more-step/aw32/" target="_blank" rel="noopener">Matt Ye, "One More Step" AW#32</a>; due-diligence content verified against each company\'s site, LinkedIn, and public coverage. Investment calls are independent analysis — not AppWorks\' official position, and not investment advice.',
    },
  };

  /* ---------- State ---------- */
  const state = {
    lang: localStorage.getItem('aw.lang') || 'zh',
    theme: localStorage.getItem('aw.theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    filter: 'all',
    sort: 'score',
  };
  const t = (k) => I18N[state.lang][k];
  const L = (v) => (v && typeof v === 'object' && !Array.isArray(v) && ('zh' in v || 'en' in v)) ? (v[state.lang] || v.en || v.zh || '') : (v == null ? '' : v);

  /* ---------- Theme / lang ---------- */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const dark = state.theme === 'dark';
    $('#theme-icon').textContent = dark ? 'light_mode' : 'dark_mode';
    $('#theme-toggle').title = dark ? t('themeLight') : t('themeDark');
  }
  $('#theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('aw.theme', state.theme);
    applyTheme();
  });
  function applyI18n() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-Hant' : 'en';
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $('#lang-zh').setAttribute('aria-pressed', String(state.lang === 'zh'));
    $('#lang-en').setAttribute('aria-pressed', String(state.lang === 'en'));
  }
  function setLang(lang) {
    if (lang === state.lang) return;
    state.lang = lang;
    localStorage.setItem('aw.lang', lang);
    renderAll();
  }
  $('#lang-zh').addEventListener('click', () => setLang('zh'));
  $('#lang-en').addEventListener('click', () => setLang('en'));

  /* ---------- Derived ---------- */
  const sortedByScore = () => COMPANIES.slice().sort((a, b) => b.fit.score - a.fit.score);

  /* ---------- Hero stats ---------- */
  function renderStats() {
    $('#stat-total').textContent = COMPANIES.length;
    $('#stat-high').textContent = COMPANIES.filter((c) => c.fit.conviction !== 'low').length;
    $('#stat-cats').textContent = new Set(COMPANIES.map((c) => c.cat)).size;
    $('#stat-tier1').textContent = COMPANIES.reduce((mx, c) => Math.max(mx, c.fit.score), 0);
  }

  /* ---------- Methodology ---------- */
  const METHOD_CARDS = {
    zh: [
      { icon: 'volunteer_activism', h: '加速器 ≠ 投資', p: 'AW#32 是 AppWorks「加速器」第 32 屆，加速器不收股權、不等於 AppWorks 投了錢。真正寫支票的是獨立的 AppWorks Funds（Fund I–IV）。' },
      { icon: 'filter_alt', h: '基金只精選少數', p: 'AppWorks Funds 會從每屆加速器校友中，挑出極少數最有潛力的團隊做 follow-on 股權投資。本頁要回答的就是：這 19 家裡，誰最可能進入那份名單。' },
      { icon: 'fact_check', h: '只用真實資料', p: '每家由獨立 agent 查證官網、LinkedIn 與公開報導。Demo Day 上的數字一律視為「宣稱」，查無公開佐證就明講，不捏造數據。' },
      { icon: 'scoreboard', h: '七維評分', p: '團隊、市場、護城河、牽引力、主軸契合、GSEA 契合、階段契合，每維 0–10，加權成 0–100 的 follow-on 投資機率分數與信心等級。' },
    ],
    en: [
      { icon: 'volunteer_activism', h: 'Accelerator ≠ investment', p: "AW#32 is the 32nd batch of AppWorks' equity-free Accelerator. Joining it does not mean AppWorks invested money. The checks come from the separate AppWorks Funds (Fund I–IV)." },
      { icon: 'filter_alt', h: 'Funds back only a few', p: 'AppWorks Funds follow-on into only a small minority of each batch. The question this page answers: of these 19, who is most likely to make that shortlist.' },
      { icon: 'fact_check', h: 'Real data only', p: "Each company is researched by an independent agent against its website, LinkedIn, and public coverage. Demo Day figures are treated as claims; when nothing public is found, we say so — no fabricated numbers." },
      { icon: 'scoreboard', h: '7-dimension scoring', p: 'Team, market, moat, traction, thesis fit, GSEA fit, stage fit — each 0–10, combined into a 0–100 follow-on-likelihood score and a conviction level.' },
    ],
  };
  const DISCLAIMER = {
    zh: '⚠️ 本頁為獨立、非官方的研究性分析，所有「會不會投」的判斷皆為作者推論，不代表 AppWorks 立場、不保證任何投資結果，亦非投資建議。資料截至 2026 年 6 月。',
    en: '⚠️ Independent, unofficial research. Every "would they invest" call is the author\'s inference — not AppWorks\' position, not a prediction guarantee, and not investment advice. Data as of June 2026.',
  };
  function renderMethod() {
    $('#method-grid').innerHTML = METHOD_CARDS[state.lang].map((m) => `
      <div class="method-card">
        <div class="method-card__ic"><span class="material-symbols-rounded">${m.icon}</span></div>
        <h3>${esc(m.h)}</h3><p>${esc(m.p)}</p>
      </div>`).join('');
    $('#disclaimer').textContent = DISCLAIMER[state.lang];
  }

  /* ---------- Thesis panel ---------- */
  function renderThesis() {
    const wrap = $('#thesis-wrap');
    if (!CTX) { wrap.innerHTML = ''; return; }
    const pillars = (CTX.thesisPillars || []).map((p) => `<span class="pillar-chip"><span class="material-symbols-rounded" style="font-size:16px">bolt</span>${esc(L(p))}</span>`).join('');
    const deals = (CTX.recentDeals || []).map((d) => `<li>${esc(L(d))}</li>`).join('');
    const srcs = (CTX.sources || []).slice(0, 6).map((s) => `<a class="src-chip" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>`).join('');
    wrap.innerHTML = `
      <div class="thesis-card">
        <h3><span class="material-symbols-rounded">account_balance</span>${esc(t('thesisOverview'))}</h3>
        <p>${esc(L(CTX.fundOverview))}</p>
        <h3 style="margin-top:18px"><span class="material-symbols-rounded">route</span>${esc(t('thesisFollowOn'))}</h3>
        <p>${esc(L(CTX.followOnPattern))}</p>
        ${srcs ? `<div class="src-row">${srcs}</div>` : ''}
      </div>
      <div class="thesis-card">
        <h3><span class="material-symbols-rounded">bolt</span>${esc(t('thesisPillars'))}</h3>
        <div class="thesis-pillars">${pillars}</div>
        <h3 style="margin-top:18px"><span class="material-symbols-rounded">trending_up</span>${esc(t('thesisDeals'))}</h3>
        <ul class="deal-list">${deals}</ul>
      </div>`;
  }

  /* ---------- Radar leaderboard ---------- */
  function dimBars(c) {
    return `<div class="dimbars">${DIMS.map((d) => {
      const v = (c.fit.scores[d.key] || 0) * 10;
      return `<span class="db" title="${esc(d[state.lang])}: ${c.fit.scores[d.key]}/10"><i style="height:${v}%"></i></span>`;
    }).join('')}</div>`;
  }
  function renderRadar() {
    $('#radar-legend').innerHTML = ['high', 'medium', 'low'].map((c) =>
      `<span class="lg"><span class="sw" style="background:var(--conv-${c})"></span>${esc(CONV[c][state.lang])}</span>`).join('') +
      `<span class="lg" style="opacity:.7">${state.lang === 'zh' ? '左色條＝產業' : 'Left bar = category'}</span>`;
    const rows = sortedByScore().map((c, i) => {
      const top = i < 3;
      return `<button class="radar-row" data-name="${esc(c.name)}" style="--cat:${catColor(c.cat)}">
        <span class="radar-row__rank ${top ? 'top' : ''}">${i + 1}</span>
        <span class="radar-row__main">
          <span class="radar-row__name">${esc(c.name)}
            <span class="tier-tag">${t('tier')} ${c.founderVerification.tier}</span>
            <span class="conv-badge ${convClass(c.fit.conviction)}">${esc(CONV[c.fit.conviction][state.lang])}</span>
          </span>
          <span class="radar-row__line"><span class="radar-row__cat">${esc(catLabel(c.cat))}</span> · ${esc(L(c.oneLiner))}</span>
          ${dimBars(c)}
        </span>
        <span class="radar-row__right">
          <span class="radar-row__score">${c.fit.score}<small>/100</small></span>
        </span>
      </button>`;
    }).join('');
    $('#radar-list').innerHTML = rows;
    $$('#radar-list .radar-row').forEach((r) => r.addEventListener('click', () => openDialog(r.getAttribute('data-name'))));
  }

  /* ---------- Category filter + cards ---------- */
  function renderFilter() {
    const cats = Array.from(new Set(COMPANIES.map((c) => c.cat)));
    const order = ['saas', 'edge', 'deep', 'vert', 'cons', 'sec'].filter((k) => cats.includes(k));
    const btn = (key, label, color) =>
      `<button class="chip" data-cat="${key}" aria-pressed="${state.filter === key}" ${color ? `style="--cat:${color}"` : ''}>
        ${key !== 'all' ? `<span class="material-symbols-rounded" style="color:${color}">${catIcon(key)}</span>` : ''}${esc(label)}
        <span class="count">${key === 'all' ? COMPANIES.length : COMPANIES.filter((c) => c.cat === key).length}</span>
      </button>`;
    $('#cat-filter').innerHTML = btn('all', t('filterAll')) + order.map((k) => btn(k, catLabel(k), catColor(k))).join('');
    $$('#cat-filter .chip').forEach((b) => b.addEventListener('click', () => {
      state.filter = b.getAttribute('data-cat');
      renderFilter(); renderCards();
    }));
  }
  function visibleCompanies() {
    let list = COMPANIES.slice();
    if (state.filter !== 'all') list = list.filter((c) => c.cat === state.filter);
    return list.sort((a, b) => b.fit.score - a.fit.score);
  }
  function renderCards() {
    const list = visibleCompanies();
    $('#company-grid').innerHTML = list.map((c) => {
      const col = catColor(c.cat);
      return `<div class="card" style="--cat:${col}">
        <button class="card__body" data-name="${esc(c.name)}">
          <div class="card__top">
            <span class="cat-pill"><span class="ic"></span>${esc(catLabel(c.cat))}</span>
            <span class="conv-badge ${convClass(c.fit.conviction)}">${esc(CONV[c.fit.conviction][state.lang])}</span>
          </div>
          <h3>${esc(c.name)}</h3>
          <p>${esc(L(c.oneLiner))}</p>
          <div class="card__meta">
            <span><span class="material-symbols-rounded">person</span>${esc(c.presenter)}</span>
            <span><span class="material-symbols-rounded">workspace_premium</span>${t('tier')} ${c.founderVerification.tier}</span>
          </div>
          <div class="card__score-row">
            <span class="card__score" style="color:${col}">${c.fit.score}<small>/100</small></span>
            <span class="card__cta">${esc(t('cardCta'))}<span class="material-symbols-rounded">arrow_forward</span></span>
          </div>
        </button>
      </div>`;
    }).join('');
    $$('#company-grid .card__body').forEach((b) => b.addEventListener('click', () => openDialog(b.getAttribute('data-name'))));
  }

  /* ---------- Dialog ---------- */
  let dlgName = null;
  function dialogList() { return sortedByScore(); }
  function moatBadge(m) {
    const map = { strong: ['moat-strong', t('moatStrong'), 3], medium: ['moat-medium', t('moatMedium'), 2], weak: ['moat-weak', t('moatWeak'), 1] };
    const [cls, lbl, n] = map[m.strength] || map.weak;
    const dots = [1, 2, 3].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('');
    return `<span class="moat-badge ${cls}">${esc(L(m.type))} · ${esc(lbl)} <span class="moat-dots">${dots}</span></span>`;
  }
  function scoreBars(c) {
    return `<div class="scorebars">${DIMS.map((d) => {
      const v = c.fit.scores[d.key] || 0;
      return `<div class="scorebar">
        <span class="scorebar__label">${esc(d[state.lang])}</span>
        <span class="scorebar__track"><span class="scorebar__fill" style="width:${v * 10}%"></span></span>
        <span class="scorebar__val">${v}</span>
      </div>`;
    }).join('')}</div>`;
  }
  function openDialog(name) {
    const c = COMPANIES.find((x) => x.name === name);
    if (!c) return;
    dlgName = name;
    const col = catColor(c.cat);
    const scrim = $('#scrim');
    const fv = c.founderVerification;
    const claimed = c.claimedMetric && L(c.claimedMetric) ? `<div class="card__meta" style="margin-top:8px"><span><span class="material-symbols-rounded" style="color:${col}">flaky</span>${esc(t('ddClaimed'))}: ${esc(L(c.claimedMetric))}</span></div>` : '';
    const risks = (c.risks || []).map((r) => `<li>${esc(L(r))}</li>`).join('');
    const sources = (c.sources || []).map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener"><span class="material-symbols-rounded">link</span>${esc(s.title)}</a></li>`).join('');
    $('#dialog').setAttribute('style', `--cat:${col}`);
    $('#dialog').innerHTML = `
      <div class="dialog__head">
        <div class="dialog__title">
          <div class="pill-row">
            <span class="cat-pill" style="--cat:${col}"><span class="ic"></span>${esc(catLabel(c.cat))}</span>
            <span class="conv-badge ${convClass(c.fit.conviction)}">${esc(CONV[c.fit.conviction][state.lang])}</span>
            <span class="tier-pill">${t('tier')} ${fv.tier}</span>
          </div>
          <h2 id="dlg-title">${esc(c.name)}</h2>
        </div>
        <button class="icon-btn dialog__close" id="dlg-close" aria-label="${esc(t('close'))}"><span class="material-symbols-rounded">close</span></button>
      </div>
      <div class="dialog__body">
        <div class="dlg-fit">
          <span class="dlg-fit__score" style="color:${col}">${c.fit.score}<small>/100</small></span>
          <div class="dlg-fit__meta">
            <span class="conv-badge ${convClass(c.fit.conviction)}">${esc(CONV[c.fit.conviction][state.lang])}</span>
            <span style="font-size:.8rem;color:var(--on-surface-variant)">${esc(t('ddFit'))}</span>
          </div>
          <div class="dlg-links" style="margin-left:auto">
            ${c.web ? `<a class="dlg-link" href="${esc(c.web)}" target="_blank" rel="noopener"><span class="material-symbols-rounded">public</span>${esc(t('ddVisit'))}</a>` : ''}
            ${c.li ? `<a class="dlg-link" href="${esc(c.li)}" target="_blank" rel="noopener"><span class="material-symbols-rounded">badge</span>${esc(t('ddLinkedIn'))}</a>` : ''}
          </div>
        </div>

        <section><h4><span class="material-symbols-rounded">lightbulb</span>${esc(t('ddWhat'))}</h4>
          <p class="lead">${esc(L(c.oneLiner))}</p>${claimed}</section>

        <section><h4><span class="material-symbols-rounded">gavel</span>${esc(t('ddVerdict'))}</h4>
          <div class="verdict-box">${esc(L(c.fit.verdict))}<br><br><b>${state.lang === 'zh' ? '主軸契合：' : 'Thesis fit: '}</b>${esc(L(c.fit.thesisReasoning))}</div></section>

        <section><h4><span class="material-symbols-rounded">workspace_premium</span>${esc(t('ddTeam'))}</h4>
          <p class="lead" style="margin-bottom:10px">${esc(L(fv.summary))}</p>
          <div class="verify-note"><b>${esc(t('ddVerified'))}:</b> ${esc(L(fv.verifiedClaims))}</div></section>

        <section><h4><span class="material-symbols-rounded">trending_up</span>${esc(t('ddTraction'))}</h4>
          <p class="lead">${esc(L(c.traction))}</p></section>

        <section><h4><span class="material-symbols-rounded">public</span>${esc(t('ddMarket'))}</h4>
          <p class="lead">${esc(L(c.market))}</p></section>

        <section><h4><span class="material-symbols-rounded">groups</span>${esc(t('ddCompetitors'))}</h4>
          <p class="lead">${esc(L(c.competitors))}</p></section>

        <section><h4><span class="material-symbols-rounded">shield</span>${esc(t('ddMoat'))}</h4>
          <p style="margin:0 0 10px">${moatBadge(c.moat)}</p>
          <p class="lead">${esc(L(c.moat.reasoning))}</p></section>

        ${risks ? `<section><h4><span class="material-symbols-rounded">warning</span>${esc(t('ddRisks'))}</h4><ul>${risks}</ul></section>` : ''}

        <section><h4><span class="material-symbols-rounded">scoreboard</span>${esc(t('ddScores'))}</h4>${scoreBars(c)}</section>

        ${sources ? `<section><h4><span class="material-symbols-rounded">fact_check</span>${esc(t('ddSources'))}</h4><ul class="sources">${sources}</ul></section>` : ''}

        <div class="dialog__foot">
          <span style="font-size:.78rem;color:var(--on-surface-variant)">${esc(t('ddPresenter'))}: ${esc(c.presenter)}</span>
          <div class="dialog__nav">
            <button class="btn-text" id="dlg-prev"><span class="material-symbols-rounded">arrow_back</span>${esc(t('prev'))}</button>
            <button class="btn-text" id="dlg-next">${esc(t('next'))}<span class="material-symbols-rounded">arrow_forward</span></button>
          </div>
        </div>
      </div>`;
    scrim.hidden = false;
    requestAnimationFrame(() => scrim.classList.add('open'));
    document.body.style.overflow = 'hidden';
    history.replaceState(null, '', '#' + encodeURIComponent(name));
    $('#dlg-close').addEventListener('click', closeDialog);
    $('#dlg-prev').addEventListener('click', () => step(-1));
    $('#dlg-next').addEventListener('click', () => step(1));
  }
  function step(dir) {
    const list = dialogList();
    const idx = list.findIndex((x) => x.name === dlgName);
    if (idx < 0) return;
    const next = list[(idx + dir + list.length) % list.length];
    openDialog(next.name);
  }
  function closeDialog() {
    const scrim = $('#scrim');
    scrim.classList.remove('open');
    document.body.style.overflow = '';
    dlgName = null;
    history.replaceState(null, '', location.pathname + location.search);
    setTimeout(() => { scrim.hidden = true; }, 280);
  }
  $('#scrim').addEventListener('click', (e) => { if (e.target === $('#scrim')) closeDialog(); });
  document.addEventListener('keydown', (e) => {
    if (dlgName == null) return;
    if (e.key === 'Escape') closeDialog();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  /* ---------- Synthesis ---------- */
  function renderSynthesis() {
    const wrap = $('#synthesis-wrap');
    const counts = { high: 0, medium: 0, low: 0 };
    COMPANIES.forEach((c) => { counts[c.fit.conviction]++; });
    const total = COMPANIES.length || 1;
    const convBars = ['high', 'medium', 'low'].map((k) => `
      <div class="conv-bar">
        <span>${esc(CONV[k][state.lang])}</span>
        <span class="conv-bar__track"><span class="conv-bar__fill" style="width:${(counts[k] / total) * 100}%;background:var(--conv-${k})"></span></span>
        <span style="text-align:right;font-weight:600">${counts[k]}</span>
      </div>`).join('');

    const top = (SYN && SYN.topPicks ? SYN.topPicks : sortedByScore().slice(0, 5).map((c) => ({ name: c.name, why: { zh: '', en: '' } })));
    const topList = top.map((p) => {
      const c = COMPANIES.find((x) => x.name === p.name);
      const score = c ? c.fit.score : '';
      return `<li><b>${esc(p.name)}</b>${score !== '' ? ` <span style="color:var(--on-surface-variant)">(${score})</span>` : ''}${L(p.why) ? ` — ${esc(L(p.why))}` : ''}</li>`;
    }).join('');

    const themeCards = (SYN && SYN.themes ? SYN.themes : []).map((th) => `
      <div class="syn-card">
        <h3><span class="material-symbols-rounded">insights</span>${esc(L(th.title))}</h3>
        <p>${esc(L(th.body))}</p>
      </div>`).join('');

    wrap.innerHTML = `
      <div class="syn-card">
        <h3><span class="material-symbols-rounded">emoji_events</span>${esc(t('synTopTitle'))}</h3>
        <ol>${topList}</ol>
      </div>
      <div class="syn-card">
        <h3><span class="material-symbols-rounded">donut_small</span>${esc(t('synDistTitle'))}</h3>
        <div class="conv-bars">${convBars}</div>
      </div>
      ${themeCards}
      ${SYN && SYN.verdict ? `<div class="syn-card" style="grid-column:1/-1">
        <h3><span class="material-symbols-rounded">flag</span>${esc(t('synVerdictTitle'))}</h3>
        <p style="font-size:.96rem;color:var(--on-surface)">${esc(L(SYN.verdict))}</p>
      </div>` : ''}`;
  }

  /* ---------- To top ---------- */
  const toTop = $('#to-top');
  addEventListener('scroll', () => { toTop.classList.toggle('show', scrollY > 600); }, { passive: true });
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Render all ---------- */
  function renderAll() {
    applyI18n(); applyTheme();
    renderStats(); renderMethod(); renderThesis();
    renderRadar(); renderFilter(); renderCards(); renderSynthesis();
    if (dlgName) openDialog(dlgName);
  }

  renderAll();

  // Deep-link open on load
  const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (hash && COMPANIES.some((c) => c.name === hash)) openDialog(hash);
})();
