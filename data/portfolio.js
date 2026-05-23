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
];
