/* AppWorks Portfolio Dataset
   Compiled from AppWorks official site, Crunchbase, news coverage, and Agent research.
   Bilingual (zh-Hant / en). Best-effort; verify before quoting.
*/

window.INDUSTRIES = [
  { key: 'web3',       zh: 'Web3 / 區塊鏈',   en: 'Web3 / Blockchain', icon: 'currency_bitcoin' },
  { key: 'ai',         zh: 'AI / 資料',        en: 'AI / Data',          icon: 'smart_toy' },
  { key: 'fintech',    zh: '金融科技',          en: 'FinTech',            icon: 'account_balance' },
  { key: 'ecommerce',  zh: '電商 / 市集',       en: 'E-commerce',         icon: 'shopping_cart' },
  { key: 'saas',       zh: 'SaaS / 企業軟體',   en: 'SaaS / Enterprise',  icon: 'apps_outage' },
  { key: 'mobility',   zh: '移動 / 共享',       en: 'Mobility',           icon: 'two_wheeler' },
  { key: 'logistics',  zh: '物流 / 配送',       en: 'Logistics',          icon: 'local_shipping' },
  { key: 'gaming',     zh: '遊戲 / 創作者',     en: 'Gaming / Creator',   icon: 'sports_esports' },
  { key: 'travel',     zh: '旅遊 / 體驗',       en: 'Travel',             icon: 'flight' },
  { key: 'social',     zh: '社群 / 媒體',       en: 'Social / Media',     icon: 'forum' },
  { key: 'healthtech', zh: '健康科技',          en: 'HealthTech',         icon: 'medical_services' },
  { key: 'edtech',     zh: '教育科技',          en: 'EdTech',             icon: 'school' },
  { key: 'proptech',   zh: '不動產科技',        en: 'PropTech',           icon: 'apartment' },
  { key: 'agritech',   zh: '農業科技',          en: 'AgriTech',           icon: 'agriculture' },
  { key: 'climate',    zh: '氣候 / 永續',       en: 'ClimateTech',        icon: 'eco' },
  { key: 'food',       zh: '餐飲 / 食品',       en: 'Food / F&B',         icon: 'restaurant' },
  { key: 'adtech',     zh: '廣告 / 行銷',       en: 'AdTech / MarTech',   icon: 'campaign' },
  { key: 'security',   zh: '資安',              en: 'CyberSecurity',      icon: 'shield' },
  { key: 'hardware',   zh: '硬體 / 機器人',     en: 'Hardware / Robotics',icon: 'precision_manufacturing' },
];

window.COUNTRIES = [
  { key: 'tw',     zh: '台灣',     en: 'Taiwan' },
  { key: 'sg',     zh: '新加坡',   en: 'Singapore' },
  { key: 'id',     zh: '印尼',     en: 'Indonesia' },
  { key: 'vn',     zh: '越南',     en: 'Vietnam' },
  { key: 'hk',     zh: '香港',     en: 'Hong Kong' },
  { key: 'my',     zh: '馬來西亞', en: 'Malaysia' },
  { key: 'ph',     zh: '菲律賓',   en: 'Philippines' },
  { key: 'kr',     zh: '韓國',     en: 'Korea' },
  { key: 'jp',     zh: '日本',     en: 'Japan' },
  { key: 'us',     zh: '美國',     en: 'United States' },
  { key: 'ca',     zh: '加拿大',   en: 'Canada' },
  { key: 'web3',   zh: '鏈上 / 跨域', en: 'Web3 / Cross-chain' },
  { key: 'global', zh: '跨國',     en: 'Global' },
];

window.STATUSES = [
  { key: 'hectocorn', zh: 'Hectocorn ($100B+)', en: 'Hectocorn ($100B+)', color: '#ff5722' },
  { key: 'decacorn',  zh: 'Decacorn ($10B+)',   en: 'Decacorn ($10B+)',   color: '#d93025' },
  { key: 'unicorn',   zh: 'Unicorn ($1B+)',     en: 'Unicorn ($1B+)',     color: '#8430ce' },
  { key: 'ipo',       zh: '已上市 IPO',          en: 'IPO',                color: '#1a73e8' },
  { key: 'acquired',  zh: '已被併購',            en: 'Acquired',           color: '#12a150' },
  { key: 'active',    zh: '營運中',              en: 'Active',             color: '#5f6368' },
  { key: 'shutdown',  zh: '已關閉',              en: 'Shutdown',           color: '#9aa0a6' },
];

