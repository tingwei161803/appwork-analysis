/* AppWorks Phase 1-6 thesis evolution (2010-2026).
   Each phase: years, theme, tagline, turning points, signature deals, observation. */
window.PHASES = [
  {
    id: 'phase-1', num: 1, years: '2010-2013',
    theme: { zh: '網路', en: 'Internet' },
    tagline: { zh: '從零打造台灣網路加速器原型', en: "Building Taiwan's first internet accelerator from scratch" },
    color: '#e8710a', icon: 'language',
    turningPoints: [
      { year: 2010, note: { zh: 'AppWorks 創立，首屆加速器啟動', en: 'AppWorks founded, first accelerator batch launched' } },
      { year: 2012, note: { zh: '建立 Demo Day 與創投基金 I', en: 'Demo Day established alongside Fund I' } },
      { year: 2013, note: { zh: '台灣電商 / 內容服務全面起飛', en: 'Taiwan e-commerce and content services take off' } }
    ],
    signatureDeals: [
      { name: 'Tagtoo', note: { zh: 'AW#1，廣告科技開路先鋒', en: 'AW#1, AdTech pioneer of the cohort' } },
      { name: 'CHOCO TV', note: { zh: 'AW#2，影音內容平台先行者', en: 'AW#2, early streaming content platform' } },
      { name: 'EZTABLE', note: { zh: '線上訂位翻轉本地餐飲', en: 'Online reservations reshape local dining' } },
      { name: 'Pinkoi', note: { zh: '亞洲設計商品電商代表', en: 'Flagship marketplace for Asian design goods' } }
    ],
    observation: { zh: '聚焦台灣網路本土戰場，奠定社群與方法論。', en: 'Focused on Taiwan internet, laying community and methodology foundations.' }
  },
  {
    id: 'phase-2', num: 2, years: '2014-2017',
    theme: { zh: '行動 + 東南亞擴張', en: 'Mobile + SEA Expansion' },
    tagline: { zh: '行動浪潮推動 AppWorks 走向東南亞', en: 'Mobile wave pushes AppWorks into Southeast Asia' },
    color: '#1a73e8', icon: 'smartphone',
    turningPoints: [
      { year: 2014, note: { zh: '行動 App 成為新創主流型態', en: 'Mobile apps become the default startup form factor' } },
      { year: 2015, note: { zh: '首批跨境投資投向 Lalamove、17LIVE', en: 'First cross-border bets on Lalamove and 17LIVE' } },
      { year: 2016, note: { zh: 'KKday Series A，AW 加速器吸引區域團隊', en: 'KKday Series A; accelerator draws regional founders' } }
    ],
    signatureDeals: [
      { name: 'Lalamove', note: { zh: '2015 投資，押注亞洲城市物流', en: '2015 investment betting on Asian urban logistics' } },
      { name: 'KKday', note: { zh: 'AW#13，跨境旅遊體驗平台', en: 'AW#13, cross-border travel experience platform' } },
      { name: 'WeMo Scooter', note: { zh: 'AW#12，台灣共享電動機車先驅', en: "AW#12, Taiwan's shared e-scooter pioneer" } },
      { name: '17LIVE', note: { zh: '2015 種子輪，直播經濟代表作', en: '2015 seed, flagship of live-streaming economy' } }
    ],
    observation: { zh: '視野從台灣延伸到大東南亞，押注行動經濟。', en: 'Vision extended from Taiwan to Greater SEA, betting on mobile economy.' }
  },
  {
    id: 'phase-3', num: 3, years: '2017-2018',
    theme: { zh: 'GSEA 框架成形', en: 'GSEA Framework Takes Shape' },
    tagline: { zh: '正式以大東南亞作為投資主戰場', en: 'Greater Southeast Asia formalized as core investment thesis' },
    color: '#12a150', icon: 'public',
    turningPoints: [
      { year: 2017, note: { zh: '提出 GSEA（Greater Southeast Asia）論述', en: 'GSEA (Greater Southeast Asia) thesis articulated' } },
      { year: 2018, note: { zh: 'Carousell Series C，跨區域案件成主流', en: 'Carousell Series C marks cross-regional deals as mainstream' } }
    ],
    signatureDeals: [
      { name: 'Carousell', note: { zh: 'Series C 2018，東南亞二手電商龍頭', en: 'Series C 2018, SEA C2C marketplace leader' } },
      { name: 'ShopBack', note: { zh: 'AW#13，現金回饋顛覆東南亞電商', en: 'AW#13, cashback model disrupts SEA e-commerce' } }
    ],
    observation: { zh: '從跨境機會升級為區域論述，AppWorks 自我定位 GSEA。', en: 'Upgraded from cross-border bets to a regional thesis, branding AppWorks as the GSEA platform.' }
  },
  {
    id: 'phase-4', num: 4, years: '2018-2020',
    theme: { zh: 'A.B.S. 確立', en: 'A.B.S. Thesis Established' },
    tagline: { zh: 'AI、Blockchain、SEA 三大主題明確宣示', en: 'AI, Blockchain, SEA crystallize as three pillars' },
    color: '#8430ce', icon: 'smart_toy',
    turningPoints: [
      { year: 2018, note: { zh: 'AW#17 公開招募 AI/Blockchain 新創', en: 'AW#17 openly recruits AI/Blockchain startups' } },
      { year: 2019, note: { zh: 'Jamie 親口宣布 A.B.S. 策略', en: 'Jamie publicly declares the A.B.S. strategy' } },
      { year: 2020, note: { zh: 'Web3 portfolio 快速成形', en: 'Web3 portfolio scales up rapidly' } }
    ],
    signatureDeals: [
      { name: 'Animoca Brands', note: { zh: '押注區塊鏈遊戲與 IP 巨頭', en: 'Bet on blockchain gaming and IP powerhouse' } },
      { name: 'Dapper Labs / Flow', note: { zh: 'NFT 基礎建設代表案', en: 'Flagship NFT infrastructure investment' } },
      { name: 'XREX', note: { zh: 'AW#17，跨境加密金融', en: 'AW#17, cross-border crypto finance' } },
      { name: 'Blocto', note: { zh: 'AW#19，Web3 錢包與 UX 入口', en: 'AW#19, Web3 wallet and UX gateway' } },
      { name: 'Pendle', note: { zh: 'AW#20，DeFi 收益代幣化先驅', en: 'AW#20, pioneer of DeFi yield tokenization' } }
    ],
    observation: { zh: 'A.B.S. 成為對外旗幟，Web3 成最積極押注。', en: 'A.B.S. became the public banner, with Web3 as the most aggressive bet.' }
  },
  {
    id: 'phase-5', num: 5, years: '2021-2023',
    theme: { zh: 'Web3 加倍 + Demo Day 區域化', en: 'Web3 Doubling Down + Regional Demo Day' },
    tagline: { zh: 'Web3 全面下注，Demo Day 走向區域舞台', en: 'All-in on Web3 while Demo Day scales across the region' },
    color: '#f59e0b', icon: 'currency_bitcoin',
    turningPoints: [
      { year: 2021, note: { zh: 'NFT/DeFi 牛市，Web3 batch 規模放大', en: 'NFT/DeFi bull market expands Web3 batches' } },
      { year: 2022, note: { zh: 'Demo Day 走向區域化與線上化', en: 'Demo Day goes regional and hybrid online' } },
      { year: 2023, note: { zh: 'Web3 portfolio 累積至 146 家', en: 'Web3 portfolio grows to 146 companies' } }
    ],
    signatureDeals: [
      { name: 'StraitsX', note: { zh: 'AW#21，新加坡穩定幣基礎建設', en: 'AW#21, Singapore stablecoin infrastructure' } },
      { name: 'Pendle', note: { zh: '進入 DeFi 主流敘事，TVL 高峰', en: 'Enters mainstream DeFi narrative at TVL peak' } },
      { name: 'Blocto', note: { zh: '錢包用戶規模化，跨鏈生態擴張', en: 'Wallet user base scales, multi-chain ecosystem grows' } },
      { name: 'XREX', note: { zh: '新興市場跨境支付加速', en: 'Cross-border payments accelerate in emerging markets' } }
    ],
    observation: { zh: 'Web3 加倍下注帶來能量與爭議，奠定下一階段收斂的伏筆。', en: 'Doubling down on Web3 brought momentum and controversy, setting the stage for later consolidation.' }
  },
  {
    id: 'phase-6', num: 6, years: '2024-2026',
    theme: { zh: 'Agentic AI + 硬科技 + 戰略收斂', en: 'Agentic AI + Deep Tech + Strategic Focus' },
    tagline: { zh: '從 Web3 廣撒網收斂至 AI 與硬科技主軸', en: 'Converging from broad Web3 bets to AI and deep tech core' },
    color: '#d93025', icon: 'precision_manufacturing',
    turningPoints: [
      { year: 2024, note: { zh: 'AW#32-33 鎖定 Manufacturing AI、Defense Tech、PQC', en: 'AW#32-33 focus on Manufacturing AI, Defense Tech, PQC' } },
      { year: 2025, note: { zh: 'On-Chain Banking 成為 Web3 收斂新主題', en: 'On-Chain Banking emerges as Web3 consolidation theme' } },
      { year: 2026, note: { zh: 'Fund IV 目標 $360M，實際 $165M close', en: 'Fund IV targets $360M, closes at $165M' } }
    ],
    signatureDeals: [
      { name: 'Sanctum', note: { zh: 'Solana 流動性質押協議代表', en: 'Flagship Solana liquid staking protocol' } },
      { name: 'Nitra', note: { zh: 'AI 驅動的醫療金融科技新星', en: 'AI-driven healthcare fintech rising star' } },
      { name: 'Omo Protocol', note: { zh: 'On-Chain Banking 新世代基礎建設', en: 'Next-gen On-Chain Banking infrastructure' } }
    ],
    observation: { zh: '從廣撒網轉向戰略收斂，Fund IV 縮水成為轉折信號。', en: 'Shift from breadth to focus; Fund IV shortfall signals the strategic pivot.' }
  }
];
