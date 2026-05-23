/* AppWorks vs SEA VC peers — comparison cards */
window.COMPETITORS = [
  {
    id: '500-global-sea',
    name: '500 Global SEA',
    flag: '🇺🇸/🇸🇬',
    founded: 2010,
    hq: 'SF / Bangkok / KL',
    aum: '~$500M cumulative (SEA III: $143M)',
    has_accelerator: true,
    thesis: {
      zh: '以矽谷 playbook 操作東南亞早期市場，廣撒網式 seed + accelerator 高頻投資，押注地區數位化長尾。重視創辦人品質與 GTM 速度，prefer capital-efficient 商業模式。',
      en: 'Apply the Silicon Valley playbook to Southeast Asia with a high-volume seed + accelerator strategy. Bet on founder quality, GTM velocity, and capital-efficient digital plays across the region.'
    },
    notable_portfolio: ['Grab', 'Bukalapak', 'Carousell', 'Carsome', 'eFishery', 'FinAccel'],
    vs_appworks: {
      zh: '與 AppWorks 最直接的對標 — 同樣有 accelerator、同樣 seed-stage focus、同樣強調 founder community。差異在於 500 Global 是全球 platform 的 SEA arm（resource pool 更大，但 SEA 團隊話語權有限），而 AppWorks 是 SEA-native 且專注 Greater Southeast Asia（含台灣）。500 在印尼、馬泰更深，AppWorks 在台灣 + 越南 + Web3 有結構性優勢。Portfolio overlap 高（Carousell、Carsome）但 thesis tilt 不同。',
      en: 'The closest mirror to AppWorks—both run accelerators, focus on seed stage, and emphasize founder community. Key difference: 500 is the SEA arm of a global platform (bigger resource pool but less regional autonomy), while AppWorks is SEA-native with structural edge in Taiwan, Vietnam, and Web3. Overlapping portfolio (Carousell, Carsome) but divergent thesis tilt.'
    }
  },
  {
    id: 'peak-xv',
    name: 'Peak XV Partners',
    flag: '🇸🇬/🇮🇳',
    founded: 2006,
    hq: 'Singapore + Bangalore',
    aum: '$9B+ AUM across 13 funds',
    has_accelerator: false,
    thesis: {
      zh: 'Multi-stage 巨無霸 — 從 seed 到 growth 全覆蓋，押注 category-defining 公司。前 Sequoia 血統強調 founder-first、長期持有、power law 思維，2023 拆分後更聚焦 India + SEA 雙引擎。',
      en: 'A multi-stage powerhouse covering seed to growth, betting on category-defining companies. The ex-Sequoia DNA emphasizes founder-first investing, long holding periods, and power-law thinking—now refocused on the India + SEA dual engine post-2023 spinoff.'
    },
    notable_portfolio: ['GoTo', 'Tokopedia', 'Zilingo', 'Carousell', 'Traveloka', 'Kopi Kenangan'],
    vs_appworks: {
      zh: 'Peak XV 是 SEA 最大的 multi-stage VC，AUM 規模是 AppWorks 的 ~20 倍，能 lead Series B/C/D 並陪跑到 IPO。AppWorks 則是 specialist —— 專注 pre-seed/seed，accelerator + community moat 是 Peak XV 沒有的。實務上兩者較少正面衝突：AppWorks 種子輪進場，Peak XV 後輪接力（如 Carousell 就是這個 pattern）。Peak XV 退役 Surge 後留下的 seed-stage 真空，正是 AppWorks 的機會窗。',
      en: "Peak XV is SEA's largest multi-stage VC, with AUM roughly 20x AppWorks and the firepower to lead Series B–D. AppWorks is the specialist—pre-seed/seed focus with accelerator and community moat Peak XV lacks. They rarely collide directly; AppWorks plants seeds, Peak XV scales them (Carousell being a textbook case). Surge's retirement leaves a seed-stage vacuum AppWorks can fill."
    }
  },
  {
    id: 'east-ventures',
    name: 'East Ventures',
    flag: '🇮🇩/🇯🇵',
    founded: 2009,
    hq: 'Jakarta + Singapore',
    aum: '~$1.7B AUM',
    has_accelerator: false,
    thesis: {
      zh: '印尼 first，generalist + high-volume seed 策略，相信「在地網絡密度」比 sector specialization 重要。從 Tokopedia 起家後成為印尼 deal flow 中樞，近年擴展到 climate tech + healthcare。',
      en: "Indonesia-first, generalist, high-volume seed strategy built on the belief that local network density beats sector specialization. Became Indonesia's deal-flow hub after backing Tokopedia, now expanding into climate tech and healthcare."
    },
    notable_portfolio: ['Tokopedia', 'Traveloka', 'Ruangguru', 'Xendit', 'ShopBack', 'Kopi Kenangan'],
    vs_appworks: {
      zh: 'East Ventures 在印尼的地位類似 AppWorks 在台灣 — 都是 home-market 的 default seed VC，都靠十年 founder 網絡建立護城河。差異在地理版圖：EV 重壓印尼（>60% portfolio），AppWorks 重壓台灣 + 越南 + 跨區 Web3。EV 無 accelerator 但靠 deal volume 補（每年 50+ investments），AppWorks 用 accelerator 系統化 founder pipeline。兩者較少 portfolio overlap，反而可能是 co-invest 夥伴。',
      en: "East Ventures plays in Indonesia what AppWorks plays in Taiwan—the default seed VC built on a decade of founder networks. Difference is geography: EV is >60% Indonesia-weighted, while AppWorks anchors on Taiwan + Vietnam + cross-regional Web3. EV compensates for no accelerator with sheer deal volume (50+ per year); AppWorks systematizes pipeline via accelerator. More likely co-investors than competitors."
    }
  },
  {
    id: 'monks-hill-ventures',
    name: "Monk's Hill Ventures",
    flag: '🇸🇬',
    founded: 2014,
    hq: 'Singapore',
    aum: '$200M+ (Fund III)',
    has_accelerator: false,
    thesis: {
      zh: '由連續創業者（Peng T. Ong, Kuo-Yi Lim）operator-led 的 boutique Series A fund，單筆 $3–7M lead 為主。聚焦科技驅動、區域型 B2B / fintech / SaaS，強調 operator empathy 與 hands-on board work。',
      en: 'Operator-led boutique Series A fund founded by serial entrepreneurs (Peng T. Ong, Kuo-Yi Lim). Writes $3–7M lead checks into tech-driven, regional B2B / fintech / SaaS plays, emphasizing operator empathy and hands-on board work.'
    },
    notable_portfolio: ['Ninja Van', 'Horangi', 'Saleswhale', 'Ajaib', 'Glints'],
    vs_appworks: {
      zh: "Monk's Hill 進場 stage 比 AppWorks 晚一輪（Series A vs seed），定位是 AppWorks portfolio 的「下一輪 candidate」而非競爭對手。Style 差異：MHV 是 small concentrated portfolio + deep board engagement（每年僅 8–10 deals），AppWorks 是 community + accelerator + 較廣 portfolio。MHV 的 operator-led brand 對 B2B founder 很有吸引力，但缺乏 AppWorks 在 consumer / Web3 / 早期 founder discovery 的 surface area。實務上常是 handoff 關係。",
      en: "MHV enters one round later than AppWorks (Series A vs. seed), positioning as a natural next-round partner rather than a competitor. MHV runs a small, concentrated portfolio (8–10 deals/year) with deep board involvement; AppWorks plays community + accelerator across a broader portfolio. MHV's operator-led brand appeals to B2B founders but lacks AppWorks' surface area in consumer, Web3, and early founder discovery. Typically a handoff, not a head-to-head."
    }
  },
  {
    id: 'vertex-ventures-sea-india',
    name: 'Vertex Ventures SEA & India',
    flag: '🇸🇬',
    founded: 2008,
    hq: 'Singapore',
    aum: '$541M (Fund V)',
    has_accelerator: false,
    thesis: {
      zh: 'Temasek 旗下、機構化操作的 Series A/B 主力。偏好 enterprise SaaS、fintech infrastructure、deep tech，重視 unit economics 與 path to profitability。LP base 厚實，常 lead 並陪跑到 growth stage。',
      en: 'Institutional Series A/B lead backed by Temasek. Prefers enterprise SaaS, fintech infrastructure, and deep tech, with discipline around unit economics and path to profitability. Deep LP base supports follow-on into growth stage.'
    },
    notable_portfolio: ['Grab', 'Nium', 'PatSnap', '17LIVE', 'Licious', 'FirstCry'],
    vs_appworks: {
      zh: 'Vertex 是 institutional capital 代表 — Temasek 背景帶來 LP 穩定性與 regulatory access，但 brand 上偏「機構味」、deal velocity 慢、對 pre-seed founder discovery 著墨少。AppWorks 反差明顯：founder-first community、輕量決策、accelerator pipeline。Stage 上 Vertex 主場是 Series A/B（lead $10–20M），AppWorks 主場是 pre-seed/seed。Sector overlap 在 fintech / SaaS，但 Vertex 不碰 Web3、不做 accelerator，是 AppWorks portfolio 在 A 輪後的常見接力對象之一。',
      en: 'Vertex represents institutional capital—Temasek backing brings LP stability and regulatory access, but a more institutional brand, slower deal velocity, and limited pre-seed surface area. AppWorks is the opposite: founder-first community, lightweight decisions, accelerator-driven pipeline. Stage-wise Vertex leads Series A/B ($10–20M); AppWorks owns pre-seed/seed. Sector overlap in fintech/SaaS, but Vertex avoids Web3 and accelerators—making it a common Series A handoff partner rather than a direct competitor.'
    }
  }
];