/* Portfolio entries.
   id     : url-safe slug
   batch  : AppWorks Accelerator batch (e.g. "AW#13") or null
   year   : approximate investment / engagement year (number) or null
   stage  : human-readable stage label
   status : one of STATUSES keys
*/
window.PORTFOLIO = [
  // ===== Mega exits / hectocorn / decacorn =====
  {
    id: 'uber', name: 'Uber', industry: 'mobility', country: 'us',
    batch: null, year: 2010, stage: 'Early investment', status: 'hectocorn',
    summary: {
      zh: '全球最大叫車與外送平台，AppWorks 早期賭注，2019 年在紐約證交所掛牌上市。',
      en: "World's largest ride-hail and delivery platform. AppWorks' earliest mega-bet; NYSE IPO in 2019."
    },
    highlight: {
      zh: 'AppWorks 帳面上最大的退出案；單一持股推升整體投資組合估值。',
      en: "AppWorks' largest paper exit; single position lifted the entire portfolio's mark-to-market."
    },
    sources: [
      { title: 'Uber NYSE IPO – CNBC', url: 'https://www.cnbc.com/2019/05/10/uber-ipo.html' }
    ]
  },
  {
    id: 'lalamove', name: 'Lalamove (貨拉拉 / Huolala)', industry: 'logistics', country: 'hk',
    batch: null, year: 2015, stage: 'Series A+ (2015)', status: 'decacorn',
    summary: {
      zh: '亞洲最大的同城即時物流平台，2025 年於香港交易所掛牌上市。',
      en: "Asia's largest on-demand intra-city logistics platform; HKEX IPO in 2025."
    },
    highlight: {
      zh: '從香港、台灣起家，擴張至中國大陸、東南亞與拉美；AppWorks 自 Series A 起跟投至 IPO。',
      en: 'Started in Hong Kong/Taiwan; scaled to Mainland China, SEA and LatAm. AppWorks followed from Series A through IPO.'
    },
    sources: [
      { title: 'Lalamove HKEX listing – Reuters', url: 'https://www.reuters.com/world/asia-pacific/' }
    ]
  },
  {
    id: 'animoca-brands', name: 'Animoca Brands', industry: 'gaming', country: 'hk',
    batch: null, year: 2021, stage: 'Growth', status: 'decacorn',
    summary: {
      zh: '全球最大 Web3 遊戲投資與發行商，旗下持有 The Sandbox、REVV Racing 等大量 IP。',
      en: "World's largest Web3 gaming investor and publisher; portfolio includes The Sandbox, REVV Racing and many top IPs."
    },
    highlight: {
      zh: 'AppWorks Web3 旗艦投資，多次估值站上 decacorn 等級。',
      en: "AppWorks' Web3 flagship; valuation repeatedly crossed the decacorn threshold."
    },
    sources: [
      { title: 'Animoca Brands official', url: 'https://www.animocabrands.com/' }
    ]
  },
  {
    id: 'dapper-labs', name: 'Dapper Labs / Flow', industry: 'web3', country: 'ca',
    batch: null, year: 2019, stage: 'Growth (2019)', status: 'decacorn',
    summary: {
      zh: 'NBA Top Shot、CryptoKitties 開發商，並推出 Layer-1 公鏈 Flow，曾估值破百億美元。',
      en: 'Maker of NBA Top Shot and CryptoKitties; spun out Flow, a creator-friendly L1 blockchain. Valuation crossed $10B at peak.'
    },
    highlight: {
      zh: 'AppWorks 押注「鏈遊與收藏品」主題的代表作。',
      en: "Bellwether of AppWorks' bet on Web3 collectibles and on-chain gaming."
    },
    sources: [{ title: 'Dapper Labs', url: 'https://www.dapperlabs.com/' }]
  },

  // ===== IPO =====
  {
    id: '91app', name: '91APP', industry: 'saas', country: 'tw',
    batch: null, year: 2014, stage: 'Series A (2014)', status: 'ipo',
    summary: {
      zh: '台灣最大電商 SaaS，主打品牌官網 + App 全通路經營，2021 年於台灣 TPEx 上市。',
      en: "Taiwan's leading omnichannel commerce SaaS; brand-site + app stack. TPEx IPO in 2021."
    },
    highlight: {
      zh: 'Jamie Lin 與 AppWorks 早期重要投資，2025 年並購 iCHEF 強化餐飲線。',
      en: "Co-founded with Jamie Lin's early backing; acquired iCHEF in 2025 to strengthen F&B vertical."
    },
    sources: [{ title: '91APP corp', url: 'https://www.91app.com/' }]
  },
  {
    id: '17live', name: '17LIVE', industry: 'social', country: 'tw',
    batch: null, year: 2015, stage: 'Seed (2015)', status: 'ipo',
    summary: {
      zh: '亞洲領先的直播社群平台，業務橫跨台、日、港；2023 年於新加坡交易所 SPAC 上市。',
      en: "Leading live-streaming social platform across Taiwan, Japan and Hong Kong. SGX SPAC listing in 2023, Singapore's first."
    },
    highlight: {
      zh: 'AppWorks 從種子輪押注的長線案，最終於新加坡完成上市。',
      en: 'Long-cycle bet from seed; eventually listed in Singapore.'
    },
    sources: [{ title: '17LIVE Group', url: 'https://17.live/' }]
  },
  {
    id: 'kuobrothers', name: 'Kuobrothers 松果購物', industry: 'ecommerce', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'ipo',
    summary: {
      zh: '台灣社群電商松果購物，以「網路菜籃」定位 50+ 婆媽族群，TPEx 上市 (8477)。',
      en: "Taiwanese social commerce brand 'PCone' targeting 50+ female demographics. Listed on TPEx (8477)."
    },
    highlight: { zh: 'AppWorks 早期台灣電商命中案之一。', en: 'One of AppWorks early Taiwan e-commerce hits.' },
    sources: [{ title: 'Kuobrothers TPEx', url: 'https://www.tpex.org.tw/' }]
  },
  {
    id: 'gamesparcs', name: 'GameSparcs / Pcone', industry: 'gaming', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'ipo',
    summary: {
      zh: '台灣遊戲與電商集團，已於台灣資本市場掛牌。',
      en: 'Taiwanese gaming & commerce group; listed in Taiwan.'
    },
    highlight: { zh: '', en: '' },
    sources: []
  },

  // ===== Unicorns / active stars =====
  {
    id: 'carousell', name: 'Carousell', industry: 'ecommerce', country: 'sg',
    batch: null, year: 2018, stage: 'Series C (2018)', status: 'unicorn',
    summary: {
      zh: '東南亞最大 C2C 二手交易市集，新加坡獨角獸（估值 ~US$1.1B）。',
      en: "SEA's largest C2C marketplace; Singapore unicorn (~US$1.1B valuation)."
    },
    highlight: { zh: 'AppWorks Series C 跟投，是其 SEA 戰略代表作。', en: 'Followed in Series C; cornerstone of AppWorks SEA strategy.' },
    sources: [{ title: 'Carousell', url: 'https://carousell.com/' }]
  },
  {
    id: 'shopback', name: 'ShopBack', industry: 'fintech', country: 'sg',
    batch: 'AW#13', year: 2017, stage: 'AW#13 / Series A (2017)', status: 'unicorn',
    summary: {
      zh: '亞太最大的現金回饋與消費獎勵平台，覆蓋 12 國市場。',
      en: "APAC's leading cashback and rewards platform, operating in 12 markets."
    },
    highlight: { zh: '從 AW#13 走向獨角獸，是加速器到 VC 跟投模型的代表成功案。', en: 'Accelerator AW#13 → unicorn; classic case for the accelerator-to-VC flywheel.' },
    sources: [{ title: 'ShopBack', url: 'https://www.shopback.com/' }]
  },
  {
    id: 'tiki', name: 'Tiki', industry: 'ecommerce', country: 'vn',
    batch: null, year: 2021, stage: 'Growth (2021)', status: 'unicorn',
    summary: {
      zh: '越南前三大電商平台，提供商品、影音與金融服務的多角化生態系。',
      en: "Vietnam's top-3 e-commerce platform; diversified into media and financial services."
    },
    highlight: { zh: 'AppWorks 在越南最重要的單一押注。', en: "AppWorks' single largest bet in Vietnam." },
    sources: [{ title: 'Tiki', url: 'https://tiki.vn/' }]
  },
  {
    id: 'dcard', name: 'Dcard 狄卡', industry: 'social', country: 'tw',
    batch: null, year: 2020, stage: 'Series C (2020)', status: 'unicorn',
    summary: {
      zh: '台灣最大年輕世代社群論壇，月活破千萬，已跨向電商與直播服務。',
      en: "Taiwan's largest Gen-Z social platform with 10M+ MAU; expanded into commerce and live streaming."
    },
    highlight: { zh: 'AppWorks 領投 Series C，協助 Dcard 從社群跨入商業變現。', en: 'AppWorks led Series C; helped Dcard scale from community to commerce.' },
    sources: [{ title: 'Dcard', url: 'https://www.dcard.tw/' }]
  },

  // ===== Active stars - Web3 =====
  {
    id: 'pendle', name: 'Pendle Finance', industry: 'web3', country: 'sg',
    batch: 'AW#20', year: 2021, stage: 'AW#20 (2021)', status: 'active',
    summary: {
      zh: '主打收益拆分與交易的 DeFi 協議，TVL 多次破數十億美元。',
      en: 'DeFi protocol for yield tokenization and trading; TVL has exceeded multi-billion USD.'
    },
    highlight: { zh: 'AppWorks Web3 旗艦命中案，源自 AW#20 加速器。', en: "AppWorks' Web3 flagship hit; came from AW#20 accelerator." },
    sources: [{ title: 'Pendle Finance', url: 'https://www.pendle.finance/' }]
  },
  {
    id: 'xrex', name: 'XREX', industry: 'web3', country: 'tw',
    batch: 'AW#17', year: 2018, stage: 'AW#17 (2018)', status: 'active',
    summary: {
      zh: '聚焦新興市場跨境支付與美元穩定幣交易的加密金融機構。',
      en: 'Crypto-fiat exchange for emerging-market merchants and cross-border USD settlement.'
    },
    highlight: { zh: '台灣本土 Web3 領先者，創辦人黃耀文。', en: 'Taiwan-based Web3 leader founded by Wayne Huang.' },
    sources: [{ title: 'XREX', url: 'https://xrex.io/' }]
  },
  {
    id: 'blocto', name: 'Portto / Blocto', industry: 'web3', country: 'tw',
    batch: 'AW#19', year: 2021, stage: 'AW#19 (2021)', status: 'active',
    summary: {
      zh: '台灣最大加密貨幣錢包與 dApp 入口，原生支援 Flow、Aptos 等多鏈。',
      en: "Taiwan's leading crypto wallet and dApp gateway; multi-chain across Flow, Aptos and more."
    },
    highlight: { zh: 'AppWorks Web3 矩陣中的錢包代表。', en: "AppWorks' wallet flagship in its Web3 portfolio." },
    sources: [{ title: 'Blocto', url: 'https://blocto.io/' }]
  },
  {
    id: 'straitsx', name: 'StraitsX', industry: 'fintech', country: 'sg',
    batch: 'AW#21', year: 2020, stage: 'AW#21', status: 'active',
    summary: {
      zh: '新加坡發行 XSGD/XIDR 等亞洲法幣穩定幣的基礎設施公司。',
      en: 'Singapore issuer of Asian fiat-backed stablecoins (XSGD, XIDR); payments rails operator.'
    },
    highlight: { zh: '東南亞穩定幣市場龍頭。', en: 'SEA stablecoin market leader.' },
    sources: [{ title: 'StraitsX', url: 'https://www.straitsx.com/' }]
  },
  {
    id: 'flow', name: 'Flow (Blockchain)', industry: 'web3', country: 'web3',
    batch: null, year: 2019, stage: 'Token (2019)', status: 'active',
    summary: { zh: '由 Dapper Labs 衍生的 L1 公鏈，主打消費者與 NFT 應用。', en: 'L1 blockchain spun out from Dapper Labs; consumer- and NFT-first.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'likecoin', name: 'LikeCoin', industry: 'web3', country: 'hk',
    batch: 'AW#18', year: 2018, stage: 'AW#18', status: 'active',
    summary: { zh: '基於 Cosmos 的去中心化內容創作與授權網路。', en: 'Cosmos-based decentralized content authorship and licensing network.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'signalplus', name: 'SignalPlus', industry: 'web3', country: 'web3',
    batch: null, year: 2024, stage: 'Series B (2024)', status: 'active',
    summary: { zh: '加密衍生品交易與分析平台。', en: 'Crypto derivatives trading and analytics platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'grvt', name: 'GRVT', industry: 'web3', country: 'web3',
    batch: null, year: 2023, stage: '2023', status: 'active',
    summary: { zh: '混合式去中心化衍生品交易所。', en: 'Hybrid decentralized derivatives exchange.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'tally', name: 'Tally', industry: 'web3', country: 'web3',
    batch: null, year: 2025, stage: 'Series A (2025)', status: 'active',
    summary: { zh: 'DAO 治理與投票協議。', en: 'DAO governance and voting protocol.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'karpatkey', name: 'Karpatkey', industry: 'web3', country: 'web3',
    batch: null, year: 2024, stage: 'Token (2024)', status: 'active',
    summary: { zh: '專業 DeFi 國庫管理服務商。', en: 'Professional DeFi treasury management firm.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'hubble', name: 'Hubble Protocol', industry: 'web3', country: 'web3',
    batch: null, year: 2022, stage: 'Strategy (2022)', status: 'active',
    summary: { zh: 'Solana 生態借貸與穩定幣協議。', en: 'Solana-native lending and stablecoin protocol.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'dappio', name: 'Dappio', industry: 'web3', country: 'web3',
    batch: null, year: 2022, stage: '2022', status: 'active',
    summary: { zh: 'Solana DeFi 收益聚合協議。', en: 'Solana DeFi yield aggregator.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'teahouse', name: 'Teahouse Finance', industry: 'web3', country: 'tw',
    batch: 'AW#17', year: 2021, stage: 'AW#17 (2021)', status: 'active',
    summary: { zh: '主動式 DeFi 流動性管理協議，創辦人來自台灣。', en: 'Active DeFi liquidity management protocol founded in Taiwan.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'xyfinance', name: 'XY.Finance', industry: 'web3', country: 'tw',
    batch: 'AW#20', year: 2021, stage: 'AW#20 (2021)', status: 'active',
    summary: { zh: '跨鏈聚合與資產橋接協議。', en: 'Cross-chain aggregation and asset bridge protocol.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'tonx', name: 'TONX', industry: 'web3', country: 'web3',
    batch: 'AW#16', year: 2024, stage: 'AW#16 (2024)', status: 'active',
    summary: { zh: 'TON 公鏈基礎設施供應商。', en: 'Infrastructure provider on the TON blockchain.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'stablelab', name: 'StableLab', industry: 'web3', country: 'web3',
    batch: null, year: 2023, stage: 'Seed (2023)', status: 'active',
    summary: { zh: '專業 DAO 治理代表服務商。', en: 'Professional DAO governance delegation service.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'autonomy', name: 'Autonomy Network', industry: 'web3', country: 'web3',
    batch: 'AW#23', year: 2021, stage: 'AW#23 (2021)', status: 'active',
    summary: { zh: '智能合約自動化執行協議。', en: 'Smart contract automation protocol.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'teleportdao', name: 'TeleportDAO', industry: 'web3', country: 'web3',
    batch: null, year: 2021, stage: 'Seed (2021)', status: 'active',
    summary: { zh: 'Bitcoin 與 EVM 之間的跨鏈橋接。', en: 'Cross-chain bridge between Bitcoin and EVM ecosystems.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'splinterlands', name: 'Splinterlands', industry: 'gaming', country: 'us',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '老牌區塊鏈卡牌對戰遊戲。', en: 'Veteran blockchain trading-card battler.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'random-games', name: 'Random Games (Unioverse)', industry: 'gaming', country: 'web3',
    batch: null, year: 2023, stage: 'Seed-3 (2023)', status: 'active',
    summary: { zh: '可互通的 IP 區塊鏈遊戲宇宙。', en: 'Interoperable IP-driven Web3 gaming universe.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'worldspark', name: 'WorldSpark Studios', industry: 'gaming', country: 'web3',
    batch: null, year: 2022, stage: 'Bridge (2022)', status: 'active',
    summary: { zh: '區塊鏈 MOBA 遊戲開發商。', en: 'Web3 MOBA game studio.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'almanak', name: 'Almanak', industry: 'web3', country: 'web3',
    batch: null, year: 2025, stage: 'Seed (2025)', status: 'active',
    summary: { zh: '結合 AI 與 DeFi 的策略執行平台，2025/8 完成 US$8.45M seed。', en: 'AI-powered DeFi strategy platform; raised $8.45M seed in Aug 2025.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'nobi', name: 'NOBI', industry: 'web3', country: 'id',
    batch: null, year: 2022, stage: 'Seed (2022)', status: 'active',
    summary: { zh: '印尼加密貨幣理財與借貸 App。', en: 'Indonesia crypto wealth and lending app.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'kikitrade', name: 'Kikitrade', industry: 'web3', country: 'hk',
    batch: null, year: 2021, stage: '2021', status: 'active',
    summary: { zh: '社群型加密貨幣交易 App。', en: 'Social crypto trading app.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'sanctum', name: 'Sanctum', industry: 'web3', country: 'web3',
    batch: null, year: 2026, stage: 'Strategic (2026)', status: 'active',
    summary: { zh: 'Solana 液態質押 (LST) 基礎設施，AppWorks 最新公開的投資之一。', en: 'Solana liquid staking infrastructure; among AppWorks most recent disclosed bets.' },
    highlight: { zh: '創辦人 FP Lee 是 AppWorks 押注的長線玩家。', en: 'Founder FP Lee is the long-cycle founder AppWorks bet on.' },
    sources: [{ title: 'Why We Invested: Sanctum', url: 'https://appworks.tw/why-we-invested-fp-lee-co-founder-ceo-of-sanctum/' }]
  },

  // ===== Active - AI =====
  {
    id: 'nitra', name: 'Nitra', industry: 'ai', country: 'us',
    batch: null, year: 2026, stage: 'Series A (2026)', status: 'active',
    summary: { zh: '面向醫療診所的 AI 金融與營運平台。', en: 'AI-powered financial and operations platform for healthcare clinics.' },
    highlight: { zh: '創辦人 Tim Hwang 為連續創業者（前 FiscalNote）。', en: 'Founded by repeat entrepreneur Tim Hwang (previously FiscalNote).' },
    sources: [{ title: 'Why We Invested: Nitra', url: 'https://appworks.tw/why-we-invested-tim-hwang-co-founder-ceo-of-nitra/' }]
  },
  {
    id: 'innowave', name: 'Innowave Tech', industry: 'ai', country: 'tw',
    batch: 'AW#32', year: 2025, stage: 'AW#32', status: 'active',
    summary: { zh: '為半導體製造業打造的工業 AI。', en: 'Industrial AI for semiconductor manufacturing.' },
    highlight: { zh: 'AppWorks Manufacturing AI 主題的代表案。', en: "Showcase of AppWorks' Manufacturing AI thesis." },
    sources: []
  },
  {
    id: 'raccoon-ai', name: 'Raccoon AI', industry: 'ai', country: 'tw',
    batch: 'AW#13', year: 2026, stage: 'Pre-A (2026)', status: 'active',
    summary: { zh: 'AI 客服與電話自動化解決方案。', en: 'AI customer service and voice automation.' },
    highlight: { zh: '2026/1 最新揭露的投資之一。', en: "Among AppWorks' latest disclosed investments (Jan 2026)." },
    sources: []
  },
  {
    id: 'aihay', name: 'AI HAY', industry: 'ai', country: 'vn',
    batch: null, year: 2023, stage: 'Pre-A (2023)', status: 'active',
    summary: { zh: '越南本地化 AI 問答與知識平台。', en: 'Vietnamese-localized AI Q&A and knowledge platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'bering-lab', name: 'Bering Lab', industry: 'ai', country: 'kr',
    batch: 'AW#31', year: 2024, stage: 'AW#31', status: 'active',
    summary: { zh: '專注法律與專業文件的 AI 翻譯服務。', en: 'AI translation specialized in legal and professional documents.' },
    highlight: { zh: 'AppWorks Korea Accelerator (KVIC 合作) 代表案。', en: 'Showcase from the AppWorks × KVIC Korean cohort.' },
    sources: []
  },
  {
    id: 'groundup', name: 'Groundup.ai', industry: 'ai', country: 'sg',
    batch: 'AW#27', year: 2023, stage: 'AW#27', status: 'active',
    summary: { zh: '工業環境音訊 AI 分析。', en: 'Industrial audio-AI analytics for predictive maintenance.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'soopahgenius', name: 'SoopahGenius', industry: 'ai', country: 'us',
    batch: 'AW#20', year: 2021, stage: 'AW#20', status: 'active',
    summary: { zh: '生成式 AI 影音內容工具。', en: 'Generative AI video creation tools.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'deep-sentinel', name: 'Deep Sentinel', industry: 'ai', country: 'us',
    batch: null, year: 2018, stage: 'Series A (2018)', status: 'active',
    summary: { zh: '結合 AI 與真人遠端防護的家用安全系統。', en: 'AI-enhanced home security with live human guards.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'omo-protocol', name: 'Omo Protocol', industry: 'ai', country: 'web3',
    batch: null, year: 2025, stage: 'Seed (2025)', status: 'active',
    summary: { zh: 'AI Agent 與智能合約間的協調協議。', en: 'Coordination protocol between AI agents and smart contracts.' },
    highlight: { zh: 'AppWorks Agentic AI 投資主題的代表案。', en: "Representative bet on AppWorks' agentic-AI thesis." },
    sources: []
  },
  {
    id: 'migo', name: 'Migo', industry: 'ai', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣會員資料分析 SaaS。', en: 'Taiwan customer data platform / member analytics SaaS.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== FinTech =====
  {
    id: 'cake', name: 'Cake', industry: 'fintech', country: 'vn',
    batch: 'AW#14', year: 2014, stage: 'AW#14', status: 'active',
    summary: { zh: '越南最大的數位銀行之一。', en: "One of Vietnam's largest digital banks." },
    highlight: { zh: 'AppWorks 在越南金融科技的代表案。', en: "AppWorks' flagship FinTech bet in Vietnam." },
    sources: []
  },
  {
    id: 'pace', name: 'Pace', industry: 'fintech', country: 'sg',
    batch: null, year: 2021, stage: 'Series A (2021)', status: 'active',
    summary: { zh: '東南亞先買後付 (BNPL) 服務。', en: 'Southeast Asia buy-now-pay-later service.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'qoala', name: 'Qoala', industry: 'fintech', country: 'id',
    batch: null, year: 2022, stage: 'Series B (2022)', status: 'active',
    summary: { zh: '印尼領先 InsurTech，主打小額保險與分銷網絡。', en: 'Indonesia leading InsurTech focusing on micro-insurance distribution.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'capbay', name: 'CapBay', industry: 'fintech', country: 'my',
    batch: 'AW#29', year: 2022, stage: 'AW#29', status: 'active',
    summary: { zh: '馬來西亞第一供應鏈金融平台。', en: "Malaysia's #1 SME supply-chain financing platform." },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'heymax', name: 'HeyMax', industry: 'fintech', country: 'sg',
    batch: 'AW#31', year: 2024, stage: 'AW#31', status: 'active',
    summary: { zh: '新加坡旅遊獎勵與點數平台，是 SEA 成長最快的金融科技之一。', en: "One of SEA's fastest-growing travel rewards/points platforms." },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'emq', name: 'EMQ', industry: 'fintech', country: 'hk',
    batch: null, year: 2017, stage: 'Series A (2017)', status: 'active',
    summary: { zh: '亞洲跨境匯款基礎設施。', en: 'Asia cross-border remittance infrastructure.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'infina', name: 'Infina', industry: 'fintech', country: 'vn',
    batch: null, year: 2022, stage: 'SAFE (2022)', status: 'active',
    summary: { zh: '越南個人投資理財 App。', en: 'Vietnamese personal investing app.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== Logistics / Mobility =====
  {
    id: 'wemo', name: 'WeMo Scooter', industry: 'mobility', country: 'tw',
    batch: 'AW#12', year: 2015, stage: 'AW#12 / Series A (2020)', status: 'active',
    summary: { zh: '台灣首家電動機車共享平台。', en: "Taiwan's first electric scooter sharing platform." },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'beam', name: 'Beam Mobility', industry: 'mobility', country: 'sg',
    batch: null, year: 2020, stage: 'Series A (2020)', status: 'active',
    summary: { zh: '東南亞主要微移動 (電動滑板車) 共享品牌。', en: 'Major SEA micro-mobility (e-scooter sharing) brand.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'kargo', name: 'Kargo', industry: 'logistics', country: 'id',
    batch: null, year: 2022, stage: 'Pre-Series B (2022)', status: 'active',
    summary: { zh: '印尼貨運與物流數位化平台。', en: 'Indonesian freight and logistics marketplace.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'transtrack', name: 'TransTRACK', industry: 'logistics', country: 'id',
    batch: 'AW#28', year: 2024, stage: 'AW#28 / Series A (2024)', status: 'active',
    summary: { zh: '印尼車隊管理 SaaS。', en: 'Indonesian fleet management SaaS.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'uspace', name: 'USPACE', industry: 'proptech', country: 'tw',
    batch: 'AW#18', year: 2018, stage: 'AW#18', status: 'active',
    summary: { zh: '台灣智慧停車生態系，與 Taiwan Mobile (MyCharge) 跨業合作。', en: 'Taiwan smart-parking ecosystem; partnered with Taiwan Mobile (MyCharge).' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'soul-parking', name: 'Soul Parking', industry: 'proptech', country: 'id',
    batch: null, year: 2024, stage: 'Series A2 (2024)', status: 'active',
    summary: { zh: '印尼智慧停車營運商。', en: 'Indonesian smart parking operator.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== E-commerce / Marketplace =====
  {
    id: 'kkday', name: 'KKday', industry: 'travel', country: 'tw',
    batch: null, year: 2016, stage: 'Series A (2016)', status: 'active',
    summary: { zh: '泛亞洲體驗旅遊預訂平台，覆蓋 90+ 國家。', en: 'Pan-Asia experience-travel marketplace operating in 90+ countries.' },
    highlight: { zh: 'AppWorks 從 Series A 開始的台灣旅遊獨角獸候選。', en: 'Taiwanese unicorn candidate backed from Series A.' },
    sources: [{ title: 'KKday', url: 'https://www.kkday.com/' }]
  },
  {
    id: 'pinkoi', name: 'Pinkoi', industry: 'ecommerce', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '亞洲設計商品電商平台。', en: 'Asia marketplace for designer goods.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'popchill', name: 'PopChill', industry: 'ecommerce', country: 'tw',
    batch: null, year: 2022, stage: 'Pre-A (2022)', status: 'active',
    summary: { zh: '時尚二手交易平台。', en: 'Fashion second-hand marketplace.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'tinvio', name: 'Tinvio', industry: 'ecommerce', country: 'sg',
    batch: null, year: 2021, stage: 'Series A (2021)', status: 'active',
    summary: { zh: '東南亞 B2B 餐飲供應鏈商務平台。', en: 'SEA B2B commerce platform for F&B supply chains.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'iseller', name: 'iSeller', industry: 'saas', country: 'id',
    batch: null, year: 2021, stage: 'Pre-B (2021)', status: 'active',
    summary: { zh: '印尼商家全通路 POS 與電商系統。', en: 'Indonesian omnichannel POS + commerce SaaS.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'mobix', name: 'Mobix', industry: 'ecommerce', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣電商解決方案。', en: 'Taiwan e-commerce solution.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'basic-space', name: 'Basic.Space', industry: 'ecommerce', country: 'sg',
    batch: null, year: 2021, stage: '2021', status: 'active',
    summary: { zh: '結合社群與 NFT 的數位市集。', en: 'Social + NFT digital marketplace.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'jiraffe', name: 'Jiraffe', industry: 'ecommerce', country: 'jp',
    batch: null, year: 2024, stage: '2024', status: 'active',
    summary: { zh: '日本卡牌遊戲 (TCG) 收藏與交易平台。', en: 'Japan TCG (trading card game) marketplace.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== SaaS / Vertical =====
  {
    id: 'omnichat', name: 'Omnichat', industry: 'saas', country: 'hk',
    batch: 'AW#16', year: 2020, stage: 'AW#16 / Seed (2020)', status: 'active',
    summary: { zh: '香港起家的全通路訊息行銷自動化 SaaS。', en: 'Hong Kong-origin omnichannel messaging automation SaaS.' },
    highlight: { zh: '從香港擴張至台灣與東南亞客戶。', en: 'Expanded from HK to Taiwan and SEA enterprise clients.' },
    sources: []
  },
  {
    id: 'newsleopard', name: 'NewsLeopard 電子豹', industry: 'adtech', country: 'tw',
    batch: 'AW#4', year: 2016, stage: 'AW#4 / Seed (2016)', status: 'active',
    summary: { zh: '台灣領先的 EDM/Email 行銷服務。', en: "Taiwan's leading email marketing service." },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'tagtoo', name: 'Tagtoo', industry: 'adtech', country: 'tw',
    batch: 'AW#1', year: 2010, stage: 'AW#1', status: 'active',
    summary: { zh: 'AppWorks 第一屆校友，以再行銷與 AI 廣告為主。', en: "AppWorks' first-batch alumnus; retargeting and AI ads." },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'fashionguide', name: 'FashionGuide', industry: 'ecommerce', country: 'tw',
    batch: null, year: 2016, stage: '2016', status: 'active',
    summary: { zh: '台灣美妝口碑社群平台。', en: 'Taiwanese beauty community and reviews platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'intowow', name: 'Intowow', industry: 'adtech', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '影音廣告技術公司。', en: 'Video advertising technology company.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'authme', name: 'Authme', industry: 'security', country: 'tw',
    batch: null, year: 2022, stage: 'Seed (2022)', status: 'active',
    summary: { zh: '台灣身分驗證 (eKYC) 與資安服務。', en: 'Taiwan eKYC and cybersecurity service.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'cyber-sierra', name: 'Cyber Sierra', industry: 'security', country: 'sg',
    batch: null, year: 2021, stage: '2021', status: 'active',
    summary: { zh: '新加坡 GRC + Cybersecurity 平台。', en: 'Singapore GRC and cybersecurity platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'botsync', name: 'Botsync', industry: 'hardware', country: 'sg',
    batch: null, year: 2024, stage: 'Series A (2024)', status: 'active',
    summary: { zh: '新加坡工業機器人與自動化解決方案。', en: 'Singapore industrial robotics & automation.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== Health / Edu / Other verticals =====
  {
    id: 'docosan', name: 'Docosan', industry: 'healthtech', country: 'vn',
    batch: 'AW#21', year: 2020, stage: 'AW#21', status: 'active',
    summary: { zh: '越南醫師預約與健康管理平台。', en: 'Vietnamese doctor booking and healthcare platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'primaku', name: 'PrimaKu', industry: 'healthtech', country: 'id',
    batch: null, year: 2022, stage: 'Pre-A (2022)', status: 'active',
    summary: { zh: '印尼育兒與家庭健康 App。', en: 'Indonesian parenting and family health app.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'amo', name: 'AMO', industry: 'healthtech', country: 'tw',
    batch: null, year: 2022, stage: 'Pre-C (2022)', status: 'active',
    summary: { zh: '台灣牙科 / 醫療器材公司。', en: 'Taiwanese dental/medical-device company.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'ihealth', name: 'iHealth 健康優先', industry: 'healthtech', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣藥品配送與健康服務。', en: 'Taiwan pharmacy delivery and health services.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'pintar', name: 'Pintar', industry: 'edtech', country: 'id',
    batch: null, year: 2019, stage: 'Series C (2019)', status: 'active',
    summary: { zh: '印尼線上學習平台。', en: 'Indonesian online learning platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'infradigital', name: 'InfraDigital', industry: 'edtech', country: 'id',
    batch: null, year: 2019, stage: 'Seed (2019)', status: 'active',
    summary: { zh: '印尼教育機構數位化金流。', en: 'Indonesian school payments and digitization.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'eden-farm', name: 'Eden Farm', industry: 'agritech', country: 'id',
    batch: null, year: 2021, stage: 'Series A (2021)', status: 'active',
    summary: { zh: '印尼產地直送農產品 B2B 平台。', en: 'Indonesian B2B farm-to-table produce platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'rekosistem', name: 'Rekosistem', industry: 'climate', country: 'id',
    batch: null, year: 2025, stage: 'Series A (2025)', status: 'active',
    summary: { zh: '印尼廢棄物管理與資源循環。', en: 'Indonesian waste management and circular-economy startup.' },
    highlight: { zh: 'AppWorks 2025 年揭露的氣候科技投資。', en: "AppWorks' 2025 climate-tech bet." },
    sources: []
  },
  {
    id: 'aonic', name: 'Aonic', industry: 'agritech', country: 'my',
    batch: 'AW#30', year: 2024, stage: 'AW#30', status: 'active',
    summary: { zh: '馬來西亞無人機農噴與服務商。', en: 'Malaysian drone agritech and services.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'jala', name: 'JALA', industry: 'agritech', country: 'id',
    batch: 'AW#30', year: 2024, stage: 'AW#30', status: 'active',
    summary: { zh: '印尼蝦類養殖 IoT 與資料平台。', en: 'Indonesian aquaculture IoT and analytics for shrimp farming.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'techcoop', name: 'TechCoop', industry: 'agritech', country: 'vn',
    batch: null, year: 2024, stage: 'Series A (2024)', status: 'active',
    summary: { zh: '越南農業數位化平台。', en: 'Vietnamese agritech digital platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'travelio', name: 'Travelio', industry: 'proptech', country: 'id',
    batch: null, year: 2022, stage: 'Series C (2022)', status: 'active',
    summary: { zh: '印尼月租與短租公寓平台。', en: 'Indonesian monthly/short-stay apartment platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'amoda', name: 'AMODA', industry: 'proptech', country: 'id',
    batch: null, year: 2025, stage: 'Pre-A (2025)', status: 'active',
    summary: { zh: '印尼建材與工程數位採購。', en: 'Indonesian construction-tech procurement platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'yummy', name: 'Yummy Corp', industry: 'food', country: 'id',
    batch: null, year: 2020, stage: 'Series B (2020)', status: 'active',
    summary: { zh: '印尼最大雲端廚房集團。', en: "Indonesia's largest cloud-kitchen group." },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'dotdot', name: 'DotDot 點點全球', industry: 'food', country: 'tw',
    batch: 'AW#10', year: 2024, stage: 'AW#10 / Series A (2024)', status: 'active',
    summary: { zh: '台灣咖啡與飲品支付會員系統。', en: 'Taiwanese F&B payments and membership system.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'happ', name: 'Happ.', industry: 'proptech', country: 'tw',
    batch: 'AW#9', year: 2018, stage: 'AW#9 / Seed (2018)', status: 'active',
    summary: { zh: '台灣物業管理 SaaS。', en: 'Taiwanese property management SaaS.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'eztable', name: 'EZTABLE', industry: 'food', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣老牌餐廳訂位平台。', en: 'Veteran Taiwanese restaurant booking platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== Active - smaller / regional =====
  {
    id: 'stanly', name: 'Stanly', industry: 'social', country: 'ph',
    batch: 'AW#23', year: 2024, stage: 'AW#23 / Pre-A (2024)', status: 'active',
    summary: { zh: '菲律賓粉絲社群應用。', en: 'Philippine fan community app.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'clout-kitchen', name: 'Clout Kitchen', industry: 'gaming', country: 'ph',
    batch: null, year: 2024, stage: 'Pre-Seed (2024)', status: 'active',
    summary: { zh: '菲律賓內容創作者與遊戲業者社群。', en: 'Philippine creator + gaming community platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'helix', name: 'Helix (Hypersonic Labs)', industry: 'gaming', country: 'jp',
    batch: null, year: 2024, stage: 'Series A (2024)', status: 'active',
    summary: { zh: '日本手機遊戲開發商。', en: 'Japanese mobile game studio.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'concept-art', name: 'Concept Art House', industry: 'gaming', country: 'hk',
    batch: null, year: 2021, stage: '2021', status: 'active',
    summary: { zh: '遊戲美術外包與 NFT 工作室。', en: 'Game art outsourcing + NFT studio.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'bythen', name: 'Bythen', industry: 'gaming', country: 'id',
    batch: null, year: 2024, stage: 'Pre-seed (2024)', status: 'active',
    summary: { zh: '印尼 AI + 遊戲化娛樂新創。', en: 'Indonesian AI-driven gaming/entertainment startup.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'blokid', name: 'BlokID', industry: 'adtech', country: 'us',
    batch: null, year: 2022, stage: 'Seed (2022)', status: 'active',
    summary: { zh: '結合區塊鏈的廣告身分識別工具。', en: 'Blockchain-based adtech identity solution.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'figment', name: 'Figment', industry: 'web3', country: 'ca',
    batch: null, year: 2021, stage: '2021', status: 'active',
    summary: { zh: '加拿大領先的 Web3 質押基礎設施。', en: 'Canadian leader in Web3 staking infrastructure.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'techorange', name: 'TechOrange 科技橘報', industry: 'social', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣科技媒體與企業數位轉型內容服務。', en: 'Taiwanese tech media and B2B digital transformation content.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: '5945', name: '5945 呼叫師傅', industry: 'saas', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣居家服務媒合平台。', en: 'Taiwan home-services matching platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'richi', name: 'Richi 拍立省', industry: 'fintech', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣發票與信用卡回饋整合服務。', en: 'Taiwan receipt + credit-card cashback aggregator.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'goodlife', name: 'GoodLife 好生活', industry: 'ecommerce', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'active',
    summary: { zh: '台灣特賣優惠平台。', en: 'Taiwan deal/coupon platform.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== Acquired =====
  {
    id: 'ichef', name: 'iCHEF 資廚', industry: 'saas', country: 'tw',
    batch: null, year: 2016, stage: 'Series A (2016)', status: 'acquired',
    summary: { zh: '台灣餐廳 POS SaaS，服務 1 萬+ 餐廳；2025/12 被 91APP 以 US$32M 收購。', en: 'Taiwan restaurant POS SaaS serving 10,000+ restaurants; acquired by 91APP for US$32M in Dec 2025.' },
    highlight: { zh: 'AppWorks 校友互併的代表案。', en: 'A symbolic case of AppWorks alumni acquiring each other.' },
    sources: []
  },
  {
    id: 'choco-tv', name: 'CHOCO TV', industry: 'social', country: 'tw',
    batch: 'AW#2', year: 2018, stage: 'AW#2', status: 'acquired',
    summary: { zh: '台灣 OTT 影音平台，2018 年被 LINE TV 併購。', en: 'Taiwanese OTT video platform; merged with LINE TV in 2018.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'fandora', name: 'Fandora', industry: 'ecommerce', country: 'tw',
    batch: 'AW#3', year: 2025, stage: 'AW#3', status: 'acquired',
    summary: { zh: '台灣插畫家周邊商品平台，2025/12 被 zeczec 嘖嘖收購。', en: "Taiwan illustrator merchandise platform; acquired by zeczec in Dec 2025." },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'pubgame', name: 'PubGame', industry: 'gaming', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'acquired',
    summary: { zh: '台灣手機遊戲團隊，已被併購。', en: 'Taiwanese mobile gaming team; acquired.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== Shutdown =====
  {
    id: 'fabelio', name: 'Fabelio', industry: 'ecommerce', country: 'id',
    batch: null, year: null, stage: 'Early', status: 'shutdown',
    summary: { zh: '印尼家具電商，於 2022 年宣告停業。', en: 'Indonesian furniture e-commerce; shut down in 2022.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'uitox', name: 'uitox', industry: 'ecommerce', country: 'tw',
    batch: null, year: null, stage: 'Early', status: 'shutdown',
    summary: { zh: '台灣跨境電商集團，於 2018 年結束營運。', en: 'Taiwanese cross-border e-commerce group; ceased operations in 2018.' },
    highlight: { zh: '', en: '' }, sources: []
  },
  {
    id: 'recactus', name: 'ReCactus', industry: 'social', country: 'sg',
    batch: 'AW#14', year: null, stage: 'AW#14', status: 'shutdown',
    summary: { zh: '新加坡短影音平台，於 2019 年結束。', en: 'Singapore short-video platform; closed in 2019.' },
    highlight: { zh: '', en: '' }, sources: []
  },

  // ===== Extended portfolio (compiled from Demo Days #17-31 + investments page, 2026-05) =====
  { id: 'fetcch', name: 'Fetcch', industry: 'web3', country: 'global', batch: null, year: null, stage: null, status: 'active', summary: { zh: '區塊鏈支付協議，提供跨鏈識別與支付路由解決方案。', en: 'Blockchain payments protocol providing cross-chain identity and payment routing.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'gashawk', name: 'GasHawk', industry: 'web3', country: 'global', batch: null, year: null, stage: null, status: 'active', summary: { zh: '以太坊 gas 費優化基礎設施，協助用戶降低交易成本。', en: 'Ethereum gas fee optimization infrastructure that lowers transaction costs for users.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'graffle', name: 'Graffle', industry: 'web3', country: 'us', batch: null, year: null, stage: null, status: 'active', summary: { zh: '為 Flow 區塊鏈打造的 API 與資料基礎設施服務。', en: 'API and data infrastructure platform built for the Flow blockchain.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'inflow', name: 'Inflow', industry: 'ecommerce', country: 'vn', batch: null, year: null, stage: null, status: 'active', summary: { zh: '越南時尚供應鏈平台，連結品牌與工廠。', en: 'Vietnam-based fashion supply chain platform connecting brands with manufacturers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'liveartx', name: 'LiveArtX', industry: 'web3', country: 'us', batch: null, year: null, stage: null, status: 'active', summary: { zh: 'NFT 藝術品交易與拍賣平台，串連藏家與藝術家。', en: 'NFT art marketplace and auction platform connecting collectors with artists.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'mint', name: 'mint', industry: 'web3', country: 'global', batch: null, year: null, stage: null, status: 'active', summary: { zh: 'NFT 商務工具，協助品牌發行可程式化的 NFT 商品。', en: 'NFT commerce toolkit helping brands launch programmable NFT goods.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'origami', name: 'Origami', industry: 'web3', country: 'global', batch: null, year: null, stage: null, status: 'active', summary: { zh: 'DAO 工具平台，協助組織治理、財務與成員管理。', en: 'DAO tooling platform that handles governance, treasury and member operations.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'parcel', name: 'Parcel', industry: 'web3', country: 'global', batch: null, year: null, stage: null, status: 'active', summary: { zh: 'Metaverse 虛擬不動產與資產市集。', en: 'Metaverse virtual real estate and digital asset marketplace.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'reality-platforms', name: 'Reality Platforms', industry: 'ai', country: 'us', batch: null, year: null, stage: null, status: 'active', summary: { zh: '以 AI 進行視覺地圖與場景理解的空間計算公司。', en: 'Spatial computing company using AI for visual mapping and scene understanding.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'trac', name: 'Trac', industry: 'web3', country: 'global', batch: null, year: null, stage: null, status: 'active', summary: { zh: '音樂人鏈上變現平台，協助藝人與粉絲建立直接關係。', en: 'On-chain music monetization platform connecting artists directly with fans.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'viv3', name: 'VIV3', industry: 'web3', country: 'ca', batch: null, year: null, stage: null, status: 'active', summary: { zh: '建構於 Flow 區塊鏈上的 NFT 市集。', en: 'NFT marketplace built natively on the Flow blockchain.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'digiforce', name: 'Digiforce', industry: 'adtech', country: 'tw', batch: null, year: null, stage: null, status: 'active', summary: { zh: 'AppWorks 早期被投組合中的數位行銷服務商。', en: 'Digital marketing services firm from AppWorks earlier portfolio.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'fast-retain-urmart', name: 'Fast Retain (urmart)', industry: 'ecommerce', country: 'tw', batch: null, year: null, stage: null, status: 'active', summary: { zh: 'urmart 母公司，經營 D2C 電商品牌平台。', en: 'Parent of urmart, operating a D2C e-commerce brand platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'ichannels', name: 'iChannels', industry: 'ecommerce', country: 'tw', batch: null, year: null, stage: null, status: 'active', summary: { zh: '台灣電商通路整合服務商。', en: 'Taiwan-based e-commerce channel integration service provider.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'luxjoy', name: 'LuxJoy', industry: 'ecommerce', country: 'tw', batch: null, year: null, stage: null, status: 'active', summary: { zh: '精品電商，提供奢侈品與設計師商品銷售。', en: 'Luxury e-commerce platform selling premium and designer goods.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'ohcool', name: 'OHCOOL', industry: 'ecommerce', country: 'tw', batch: null, year: null, stage: null, status: 'shutdown', summary: { zh: 'AppWorks 早期被投，主打消費性電商服務。', en: 'Earlier AppWorks portfolio company focused on consumer e-commerce.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'patisco', name: 'Patisco', industry: 'food', country: 'tw', batch: null, year: null, stage: null, status: 'active', summary: { zh: '台灣甜點電商，主打蛋糕與烘焙產品。', en: 'Taiwan dessert e-commerce platform focused on cakes and bakery products.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'sturdy-exchange', name: 'Sturdy Exchange', industry: 'web3', country: 'global', batch: null, year: null, stage: null, status: 'active', summary: { zh: 'DeFi 借貸協議，採用獨特的清算與收益機制。', en: 'DeFi lending protocol with novel liquidation and yield mechanics.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'AppWorks Investments', url: 'https://appworks.tw/investments/' }] },
  { id: 'matters', name: 'Matters', industry: 'social', country: 'hk', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: '基於區塊鏈的公民媒體平台，支持超過兩萬名創作者。', en: 'Blockchain-based citizen media platform supporting 20,000+ writers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'telepod', name: 'Telepod', industry: 'mobility', country: 'sg', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: '新加坡電動滑板車製造商，並佈建電池交換站。', en: 'Singapore electric scooter manufacturer with battery exchange stations.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'beseye', name: 'Beseye', industry: 'security', country: 'tw', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: '以 AI 骨架辨識技術提供智慧監控分析的安防新創。', en: 'AI security camera analytics startup leveraging skeletal-based recognition.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'kachick', name: 'KaChick', industry: 'travel', country: 'hk', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: 'AI 旅遊平台，撮合亞洲旅客與當地攝影師。', en: 'AI travel platform matching Asian tourists with local photographers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'weavair', name: 'WeavAir', industry: 'climate', country: 'ca', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: '以智慧感測與預測分析提升建築能效的環境科技公司。', en: 'Smart sensors and predictive analytics company improving building energy efficiency.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'sparkamplify', name: 'SparkAmplify', industry: 'saas', country: 'us', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: 'AI 公關平台，推薦適合的記者與媒體窗口。', en: 'AI-driven PR platform recommending journalists and media contacts.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'whoopee-robot', name: 'Whoopee Robot', industry: 'hardware', country: 'tw', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: '為餐飲業設計的協作型機械手臂，搭配雲端程式設定。', en: 'Collaborative robotic arms for food service with cloud-based programming.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'self-token', name: 'SELF TOKEN', industry: 'web3', country: 'tw', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: '以以太坊發行娛樂相關數位資產，並推出首部區塊鏈題材華語電影。', en: 'Ethereum-based digital assets venture that produced the first blockchain-themed Mandarin film.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'dapp-pocket', name: 'Dapp Pocket', industry: 'web3', country: 'tw', batch: null, year: 2019, stage: null, status: 'active', summary: { zh: '支援超過 2,000 個 DApp 的加密貨幣錢包。', en: 'Crypto wallet supporting more than 2,000 decentralized applications.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #19', url: 'https://appworks.tw/demo-day-19/' }] },
  { id: 'xfers', name: 'Xfers', industry: 'fintech', country: 'sg', batch: null, year: 2018, stage: null, status: 'acquired', summary: { zh: '東南亞合規金融與支付基礎設施服務商，後併入 Fazz Financial。', en: 'Southeast Asia compliance and payments infrastructure provider, now part of Fazz Financial.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #18', url: 'https://appworks.tw/demo-day-18/' }] },
  { id: 'rely', name: 'Rely', industry: 'fintech', country: 'sg', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: '新加坡先買後付（BNPL）服務，提供三期無息分期。', en: 'Singapore buy-now-pay-later service offering three interest-free installments.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #18', url: 'https://appworks.tw/demo-day-18/' }] },
  { id: 'forbole', name: 'Forbole', industry: 'web3', country: 'hk', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: 'PoS 區塊鏈驗證者服務商，託管超過七億美元委託資產。', en: 'Proof-of-stake validator service managing over US$700M of delegated crypto assets.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #18', url: 'https://appworks.tw/demo-day-18/' }] },
  { id: 'luxtag', name: 'LuxTag', industry: 'web3', country: 'my', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: '區塊鏈防偽溯源解決方案，服務製造與品牌業者。', en: 'Blockchain-based anti-counterfeiting solution serving manufacturers and brands.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #18', url: 'https://appworks.tw/demo-day-18/' }] },
  { id: 'pand-ai', name: 'Pand.ai', industry: 'ai', country: 'sg', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: '採用深度學習自然語言技術的企業聊天機器人。', en: 'Enterprise chatbot leveraging deep-learning natural language processing.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #18', url: 'https://appworks.tw/demo-day-18/' }] },
  { id: 'word-up', name: 'WORD UP', industry: 'edtech', country: 'tw', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: 'AI 個人化英語學習平台，可降低 40% 學習時間。', en: 'AI-personalized English learning platform that cuts study time by ~40%.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #18', url: 'https://appworks.tw/demo-day-18/' }] },
  { id: 'ocard', name: 'Ocard', industry: 'saas', country: 'tw', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: '餐飲業 SaaS 會員與忠誠度行銷平台。', en: 'Restaurant SaaS platform for membership and loyalty marketing.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #17', url: 'https://appworks.tw/demo-day-17/' }] },
  { id: 'otobrite', name: 'oToBrite', industry: 'mobility', country: 'tw', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: '以相機影像為核心的先進駕駛輔助系統（ADAS）公司。', en: 'Camera-vision advanced driver-assistance systems (ADAS) company.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #17', url: 'https://appworks.tw/demo-day-17/' }] },
  { id: 'relajet', name: 'RelaJet', industry: 'healthtech', country: 'tw', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: '多人聲分離引擎，應用於助聽器與聽覺裝置。', en: 'Multi-speaker voice separation engine for hearing aids and audio devices.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #17', url: 'https://appworks.tw/demo-day-17/' }] },
  { id: 'fitz', name: 'Fitz', industry: 'healthtech', country: 'tw', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: 'AI 線上有氧健身 App，提供即時動作指導。', en: 'AI-powered online aerobics fitness app with real-time coaching.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #17', url: 'https://appworks.tw/demo-day-17/' }] },
  { id: 'aniwear', name: 'ANIWEAR', industry: 'healthtech', country: 'hk', batch: null, year: 2018, stage: null, status: 'active', summary: { zh: '寵物心電圖檢測平台，推出 CardioBird 手持裝置。', en: 'Pet cardiac ECG detection platform with the CardioBird handheld device.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #17', url: 'https://appworks.tw/demo-day-17/' }] },
  { id: 'alia', name: 'ALIA', industry: 'fintech', country: 'id', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '印尼 AI 個人理財顧問 App。', en: 'Indonesian AI financial advisory app.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'area-02', name: 'AREA 02', industry: 'ecommerce', country: 'sg', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '亞洲球鞋轉售市集，整合買賣與交易服務。', en: 'Asian sneaker resale marketplace integrating buy, sell and trade flows.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'credidi', name: 'Credidi', industry: 'fintech', country: 'tw', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '以交易資料進行 AI 信用評分的金融科技。', en: 'AI credit scoring service powered by transactional data.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'fika', name: 'Fika', industry: 'social', country: 'sg', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '亞洲女性導向 AI 社交與交友 App。', en: 'Asia-focused, female-centric AI social and dating app.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'find-recruiter', name: 'Find Recruiter', industry: 'saas', country: 'sg', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '針對亞洲人才市場的招聘人員媒合平台。', en: 'Recruiter marketplace serving Asia talent markets.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'giftpack', name: 'Giftpack', industry: 'saas', country: 'tw', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: 'AI 企業送禮 CRM，協助 B2B 客戶經營關係。', en: 'AI-powered corporate gifting CRM enhancing B2B relationships.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'medhyve', name: 'MedHyve', industry: 'healthtech', country: 'ph', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '醫療機構 AI 採購工具與儀表板。', en: 'AI-powered procurement tools and dashboards for medical institutions.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'spaceship', name: 'Spaceship', industry: 'logistics', country: 'hk', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '智慧物流平台，協助賣家管理多家物流商。', en: 'Smart logistics platform helping merchants manage multiple carriers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'wth-foods', name: 'WTH Foods', industry: 'food', country: 'ph', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '菲律賓植物肉替代品公司。', en: 'Philippine plant-based meat alternatives company.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'waku', name: 'Waku', industry: 'food', country: 'id', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '印尼餐飲與外燴平台。', en: 'Indonesia-focused food & beverage and catering platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'sensay', name: 'Sensay', industry: 'edtech', country: 'tw', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: 'AI 英語口說作業工具，協助老師批改與追蹤。', en: 'AI-powered English speaking homework tool for educators.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'showhue', name: 'ShowHue', industry: 'ecommerce', country: 'tw', batch: 'AW#22', year: 2021, stage: 'AW#22 (2021)', status: 'active', summary: { zh: '電商商品視覺生成 AI 工具。', en: 'AI visual generation tool for e-commerce product imagery.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #22', url: 'https://appworks.tw/demoday-22/' }] },
  { id: 'numbers', name: 'Numbers Protocol', industry: 'web3', country: 'tw', batch: 'AW#23', year: 2022, stage: 'AW#23 (2022)', status: 'active', summary: { zh: 'Web3 去中心化照片與內容溯源網路。', en: 'Decentralized photo and content provenance network for Web 3.0.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'DD23 startups', url: 'https://appworks.tw/dd23-startups/' }] },
  { id: 'sloika', name: 'Sloika', industry: 'web3', country: 'ca', batch: 'AW#23', year: 2022, stage: 'AW#23 (2022)', status: 'active', summary: { zh: '攝影 NFT 市集，協助攝影師發行作品。', en: 'Photo NFT marketplace empowering photographers to mint their work.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'DD23 startups', url: 'https://appworks.tw/dd23-startups/' }] },
  { id: 'partipost', name: 'Partipost', industry: 'adtech', country: 'sg', batch: 'AW#23', year: 2022, stage: 'AW#23 (2022)', status: 'active', summary: { zh: '群眾網紅行銷與社群電商平台。', en: 'Crowd influencer marketing and social commerce platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'DD23 startups', url: 'https://appworks.tw/dd23-startups/' }] },
  { id: 'artizen', name: 'Artizen', industry: 'web3', country: 'us', batch: 'AW#23', year: 2022, stage: 'AW#23 (2022)', status: 'active', summary: { zh: 'NFT 補助平台，資助藝術、科學與公益專案。', en: 'NFT grants platform funding art, science and public goods projects.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'DD23 startups', url: 'https://appworks.tw/dd23-startups/' }] },
  { id: 'nuli-app', name: 'Nüli App', industry: 'healthtech', country: 'tw', batch: 'AW#23', year: 2022, stage: 'AW#23 (2022)', status: 'active', summary: { zh: '專為亞洲女性設計的健身與營養 App。', en: 'Fitness and nutrition app designed specifically for Asian women.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'DD23 startups', url: 'https://appworks.tw/dd23-startups/' }] },
  { id: 'dimorder', name: 'DimOrder', industry: 'saas', country: 'hk', batch: 'AW#23', year: 2022, stage: 'AW#23 (2022)', status: 'active', summary: { zh: '整合 POS、電商與金融的餐飲一站式平台。', en: 'Integrated F&B platform combining POS, e-commerce and financing.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'DD23 startups', url: 'https://appworks.tw/dd23-startups/' }] },
  { id: 'mamahelpers', name: 'MamaHelpers', industry: 'saas', country: 'hk', batch: 'AW#23', year: 2022, stage: 'AW#23 (2022)', status: 'active', summary: { zh: '面向外籍家事工作者的 LinkedIn 風格招聘平台。', en: 'LinkedIn-style platform for foreign domestic workers and employers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'DD23 startups', url: 'https://appworks.tw/dd23-startups/' }] },
  { id: 'iterative-collective', name: 'The Iterative Collective', industry: 'gaming', country: 'global', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: '結合孵化、開發與發行的遊戲工作室聯盟。', en: 'Incubator, developer and publisher collective for games.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'protico', name: 'Protico', industry: 'web3', country: 'global', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: 'Web3 通訊網路，讓錢包成為社交身分。', en: 'Web3 chatting network that turns wallets into social identities.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'labfront', name: 'Labfront', industry: 'healthtech', country: 'tw', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: '以 AI 工具加速醫療研究的健康科技平台。', en: 'AI tools accelerating health research workflows.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'envio', name: 'Envio', industry: 'logistics', country: 'tw', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: '為中小企業設計的全方位數位物流與供應鏈服務商。', en: 'Full-service digital logistics and supply chain enabler for SMBs.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'bitshine', name: 'BitShine', industry: 'fintech', country: 'tw', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: '為企業提供加密貨幣法幣出入金服務。', en: 'Fiat on-ramp and off-ramp infrastructure for crypto-using companies.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'aibou', name: 'Aibou', industry: 'saas', country: 'jp', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: '以自動化與資料分析協助中小企業成長的 SaaS。', en: 'SaaS helping SMBs grow and scale with automation and data insights.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'alphalytics', name: 'Alphalytics', industry: 'web3', country: 'global', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: '鏈上資料聚合與分析平台。', en: 'On-chain data aggregator and analytics platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'preteeth-ai', name: 'PreTeeth AI', industry: 'healthtech', country: 'tw', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: 'AI 牙齒美學設計工具，協助牙醫進行微笑設計。', en: 'AI tools for dental smile design used by dentists.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'storius', name: 'Storius', industry: 'social', country: 'global', batch: 'AW#24', year: 2022, stage: 'AW#24 (2022)', status: 'active', summary: { zh: '以地理標記分享聲音內容的社群 App。', en: 'Geotagged audio-sharing social app.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #24', url: 'https://appworks.tw/demoday-24/' }] },
  { id: 'seasalt-ai', name: 'Seasalt.ai', industry: 'ai', country: 'sg', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '跨境企業 AI 全通路客服中心解決方案。', en: 'AI-powered omni-channel contact centers for cross-border businesses.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'kpay', name: 'KPay', industry: 'fintech', country: 'hk', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '為中小企業提供金流處理與 SaaS 工具。', en: 'Payment processing and SaaS platform built for SMEs.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'crust-group', name: 'CRUST Group', industry: 'food', country: 'sg', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '以剩餘食材升級再造的永續飲品公司。', en: 'Sustainable upcycled beverage company turning surplus food into drinks.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'seneca-esg', name: 'Seneca ESG', industry: 'saas', country: 'sg', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '為企業與金融機構提供 ESG 工作流程自動化軟體。', en: 'ESG workflow automation software for corporates and financial institutions.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'artogo', name: 'ARTOGO', industry: 'web3', country: 'tw', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: 'Metaverse 沉浸式藝術文化體驗平台。', en: 'Immersive metaverse experiences for art, culture and communities.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'yeshello', name: 'YesHello', industry: 'saas', country: 'my', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '針對 WhatsApp 設計的團隊客服收件箱應用。', en: 'Team inbox application built specifically for WhatsApp.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'skilio', name: 'Skilio', industry: 'saas', country: 'sg', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '面向 Z 世代的技能導向招聘平台。', en: 'Skills-based hiring platform targeting Gen Z talent.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'bintango', name: 'BintanGO', industry: 'fintech', country: 'id', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '為內容創作者打造的金融與變現工具。', en: 'Financial and monetization tools designed for content creators.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'cast-lms', name: 'Cast LMS', industry: 'edtech', country: 'ph', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '被譽為「Canva for e-learning」的線上學習設計平台。', en: 'E-learning design platform often described as the Canva for e-learning.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'elite-xp', name: 'Elite XP', industry: 'gaming', country: 'tw', batch: 'AW#25', year: 2022, stage: 'AW#25 (2022)', status: 'active', summary: { zh: '同時支援 web2 與 web3 的 GameFi 平台。', en: 'GameFi platform supporting both web2 and web3 games.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #25', url: 'https://appworks.tw/demoday-25/' }] },
  { id: 'allos', name: 'Allos Health', industry: 'healthtech', country: 'hk', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '以 Causal AI 提供可解釋醫療洞察的健康科技公司。', en: 'Healthtech delivering explainable medical insights via Causal AI.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'forte-biotech', name: 'Forte Biotech', industry: 'agritech', country: 'sg', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '為養殖業提供風險管理用的便捷生物診斷工具。', en: 'Accessible diagnostics for farming risk management.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'gocochain', name: 'Gocochain', industry: 'logistics', country: 'tw', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '冷鏈物流環境監控與資料追蹤平台。', en: 'Environmental monitoring platform for cold-chain logistics.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'growing3', name: 'Growing3', industry: 'web3', country: 'tw', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '鏈上數位行銷解決方案，可顯著降低獲客成本。', en: 'On-chain digital marketing solution that significantly reduces customer acquisition cost.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'invested', name: 'InvestEd', industry: 'fintech', country: 'ph', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '為無銀行帳戶 Z 世代提供演算法驅動的金融商品。', en: 'Algorithm-based financing products for unbanked Gen Z users.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'kodifly', name: 'Kodifly', industry: 'mobility', country: 'hk', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '智慧運輸與基礎設施監控系統。', en: 'Intelligent mobility and transportation infrastructure platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'morpheus-labs', name: 'Morpheus Labs', industry: 'web3', country: 'sg', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: 'Web3 跨鏈低代碼工具開放平台。', en: 'Open platform for web3 tooling and cross-chain low-code solutions.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'quqo', name: 'Quqo', industry: 'logistics', country: 'vn', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '為傳統小型雜貨店提供數位化供應鏈服務。', en: 'Digital supply chain solution for SMEs and mom-and-pop shops.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'soltera', name: 'Soltera', industry: 'climate', country: 'ph', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '為電力公司提供智慧電錶即服務（MaaS）。', en: 'Smart Metering-as-a-Service offering for utilities.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'tokban', name: 'Tokban', industry: 'ecommerce', country: 'id', batch: 'AW#26', year: 2023, stage: 'AW#26 (2023)', status: 'active', summary: { zh: '印尼建材 B2B 市集，2022 年營收達 500 萬美元。', en: 'B2B marketplace for construction materials in Indonesia, hitting US$5M revenue in 2022.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #26', url: 'https://appworks.tw/demo-day-26-en/' }] },
  { id: 'creatordb', name: 'CreatorDB', industry: 'adtech', country: 'tw', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '一站式網紅行銷平台，協助品牌探索與合作。', en: 'One-stop influencer marketing platform helping brands discover and engage creators.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'storipress', name: 'Storipress', industry: 'saas', country: 'tw', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '整合工作流程與 AI 助理的一站式內容發佈平台。', en: 'All-in-one publishing platform with unified workflow and AI assistance.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'somin-ai', name: 'SoMin.ai', industry: 'ai', country: 'sg', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '提升廣告投放精準度的 AI 行銷服務。', en: 'AI improving accuracy of targeted advertising campaigns.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'package-plus', name: 'PackAge+', industry: 'climate', country: 'tw', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '為電商打造可循環使用的環保包裝服務。', en: 'Reusable packaging service for e-commerce made from recycled materials.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'oda', name: 'Oda', industry: 'fintech', country: 'vn', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '為餐飲業者提供 SaaS 與融資服務的越南新創。', en: 'SaaS and financing platform built for F&B businesses in Vietnam.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'flowclass', name: 'Flowclass', industry: 'edtech', country: 'hk', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '為教育工作者打造的雲端無代碼應用平台。', en: 'No-code cloud-based application platform built for educators.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'jurist-ai', name: 'Jurist AI', industry: 'ai', country: 'ph', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '法律從業人員專用的 AI 研究與檢索平台。', en: 'AI-powered research platform built for legal professionals.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'walless', name: 'Walless', industry: 'web3', country: 'vn', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '個人化 Web3 錢包與數位資產管理工具。', en: 'Personalized web3 wallet and digital asset management solution.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'lawplayer', name: 'Lawplayer', industry: 'saas', country: 'tw', batch: 'AW#27', year: 2023, stage: 'AW#27 (2023)', status: 'active', summary: { zh: '台灣立法與法律資料服務平台。', en: 'Taiwan-based legislative and legal data platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #27', url: 'https://appworks.tw/demo-day-27-en/' }] },
  { id: 'adplist', name: 'ADPList', industry: 'saas', country: 'sg', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '全球導師媒合平台，提供專家輔導資源。', en: 'Global mentorship platform connecting users with expert mentors.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'xo', name: 'XO', industry: 'social', country: 'tw', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '結合區塊鏈隱私與 AI 互動的匿名交友 App。', en: 'Anonymous dating app combining blockchain-based privacy with AI interactions.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'borong', name: 'Borong', industry: 'ecommerce', country: 'my', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '東南亞 B2B 批發電商，年交易總額逼近 10 億美元。', en: 'B2B bulk e-commerce platform in Southeast Asia approaching US$1B in GMV.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'equo', name: 'EQUO', industry: 'climate', country: 'vn', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '以甘蔗、椰子等天然素材生產環保替代用品。', en: 'Eco-friendly products made from natural materials like sugar cane and coconut.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'orderfaz', name: 'Orderfaz', industry: 'ecommerce', country: 'id', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '社群電商版本的「Shopify」，整合 TikTok Shop 等通路。', en: 'Shopify-style platform for social commerce sellers integrating TikTok Shop, Shopee and Lazada.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'return-helper', name: 'Return Helper', industry: 'logistics', country: 'hk', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '跨境電商退貨一站式解決方案。', en: 'End-to-end cross-border e-commerce returns solution.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'shipany', name: 'ShipAny', industry: 'logistics', country: 'hk', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '電商智慧物流整合閘道。', en: 'Smart logistics gateway for e-commerce sellers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'abconvert', name: 'ABConvert', industry: 'saas', country: 'tw', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '專為電商優化設計的 A/B 測試工具。', en: 'Specialized A/B testing tool for e-commerce optimization.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'olli', name: 'Olli', industry: 'ai', country: 'us', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '將玩具變身為個人化兒童 AI 玩伴的系統。', en: 'AI-powered system that turns toys into personalized companions for children.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'qiro-finance', name: 'Qiro Finance', industry: 'web3', country: 'sg', batch: 'AW#28', year: 2024, stage: 'AW#28 (2024)', status: 'active', summary: { zh: '鏈上私募信貸協議。', en: 'On-chain private credit protocol.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #28', url: 'https://appworks.tw/appworks-demo-day-28-showcases-startups-startups-transforming-enterprise-through-ai/' }] },
  { id: 'aliena', name: 'Aliena', industry: 'hardware', country: 'sg', batch: 'AW#30', year: 2025, stage: 'AW#30 / Series A (2025)', status: 'active', summary: { zh: '新加坡太空科技公司，為小型衛星提供推進系統。', en: 'Singapore space tech company providing satellite propulsion for small-satellite missions.' }, highlight: { zh: '累計募資 930 萬美元。', en: '$9.3M total funding raised.' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'resolv-labs', name: 'Resolv Labs', industry: 'web3', country: 'web3', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '提供 Delta 中性穩定幣 USR 與收益策略基礎設施。', en: 'Delta-neutral stablecoin issuer behind USR, with yield-strategy infrastructure.' }, highlight: { zh: 'TVL 達 3.5 億美元。', en: '$350M Total Value Locked.' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'yei-finance', name: 'Yei Finance', industry: 'web3', country: 'web3', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '跨鏈 DeFi 協議，整合借貸與流動性策略。', en: 'Cross-chain DeFi protocol combining lending and liquidity strategies.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'moonshot', name: 'Moonshot', industry: 'ai', country: 'global', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: 'AI 研究作業系統，協助研究人員整合工作流程。', en: 'AI research operating system designed for researchers and analysts.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'eazy-digital', name: 'Eazy Digital', industry: 'fintech', country: 'global', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '為保險公司與經紀人提供銷售管理 SaaS 系統。', en: 'Sales management SaaS for insurers and brokers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'carnow', name: 'CarNow', industry: 'mobility', country: 'vn', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '結合二手車買賣與融資的多功能平台。', en: 'Multi-functional platform combining used-car sales with financing options.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'cocomart', name: 'CocoMart', industry: 'food', country: 'tw', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '簡化餐廳採購流程的食材供應平台。', en: 'Restaurant procurement simplification and food-supply platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'mezink', name: 'Mezink', industry: 'adtech', country: 'sg', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '面向社群品牌的 AI 需求生成行銷工具。', en: 'AI-driven demand generation tool for social-media brands.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'peris-ai', name: 'Peris.ai', industry: 'security', country: 'id', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '為企業數位安全提供模組化自動化工具。', en: 'Modular automation toolkit for enterprise digital security.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'topschool-ai', name: 'TopSchool.ai', industry: 'edtech', country: 'sg', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: 'AI 個人化學習平台，提升學校學生表現。', en: 'AI-powered personalized learning platform improving school performance.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'vulcan-augmetics', name: 'Vulcan Augmetics', industry: 'healthtech', country: 'vn', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: 'AI 智慧穿戴感測器，強化人機互動。', en: 'AI-powered wearable sensors enhancing human-machine interaction.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'tova', name: 'Tova', industry: 'social', country: 'hk', batch: 'AW#30', year: 2025, stage: 'AW#30 (2025)', status: 'active', summary: { zh: '精選會員制社交俱樂部，協助高端人士拓展人脈。', en: 'Curated members club facilitating high-trust social connections.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #30', url: 'https://appworks.tw/appworks-turns-15-at-demo-day-30-singapore-spotlights-southeast-asias-next-gen-ai-web3-deep-tech-startups/' }] },
  { id: 'fluid', name: 'Fluid', industry: 'fintech', country: 'sg', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: 'AI 驅動的 B2B 支付平台，自動化對帳與催收。', en: 'AI-driven B2B payments platform automating reconciliation and collections.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'hivebotics', name: 'Hivebotics', industry: 'hardware', country: 'sg', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '為商用場所打造的自動清潔機器人。', en: 'Autonomous cleaning robots designed for commercial facilities and restrooms.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'maibel', name: 'Maibel', industry: 'healthtech', country: 'sg', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '為亞洲女性設計的故事化 AI 心理健康陪伴助理。', en: 'Story-driven AI wellness companion designed for women in Asia.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'singular', name: 'Singular', industry: 'web3', country: 'hk', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '將私募股權標的代幣化、提供鏈上分散式投資。', en: 'Fractionalised on-chain investment access to private equity deals.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'hata', name: 'Hata', industry: 'fintech', country: 'my', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '馬來西亞受監管的數位資產交易所，提供法幣與加密交易。', en: 'Licensed Malaysian digital asset exchange enabling fiat-to-crypto trading.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'parkit', name: 'Parkit', industry: 'mobility', country: 'my', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '為馬來西亞城市建構的智慧停車基礎設施。', en: "Smart parking infrastructure tackling Malaysia's urban parking inefficiencies." }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'legitapp', name: 'LegitApp', industry: 'ai', country: 'ca', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '結合 AI 與專家鑑定的精品鑑定平台。', en: 'Luxury product authentication combining expert verification with AI.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'auki-labs', name: 'Auki Labs', industry: 'web3', country: 'hk', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '建構讓 AI 與機器人能搜尋導航實體空間的空間計算層。', en: 'Spatial computing layer making physical spaces browsable, searchable and navigable to AI and robots.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'klipy', name: 'Klipy', industry: 'ai', country: 'hk', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '為高接觸專業人士打造的 AI 行政秘書。', en: 'AI executive secretary built for high-touch professionals.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'juic3-labs', name: 'Juic3 Labs', industry: 'climate', country: 'tw', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '提供自平衡分散式電池網路，協助電網穩定。', en: 'Self-balancing distributed battery networks for grid stabilisation.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'trainge', name: 'Trainge', industry: 'healthtech', country: 'tw', batch: 'AW#31', year: 2025, stage: 'AW#31 (2025)', status: 'active', summary: { zh: '服務健身房與個人用戶的整合型健身平台。', en: 'All-in-one fitness platform serving gyms and individual users.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #31', url: 'https://appworks.tw/appworks-demo-day-31-unveils-regions-most-scalable-ai-iot-web3-startups-as-sea-tech-enters-new-growth-cycle/' }] },
  { id: 'quantalpha-ai', name: 'QuantAlpha AI', industry: 'web3', country: 'my', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: 'AI 驅動的加密交易策略平台。', en: 'AI-powered crypto trading strategy platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'xellar', name: 'Xellar', industry: 'web3', country: 'id', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '簡化 Web3 用戶上鏈體驗的開發者工具。', en: 'Developer tools for streamlined web3 user onboarding.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'tessera', name: 'Tessera', industry: 'web3', country: 'global', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '基於 Web3 的票務平台，提供轉售優化機制。', en: 'Web3 ticketing platform with resale optimization built in.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'nexmedis', name: 'Nexmedis', industry: 'healthtech', country: 'id', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '結合即時病患資料的 AI 醫療診斷平台。', en: 'AI diagnostics platform with real-time patient data analysis.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'speakbuddy', name: 'SpeakBUDDY', industry: 'edtech', country: 'jp', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '日本廣受歡迎的 AI 英語學習 App。', en: 'Popular Japanese AI app for learning English conversation.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'broilerx', name: 'BroilerX', industry: 'agritech', country: 'id', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '印尼養雞業綜合科技解決方案平台。', en: 'Comprehensive poultry technology platform serving Indonesian farmers.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'goers', name: 'Goers', industry: 'travel', country: 'id', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '印尼即時娛樂活動票務與探索平台。', en: 'Indonesian live entertainment ticketing and discovery platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'sotravel', name: 'Sotravel', industry: 'travel', country: 'sg', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '以社群為核心的探險旅遊平台。', en: 'Community-focused adventure travel platform.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'sobanhang', name: 'SoBanHang', industry: 'fintech', country: 'vn', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '為越南小商家打造的一站式營運管理 App。', en: 'All-in-one business management app for small merchants in Vietnam.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
  { id: 'boostorder', name: 'Boostorder', industry: 'saas', country: 'my', batch: 'AW#29', year: 2024, stage: 'AW#29 (2024)', status: 'active', summary: { zh: '多通路訂單與付款自動化的 B2B SaaS。', en: 'B2B SaaS automating multi-channel orders and payments.' }, highlight: { zh: '', en: '' }, sources: [{ title: 'Demo Day #29', url: 'https://appworks.tw/appworks-demo-day-29-singapore-highlights-startups-achieving-regional-and-global-relevance/' }] },
];
