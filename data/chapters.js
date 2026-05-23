/* AppWorks 10-chapter analytical narrative.
   Bilingual (zh-Hant / en). Each chapter has lede + sections + Claude's observation.
*/
window.CHAPTERS = [
  {
    id: 'company-profile',
    icon: 'apartment',
    accent: 'fintech',
    title: { zh: '公司全景', en: 'Company Profile' },
    lede: {
      zh: '由創業者打造、為創業者服務的大東南亞區域型創投平台。',
      en: 'A Greater Southeast Asia venture platform built by founders, for founders.'
    },
    sections: [
      {
        heading: { zh: '創辦人 Jamie Lin 的轉身', en: "Jamie Lin's Pivot Home" },
        paragraphs: {
          zh: [
            '林之晨 (Jamie Lin) 在紐約完成 MBA、握有美國綠卡之際，選擇於 2009 年回到台灣。他的判斷是：行動網路即將重塑亞洲，而台灣需要一個真正理解創業者的資本平台。',
            '十五年後，他不只主導累計 US$386M 規模的四支基金，更於 2023 年接任台灣大哥大總經理，把創投人對科技週期的判斷帶進電信業。一人雙軌，既是基金 GP、也是上市公司經理人。'
          ],
          en: [
            'Jamie Lin gave up his US green card and returned to Taipei in 2009. His thesis was simple: mobile internet would reshape Asia, and the region needed a capital platform built by people who had actually started companies.',
            'Fifteen years later he runs four funds totaling US$386M AUM, and since 2023 also serves as President of Taiwan Mobile—rare dual track as both GP and listed-company operator.'
          ]
        }
      },
      {
        heading: { zh: '"by founders, for founders" 的組織信仰', en: '"By Founders, For Founders"' },
        paragraphs: {
          zh: [
            'AppWorks 於 2010 年啟動 Accelerator，定調自己不是傳統 VC，而是「創業者社群 + 基金」的雙層結構。團隊成員多半有過自己的創業經歷，與 founder 之間是同儕而非審批者。',
            '這套哲學落在實務上，就是 Accelerator 不收 equity、不收 token、不收費用——在全球加速器多半要 5-7% 股權的市場裡，這是極少數的存在。'
          ],
          en: [
            'AppWorks launched its Accelerator in 2010, positioning itself as a "founder community plus fund" rather than a conventional VC. Most partners have themselves started companies, framing peer-to-peer rather than top-down relationships.',
            'Operationally this shows up most clearly in the Accelerator: no equity, no tokens, no fees—an outlier in a global market where 5-7% equity programs are the norm.'
          ]
        }
      },
      {
        heading: { zh: '總部與覆蓋', en: 'Headquarters and Coverage' },
        paragraphs: {
          zh: [
            '總部設於台北，並以新加坡、雅加達、吉隆坡為三大延伸節點，覆蓋大東南亞 (GSEA) 九個市場。台灣作為製造與半導體腹地，與東南亞作為人口紅利市場，被刻意設計為一體兩面。'
          ],
          en: [
            'Headquartered in Taipei with operational nodes in Singapore, Jakarta and Kuala Lumpur, AppWorks covers nine markets across Greater Southeast Asia. Taiwan as a manufacturing and semiconductor base is deliberately paired with ASEAN as a demand market.'
          ]
        }
      }
    ],
    observation: {
      zh: '在亞洲，創辦人同時擔任上市公司高管的 GP 並不多——多數 VC 是金融背景出身，與被投公司之間的距離天生較遠。Jamie 一邊跑基金、一邊在台灣大營運上萬名員工的組織，這讓 AppWorks 對「規模化的痛點」有第一手的同理心，而不是只從 cap table 的角度看公司。這種雙重身份，也是它與 500 Global、Antler 這類純加速器型機構最關鍵的結構差異。',
      en: 'Few Asian GPs simultaneously run a listed operating company. Most VC partners come from finance, leaving a structural gap between investor and operator. Jamie running both a fund and Taiwan Mobile gives AppWorks first-hand empathy for scaling pain, a structural differentiator versus pure-play accelerators like 500 Global or Antler.'
    }
  },
  {
    id: 'funds-capital',
    icon: 'savings',
    accent: 'ecommerce',
    title: { zh: '基金與資本', en: 'Funds & Capital' },
    lede: {
      zh: '四支基金、累計 US$386M，Fund II 進入 top-quartile DPI。',
      en: 'Four funds, US$386M AUM, with Fund II hitting top-quartile DPI.'
    },
    sections: [
      {
        heading: { zh: '四支基金的節奏', en: 'Four Funds, Four Vintages' },
        paragraphs: {
          zh: [
            'Fund I (2012, US$11M) 是試水溫；Fund II (2014, US$52M) 押注行動網路週期，至今交出 1.9x DPI，落在亞洲同期 vintage 的 top-quartile。',
            'Fund III (2021, US$150M) 規模跳升近三倍，正值市場高峰進場，目前 DPI 0.5x，仍在熟成。Fund IV (2026, US$165M) 於今年完成 final close。'
          ],
          en: [
            'Fund I (2012, US$11M) was a pilot. Fund II (2014, US$52M) caught the mobile cycle and now sits at 1.9x DPI—top-quartile among its Asian vintage peers.',
            'Fund III (2021, US$150M) tripled in size at the market peak and currently shows 0.5x DPI, still maturing. Fund IV (2026, US$165M) just held its final close this year.'
          ]
        }
      },
      {
        heading: { zh: 'Fund IV 的 shortfall 訊號', en: 'Reading the Fund IV Shortfall' },
        paragraphs: {
          zh: [
            'Fund IV 原定 target US$360M，最終收在 US$165M，約 46% 達成率。這並非 AppWorks 單一現象，而是 2024-2026 全球 LP 對亞洲 venture 整體收緊的縮影。',
            '正面解讀是：在 fundraising 冰河期仍能合上 nine-figure 基金，本身就是一張通過 LP 盡調的票。但這也意味著未來四年的 deployment 紀律會被放大檢視。'
          ],
          en: [
            'Fund IV closed at US$165M against an original target of US$360M—roughly 46% of target. This mirrors the broader 2024-2026 LP retrenchment from Asian venture rather than an AppWorks-specific issue.',
            'Closing a nine-figure fund in a fundraising winter is itself an LP-validation signal, but it also means deployment discipline will be scrutinized harder over the next four years.'
          ]
        }
      },
      {
        heading: { zh: 'LP 結構：主權加企業', en: 'LP Mix: Sovereign Plus Corporate' },
        paragraphs: {
          zh: [
            'LP 名單從 Fund II 起納入 Taiwan NDF、Malaysia Khazanah、Korea KVIC 等主權與政策型基金，建立區域信用背書。',
            '企業 LP 含 Fubon Life、Cathay Life、Taiwan Mobile、Wistron、Phison、E Ink，跨保險、電信、製造、半導體——這份名單同時也是被投公司的潛在客戶與通路。'
          ],
          en: [
            'Since Fund II the LP base has included Taiwan NDF, Malaysia Khazanah and Korea KVIC—sovereign and policy capital providing regional credibility.',
            'Corporate LPs span Fubon Life, Cathay Life, Taiwan Mobile, Wistron, Phison and E Ink, covering insurance, telecom, manufacturing and semiconductors. The list doubles as a customer and channel roster for portfolio companies.'
          ]
        }
      },
      {
        heading: { zh: '單筆 ticket size', en: 'Check Sizes' },
        paragraphs: {
          zh: [
            'Seed 階段單筆 US$0.5-3M，Series A 至 C 則為 US$2M 起跳，並保留 follow-on 額度。整體屬於早期領投、可陪跑到成長期的 ticket 區間。'
          ],
          en: [
            'Seed checks range US$0.5-3M, with Series A through C starting at US$2M plus follow-on reserves. The structure supports lead positions at seed with capacity to ride into growth rounds.'
          ]
        }
      }
    ],
    observation: {
      zh: 'Fund II 的 1.9x DPI 在 2014 vintage 的亞洲基金裡是真實的 top-quartile 成績，但 Fund III 的 0.5x 與 Fund IV 的 shortfall 揭示了一個更普遍的問題：2021 年高峰進場的亞洲 VC 普遍卡在估值修正帶。對比 Sequoia Capital China 拆分、Tiger Global 縮編，AppWorks 仍能以更小規模、更區域聚焦的姿態完成 close，本身是亞洲 VC 板塊「中型機構生存」的代表性樣本。',
      en: "Fund II's 1.9x DPI is genuinely top-quartile for 2014 Asian vintages, but Fund III at 0.5x and the Fund IV shortfall reflect a broader pattern: 2021-peak Asian VCs stuck in valuation reset. Versus Sequoia China splitting and Tiger Global downsizing, AppWorks closing a smaller, regionally focused fund is a case study in how mid-sized Asian VCs survive the cycle."
    }
  },
  {
    id: 'portfolio-overview',
    icon: 'grid_view',
    accent: 'ai',
    title: { zh: '投資組合全景', en: 'Portfolio at a Glance' },
    lede: {
      zh: '140 餘家在投公司、6 IPO、1 hectocorn、2 decacorn、8 unicorn。',
      en: '140+ active portfolio, 6 IPOs, 1 hectocorn, 2 decacorns and 8 unicorns.'
    },
    sections: [
      {
        heading: { zh: '規模與覆蓋', en: 'Scale and Coverage' },
        paragraphs: {
          zh: [
            'Accelerator 累計輸出 2,029 位 founder、624 家仍在運營的 startup，分布於 GSEA 九個市場。整體 alumni 年營收合計 US$16.3B、累計估值約 US$30-32B。',
            '基金直接持股約 140 餘家，覆蓋電商、Fintech、SaaS、AI 基礎建設、區塊鏈、製造科技與國防科技等垂直。'
          ],
          en: [
            'The Accelerator has produced 2,029 founders and 624 active startups across nine GSEA markets, with cumulative alumni revenue of US$16.3B and combined valuation of US$30-32B.',
            'The funds hold direct positions in roughly 140 companies, spanning e-commerce, fintech, SaaS, AI infrastructure, blockchain, manufacturing tech and defense tech.'
          ]
        }
      },
      {
        heading: { zh: '退出紀錄', en: 'Exit Track Record' },
        paragraphs: {
          zh: [
            '截至 2026，共 6 家 IPO（Uber、17LIVE、91APP、Lalamove、Kuobrothers、GameSparcs）、8 件 IEO 案例，以及 1 hectocorn (Uber)、2 decacorns (Animoca Brands、Dapper Labs)、8 unicorns。',
            '對一支 2010 啟動、AUM 不到 US$400M 的區域型平台而言，這份退出密度在亞洲 VC 中位居前列。'
          ],
          en: [
            'Through 2026: 6 IPOs (Uber, 17LIVE, 91APP, Lalamove, Kuobrothers, GameSparcs), 8 IEO outcomes, 1 hectocorn (Uber), 2 decacorns (Animoca Brands, Dapper Labs) and 8 unicorns.',
            'For a regional platform launched in 2010 with sub-US$400M AUM, this exit density sits at the top tier of Asian VC outcomes.'
          ]
        }
      },
      {
        heading: { zh: '代表案例', en: 'Marquee Names' },
        paragraphs: {
          zh: [
            '消費與物流：Uber（hectocorn 出場）、Lalamove（unicorn）、Carousell、ShopBack；Web3：Animoca Brands、Dapper Labs (NBA Top Shot)、Pendle Finance；本地化垂直：17LIVE、91APP、Kuobrothers。',
            '這份名單橫跨 Web2 消費、跨境物流、NFT 基礎建設與 DeFi，反映 AppWorks 在不同週期都有押對主題的紀錄。'
          ],
          en: [
            'Consumer and logistics: Uber (hectocorn exit), Lalamove (unicorn), Carousell, ShopBack. Web3: Animoca Brands, Dapper Labs (NBA Top Shot), Pendle Finance. Local verticals: 17LIVE, 91APP, Kuobrothers.',
            'The lineup cuts across Web2 consumer, cross-border logistics, NFT infrastructure and DeFi, indicating thematic correctness across multiple cycles.'
          ]
        }
      }
    ],
    observation: {
      zh: '在亞洲 VC 裡，能同時擁有 Uber 早期持股 (Web2 高峰)、Animoca + Dapper Labs (Web3 高峰) 與 Pendle (DeFi 第二波) 的機構屈指可數。多數區域型基金會被綁在某一個垂直，而 AppWorks 的 portfolio 呈現出明顯的「週期切換」能力——這通常是 multi-stage 大型 VC 才有的特徵，出現在一個 US$386M AUM 的平台身上頗為罕見。',
      en: 'Few Asian VCs hold early positions across Uber (peak Web2), Animoca and Dapper Labs (peak Web3) and Pendle (second-wave DeFi). Most regional funds get pinned to a single vertical; AppWorks shows cycle-switching ability typically associated with multi-stage megafunds—unusual for a US$386M AUM platform.'
    }
  },
  {
    id: 'accelerator',
    icon: 'rocket_launch',
    accent: 'web3',
    title: { zh: '加速器歷程', en: 'The Accelerator' },
    lede: {
      zh: '十六年三十三屆，零股權、零代幣、零費用的亞洲特例。',
      en: 'Sixteen years, 33 batches, zero equity, zero tokens, zero fees.'
    },
    sections: [
      {
        heading: { zh: 'AW#1 到 AW#33 的主題演進', en: 'From AW#1 to AW#33' },
        paragraphs: {
          zh: [
            '2010 AW#1 鎖定 Internet 時代；2014 AW#8 起轉向 Mobile；2017 確立 GSEA 區域框架；2018 AW#16-17 由 Jamie 親口宣布全面轉向 AI + Blockchain，是平台史上最大一次主題重定位。',
            '2019 加入 Southeast Asia 形成 A.B.S. 框架，並沿用至今。2024 起 AW#32 開始納入 Manufacturing AI、Defense Tech、On-Chain Banking 與 PQC（後量子密碼），對應 Fund IV 部署主題。'
          ],
          en: [
            'AW#1 (2010) focused on internet. AW#8 (2014) pivoted to mobile. 2017 codified the GSEA regional frame. AW#16-17 (2018) was the largest reset, with Jamie publicly declaring a shift to AI plus Blockchain.',
            '2019 added Southeast Asia, forming the A.B.S. framework still in use. From AW#32 (2024) the program added Manufacturing AI, Defense Tech, On-Chain Banking and Post-Quantum Cryptography, aligned with Fund IV deployment themes.'
          ]
        }
      },
      {
        heading: { zh: '不收 equity 的反慣例設計', en: 'The No-Equity Anomaly' },
        paragraphs: {
          zh: [
            'Y Combinator 收 7%、500 Global 收 6%、Techstars 收 6%，全球加速器普遍以股權換取資源。AppWorks 選擇完全不收 equity、不收 token、不收費用，把 Accelerator 定位為「deal flow 漏斗」而非獨立 P&L。',
            '換句話說，加速器本身不獲利，獲利來自從 alumni 中挑出最強團隊由基金加碼。這是把短期收入讓給長期深度關係的決策。'
          ],
          en: [
            'Y Combinator takes 7%, 500 Global 6%, Techstars 6%—global accelerators monetize via equity. AppWorks takes none, framing the Accelerator as a deal-flow funnel rather than a standalone P&L.',
            'The program itself is unprofitable by design; returns come from the fund investing into the strongest alumni later. Short-term revenue is traded for long-term relationship depth.'
          ]
        }
      },
      {
        heading: { zh: 'Demo Day 與 Alumni 網絡', en: 'Demo Days and the Alumni Network' },
        paragraphs: {
          zh: [
            'Demo Day 輪流於 Taipei、Singapore、KL、Jakarta 舉辦，把 founder 直接帶到 GSEA 主要資本與客戶面前。每屆 30-50 個團隊，每年大約 80-100 家新進。',
            'Alumni 規模累計 2,029 位 founder，是 AppWorks 真正的核心資產：不是基金規模，而是這張十六年累積、跨九個市場的創業者網絡。'
          ],
          en: [
            'Demo Days rotate across Taipei, Singapore, KL and Jakarta, putting founders in front of GSEA capital and customers directly. Each batch admits 30-50 teams, yielding 80-100 new companies per year.',
            'Cumulative alumni: 2,029 founders. This network—not fund size—is the real core asset, compounded over sixteen years across nine markets.'
          ]
        }
      }
    ],
    observation: {
      zh: '把 Accelerator 當 loss leader 是策略性選擇：放棄掉 6-7% 股權的短期收益，換取的是一個「免費入場、不被股權稀釋」的招牌，使 AppWorks 在 GSEA 的 deal flow 入口端形成壟斷性吸引力。在亞洲，能與其在 founder 心智佔有率上對打的，可能只剩 Antler 與 Iterative，但兩者規模都還小於 AppWorks 的 alumni 基數。長期 compounding 之下，這張網絡的價值會持續超越基金本身的 AUM。',
      en: "Running the Accelerator as a loss leader is strategic: foregoing 6-7% equity buys an \"equity-free entry\" brand that compounds into a near-monopoly on GSEA early-stage deal flow. Only Antler and Iterative compete meaningfully for founder mindshare in Asia, both still smaller in alumni base. Over time this network likely outweighs the fund AUM in strategic value."
    }
  },
  {
    id: 'investment-thesis',
    icon: 'insights',
    accent: 'hardware',
    title: { zh: '投資論點', en: 'Investment Thesis' },
    lede: {
      zh: 'A.B.S. + GSEA + 台灣作為 launchpad，2026 起加押 physical AI。',
      en: 'A.B.S. plus GSEA with Taiwan as launchpad, now doubling down on physical AI.'
    },
    sections: [
      {
        heading: { zh: 'A.B.S. 框架', en: 'The A.B.S. Framework' },
        paragraphs: {
          zh: [
            'A.B.S. = AI + Blockchain + Southeast Asia。Jamie 強調這「不是三個賭注、是一個」——AI 提供生產力、Blockchain 提供金融與所有權基礎建設、SEA 提供尚未被完整數位化的市場深度，三者互為條件。',
            '在 2018 年宣布這個框架時，AI 與 Blockchain 在亞洲 VC 普遍仍被視為兩條獨立軌道，AppWorks 是早期把兩者綁在同一論點裡的機構之一。'
          ],
          en: [
            'A.B.S. stands for AI plus Blockchain plus Southeast Asia. Jamie frames it as "not three bets but one"—AI as productivity, blockchain as financial and ownership rails, SEA as the underdigitized market depth, each conditional on the others.',
            'When announced in 2018, AI and blockchain were still treated as separate tracks by most Asian VCs. AppWorks was among the earliest to fuse them into a single thesis.'
          ]
        }
      },
      {
        heading: { zh: 'GSEA 的定義與市場深度', en: 'Defining GSEA' },
        paragraphs: {
          zh: [
            'GSEA = ASEAN + Taiwan + 香港 / 澳門 + 東帝汶，涵蓋九個市場、約 7 億人口。光是 e-commerce GMV 就達 US$42B，其中台灣佔約 66%，是區域 launchpad。',
            '邏輯是：台灣擁有最成熟的支付、物流與消費者行為，可作為產品的第一個量產驗證場；驗證成功後再向 SEA 人口紅利市場擴張。'
          ],
          en: [
            'GSEA = ASEAN plus Taiwan plus HK/Macau plus East Timor—nine markets, roughly 700M people. E-commerce GMV alone reaches US$42B, with Taiwan accounting for about 66% and serving as regional launchpad.',
            'The logic: Taiwan has the most mature payment, logistics and consumer behavior layer for first-market validation, before scaling into the demographic depth of SEA.'
          ]
        }
      },
      {
        heading: { zh: '選人選題標準', en: 'Selection Criteria' },
        paragraphs: {
          zh: [
            '對 founder：obsessed with true PMF（不滿足於假象指標）、長線玩家（十年以上心理準備）、反共識思考者、最好是連續創業者。對題目：可規模化、區域可複製、與 A.B.S. 主題對齊。',
            '與多數亞洲 VC 偏好 ex-FAANG / ex-McKinsey 履歷不同，AppWorks 的篩選更看重「執著於真實使用者問題」這項軟特質。'
          ],
          en: [
            'On founders: obsessed with true PMF (not vanity metrics), long-horizon, contrarian thinkers, ideally repeat founders. On problems: scalable, regionally replicable, aligned with A.B.S.',
            'Unlike many Asian VCs that filter on ex-FAANG or ex-McKinsey resumes, AppWorks weights the softer trait of obsession with real user problems more heavily.'
          ]
        }
      },
      {
        heading: { zh: '2025-2026 thesis 轉折', en: '2025-2026 Thesis Pivot' },
        paragraphs: {
          zh: [
            '最新論點：AI 正從 digital assistants 轉向 physical labor forces，意味著機器人、自動化、製造 AI 將吃下下一波價值。同時 AI 加速 underdigitized industries 的數位化進程。',
            '在 blockchain 側則押注 Solana LSTs（如 Sanctum）與 institutional rails，承接機構資金進入鏈上的下一波結構性需求。'
          ],
          en: [
            'Latest thesis: AI is shifting from digital assistants to physical labor forces—robotics, automation and manufacturing AI capture the next value wave. AI also accelerates digitization of underdigitized industries.',
            'On the blockchain side, the bets are on Solana LSTs (e.g. Sanctum) and institutional rails, riding the next structural wave of institutional capital moving on-chain.'
          ]
        }
      }
    ],
    observation: {
      zh: 'A.B.S. 框架的真正獨特之處不在三個關鍵字，而在於 AppWorks 願意公開把 thesis 寫死——多數亞洲 VC 對 thesis 保持模糊以保留靈活性，但 AppWorks 用明確主題吸引同類型 founder 自我篩選，本質是一種「品牌即漏斗」操作。對比 a16z 用 thesis essays 主導敘事、Sequoia 偏好低調，AppWorks 介於兩者之間：論點公開但語氣務實。2026 押 physical AI 的轉向，與 NVIDIA、Figure、Physical Intelligence 在美國的方向一致，顯示其節奏並未落後全球前沿。',
      en: 'The real distinction of A.B.S. is not the three keywords but the willingness to commit to a public thesis—most Asian VCs stay vague to preserve flexibility, while AppWorks uses explicit themes to self-select aligned founders, effectively turning brand into funnel. Versus a16z driving narrative via thesis essays and Sequoia preferring quiet, AppWorks sits in between: public yet pragmatic. The 2026 pivot to physical AI tracks NVIDIA, Figure and Physical Intelligence, suggesting the cadence remains on the global frontier.'
    }
  },
  {
    id: 'thought-leadership',
    icon: 'auto_stories',
    accent: 'social',
    title: { zh: '思想領導', en: 'Thought Leadership' },
    lede: {
      zh: 'AppWorks 的影響力不靠廣告，靠長達十五年的公開寫作與觀點輸出。',
      en: 'AppWorks built influence not through ads, but through fifteen years of public writing and conviction.'
    },
    sections: [
      {
        heading: { zh: 'Blog 主題的三條主軸', en: 'Three Editorial Pillars' },
        paragraphs: {
          zh: [
            'AppWorks 官方 Blog 與 Jamie Lin 個人專欄共同構成大東南亞創投圈最高產的內容資產之一。主題分布大致落在三條主軸：第一是「創業者方法論」，包含募資節奏、PMF 判斷、團隊建構；第二是「主題趨勢解讀」，從早期 Internet、Mobile，一路寫到 Blockchain、AI Agent；第三是「市場結構觀察」，特別針對台灣與東南亞的科技資本流向提出長期視角。',
            '與多數 VC 把 Blog 當作 deal sourcing 漏斗不同，AppWorks 的內容更像是創業者教材庫。文章長度、引用框架、結構鋪陳都明顯帶有教學意圖，這也呼應其 Accelerator 內定位——先教育，再投資。'
          ],
          en: [
            "The AppWorks blog and Jamie Lin's personal column together form one of the most prolific content libraries in Greater Southeast Asia venture. The output clusters into three pillars: founder methodology (fundraising cadence, PMF judgement, team building), thesis interpretation (Internet to Mobile to Blockchain to AI Agents), and structural commentary on Taiwan and ASEAN capital flows.",
            'Unlike most VCs who treat blogs as a sourcing funnel, AppWorks writes as if compiling a founder textbook. The length, frameworks, and pedagogical tone mirror its accelerator stance: educate first, invest second.'
          ]
        }
      },
      {
        heading: { zh: 'Jamie Lin 的五個核心思想', en: "Jamie Lin's Five Core Ideas" },
        paragraphs: {
          zh: [
            '解構 Jamie Lin 過去十五年的公開言論，可以歸納出五個反覆出現的核心信念：(1)「By Founders, For Founders」——VC 的合法性來自曾經創業的同理心；(2)「A.B.S. 統一框架」——AI、Blockchain、SEA 不是三個賽道，而是同一個結構性機會的三個切面；(3)「長線下注 vs cycle chasing」——主題確定後給予多支基金的時間複利，而非追逐熱點；(4)「Taiwan as Mission」——把台灣科技資本的能見度提升當作個人志業；(5)「Operator > Investor」——身分認同是 operator，VC 只是工具。',
            '這五個信念也解釋了一些外界容易誤讀的決策，例如為何在 Web3 寒冬仍堅守 146 個 portfolio、為何同時兼任 Taiwan Mobile 總經理、為何 Fund IV 即使募資不如預期仍維持原本節奏。'
          ],
          en: [
            'Across fifteen years of writing, five recurring convictions define Jamie Lin: (1) By Founders, For Founders—VC legitimacy stems from founder empathy; (2) The A.B.S. unifying frame—AI, Blockchain, and SEA are three faces of one structural shift; (3) Long bets over cycle chasing—once a thesis is set, give it multi-fund compounding; (4) Taiwan as Mission—elevating Taiwan tech visibility is a personal calling; (5) Operator over Investor—identity sits with the operator, VC is just a vehicle.',
            'These beliefs decode otherwise puzzling moves: holding 146 Web3 portfolio names through the winter, taking the Taiwan Mobile CEO role, and keeping Fund IV deployment cadence despite shortfall.'
          ]
        }
      },
      {
        heading: { zh: '必讀文章與外溢效應', en: 'Must-Read Pieces and Spillover' },
        paragraphs: {
          zh: [
            '若僅選三至五篇代表作，多數熟悉 AppWorks 的讀者會指向：早期關於「Taiwan needs more startup capital」的呼籲文、A.B.S. 框架正式宣告文、以及近年將 AI Agent 定位為「下一個 mobile」的多篇延伸論述。這些文章不僅在台灣轉發，也固定被新加坡、馬來西亞、印尼的科技媒體引用，形成跨境的話語權。'
          ],
          en: [
            'A canonical reading list usually includes Jamie\'s early "Taiwan needs more startup capital" essay, the formal A.B.S. thesis declaration, and recent pieces framing AI Agents as "the next mobile." These posts circulate not only in Taiwan but are reliably cited by tech media in Singapore, Malaysia, and Indonesia, generating cross-border narrative power.'
          ]
        }
      }
    ],
    observation: {
      zh: '相較於 Peak XV、East Ventures 偏好以 deal announcement 為主的訊息策略，AppWorks 更像 a16z 早期的內容打法——以長文教育市場、塑造詞彙、再以詞彙吸引 founder。差別在於 a16z 的對象是矽谷讀者，AppWorks 對應的是大東南亞讀者。這種「教材式內容」的累積效應在熱潮退去後反而會放大，是 Tier 2 AUM 能換取 Tier 1 community 的關鍵槓桿。',
      en: 'Where Peak XV and East Ventures lean on deal announcements, AppWorks resembles early a16z—educating the market with long-form essays, minting vocabulary, then using that vocabulary to attract founders. The difference is audience: a16z spoke to Silicon Valley, AppWorks to GSEA. This textbook-style content compounds especially well after hype cycles fade, and it is the lever that lets a Tier 2 AUM firm sustain a Tier 1 community.'
    }
  },
  {
    id: 'team',
    icon: 'groups',
    accent: 'saas',
    title: { zh: '團隊', en: 'Team' },
    lede: {
      zh: '26 人編制、6 位 Partner、強內部晉升文化，但所有目光仍集中在創辦人身上。',
      en: 'A 26-person firm with six partners and a strong promote-from-within culture—yet attention still centers on the founder.'
    },
    sections: [
      {
        heading: { zh: 'Partner 陣容', en: 'The Partner Bench' },
        paragraphs: {
          zh: [
            '除了 Founding Partner Jamie Lin 之外，AppWorks 目前有五位 Partner：Joseph Chan 與 Andy Tsai 皆來自 CID Group，後者於 2018 年加入；Jessica Liu 於 2014 年從 Standard Chartered 轉入，主導 SEA 與 Web3 投資；Nice Cheng 負責營運與資金端關係。Principal 層則有 Alyssa Chen、Ching Tseng（NCCU BBA，2015 實習進場、2022 升任 Principal，目前帶 Web3 業務）、Sophie Chiu 三人。',
            '較資淺的 Venture Principal / Associate / Analyst 共五位，包含負責日本橋接的 Jun Wakabayashi、Michelle Lin、Nathan Alexander、Bill Hsu、Johnny Chuang。投資團隊之外，Operations 八人撐起 Accelerator、Demo Day、社群活動。'
          ],
          en: [
            'Beyond founding partner Jamie Lin, AppWorks has five partners: Joseph Chan and Andy Tsai (both from CID Group, the latter joining in 2018); Jessica Liu (joined 2014 from Standard Chartered, leading SEA and Web3); and Nice Cheng on operations and capital relationships. The principal layer comprises Alyssa Chen, Ching Tseng (NCCU BBA, intern in 2015, promoted to principal in 2022, currently heading Web3), and Sophie Chiu.',
            'A further five venture principals, associates, and analysts sit below—including Jun Wakabayashi for the Japan bridge, plus Michelle Lin, Nathan Alexander, Bill Hsu, and Johnny Chuang. An eight-person operations team powers the accelerator, Demo Day, and community programming.'
          ]
        }
      },
      {
        heading: { zh: '內部晉升文化', en: 'Promote From Within' },
        paragraphs: {
          zh: [
            'Ching Tseng 從大學實習生一路升到 Principal、進而帶 Web3 業務，是 AppWorks 內部晉升文化的典型範例。對比多數新加坡 VC 偏好從投行、Big Tech 高薪挖角，AppWorks 更傾向從 Accelerator 營運端、Analyst 端培養。',
            '這種文化的優點是團隊對 GSEA 主題與 community 細節有極高的內隱知識，缺點則是當主題切換（例如從 Mobile 切到 AI Agent）時，外部專業血液補充速度可能慢於 Peak XV、East Ventures 這類大型團隊。'
          ],
          en: [
            "Ching Tseng's arc—university intern in 2015, principal in 2022, now leading Web3—is the canonical AppWorks promotion story. Where Singapore peers typically poach from investment banks or Big Tech, AppWorks prefers to grow talent from the accelerator floor and analyst bench.",
            'The upside is deep tacit knowledge of GSEA themes and community mechanics. The downside is slower external infusion when themes pivot—say from Mobile to AI Agents—relative to larger benches at Peak XV or East Ventures.'
          ]
        }
      },
      {
        heading: { zh: 'Jamie Lin 的雙重身分', en: "Jamie Lin's Dual Hat" },
        paragraphs: {
          zh: [
            'Jamie Lin 同時擔任 AppWorks Founding Partner 與 Taiwan Mobile 總經理，是團隊治理上最值得觀察的變數。一方面，Taiwan Mobile 提供了難以複製的 corporate LP 與電信基礎設施視角，對 AI、5G、Edge Computing 相關 portfolio 有直接的戰略增值；另一方面，注意力分配與潛在利益衝突是真實存在的問題。'
          ],
          en: [
            "Jamie Lin's dual role—AppWorks founding partner and Taiwan Mobile CEO—is the most consequential governance variable. The upside is access to a corporate LP and telecom-infrastructure lens that few peers can replicate, with direct strategic value for AI, 5G, and edge-compute portfolio names. The downside is attention split and latent conflict-of-interest risk."
          ]
        }
      }
    ],
    observation: {
      zh: '以 26 人撐起 Accelerator + VC + Demo Day 區域化 + Aiworks 顧問業務，AppWorks 的人均產出在亞洲 VC 中屬於高密度配置。但團隊結構是「金字塔」而非「合夥制」——Jamie Lin 的個人品牌仍佔據絕大多數對外能見度。對比 Peak XV、East Ventures 採用多個 Partner 各自帶聲量的策略，AppWorks 若要進入下一個十年，分散品牌（讓 Jessica Liu、Joseph Chan 等 Partner 獲得獨立論述空間）會是值得觀察的訊號。',
      en: 'Running an accelerator, a VC, a regional Demo Day circuit, and the Aiworks consulting arm with 26 people is high output density by Asian VC standards. But the structure is a pyramid rather than a true partnership—Jamie Lin\'s personal brand still absorbs most external visibility. Peak XV and East Ventures distribute voice across multiple partners; if AppWorks wants a decisive next decade, watch whether figures like Jessica Liu and Joseph Chan are given independent narrative space.'
    }
  },
  {
    id: 'ecosystem',
    icon: 'hub',
    accent: 'edtech',
    title: { zh: '生態系統', en: 'Ecosystem' },
    lede: {
      zh: 'Alumni 網絡、Demo Day 巡迴、Aiworks pivot、政府連結，四股力量共同編織 AppWorks 的護城河。',
      en: 'Alumni networks, a regional Demo Day circuit, the Aiworks pivot, and government ties weave the AppWorks moat.'
    },
    sections: [
      {
        heading: { zh: 'Aiworks：從 Bootcamp 到 AI 顧問', en: 'Aiworks: From Bootcamp to AI Advisory' },
        paragraphs: {
          zh: [
            'AppWorks School 已正式 rebrand 為 Aiworks，定位從培訓 iOS／Android／Front-End／Back-End 工程師（累計超過 1,300 位畢業生）轉為「AI 企業顧問」，協助企業導入 ChatGPT Enterprise 與 AI Agent automation。目前已成為 OpenAI Services Partner，並與 UiPath、台灣大哥大企業服務（TWMES）建立合作。',
            '這次 pivot 在策略上有兩層意義：第一，將 bootcamp 過去累積的工程師網絡轉化為「企業導入 AI 的最後一哩」服務商；第二，與母公司 Taiwan Mobile 的企業客戶基礎產生槓桿，形成 VC + 顧問 + 電信通路 的鐵三角。'
          ],
          en: [
            'AppWorks School has formally rebranded to Aiworks, pivoting from a coding bootcamp (1,300-plus iOS, Android, front-end, and back-end engineers shipped) into an enterprise AI advisory shop—helping companies deploy ChatGPT Enterprise and AI agent automation. It is now an OpenAI Services Partner with active partnerships including UiPath and Taiwan Mobile Enterprise Services (TWMES).',
            'Strategically, the pivot does two things: it converts the bootcamp\'s engineer alumni base into a "last-mile AI deployment" workforce, and it leverages Taiwan Mobile\'s enterprise client base, forming a VC-plus-advisory-plus-telco triangle.'
          ]
        }
      },
      {
        heading: { zh: 'Alumni 網絡作為 Moat', en: 'Alumni Network as Moat' },
        paragraphs: {
          zh: [
            'AppWorks 累計 2,029 位 founders、624 家 active startups、創造 27,202 個工作機會。這個數字級別在大東南亞 VC 中沒有對手——500 Global 雖然 portfolio 數量類似，但分散在全球；Peak XV 則沒有 accelerator，alumni 屬性截然不同。',
            'Alumni 不只是 deal flow 來源，更是 portfolio company 的客戶、人才、跨境合作對象。當一家 AW#28 的 AI startup 想進入印尼，AW#13 的 ShopBack alumni 是現成的諮詢與客戶網絡。這種跨期、跨地、跨主題的網絡效應，才是 AppWorks 真正的 moat。'
          ],
          en: [
            'AppWorks now counts 2,029 founders, 624 active startups, and 27,202 jobs created. At this scale there is no GSEA peer—500 Global has comparable portfolio counts but spread globally, while Peak XV runs no accelerator and has a fundamentally different alumni profile.',
            'Alumni are not just deal flow. They are customers, talent pools, and cross-border partners for current portfolio companies. When an AW#28 AI startup looks toward Indonesia, an AW#13 ShopBack alumnus becomes an instant advisor and customer node. This cross-cohort, cross-geography, cross-thesis effect is the real moat.'
          ]
        }
      },
      {
        heading: { zh: 'Demo Day 區域化與政府連結', en: 'Regionalized Demo Day and Government Ties' },
        paragraphs: {
          zh: [
            'Demo Day 每年舉辦兩次，採取 Taipei、Singapore、Kuala Lumpur、Jakarta 四地巡迴模式，是 AppWorks 將「GSEA 是一個市場」具體化的儀式。對比多數 VC 的 Demo Day 仍集中於單一城市，AppWorks 此舉強化了區域品牌、也分散了 LP 與 corporate partner 風險。',
            '在資金端，AppWorks 與台灣國發基金 (NDF)、韓國 KVIC、馬來西亞 Khazanah 等政府／主權基金建立 LP 關係，這在亞洲 VC 中屬於少見的政府背書深度。'
          ],
          en: [
            'Demo Day runs twice a year on a Taipei–Singapore–Kuala Lumpur–Jakarta circuit, operationalizing the "GSEA is one market" thesis. Most peer VCs still concentrate Demo Day in a single city; AppWorks\' rotation reinforces regional brand and diversifies LP and corporate-partner exposure.',
            "On capital, AppWorks counts Taiwan's NDF, Korea's KVIC, and Malaysia's Khazanah among its LPs—an unusual depth of sovereign endorsement in Asian VC."
          ]
        }
      }
    ],
    observation: {
      zh: 'AppWorks 的生態系統不是「投了一家公司之後幫忙」，而是「公司還沒誕生之前先建好土壤」。Aiworks 提供企業 AI 落地、Accelerator 提供方法論、Demo Day 提供跨境曝光、Alumni 提供客戶與人才、政府 LP 提供資金與政策訊號——這五層構造是其他 SEA VC 短期內難以複製的。但這也意味著 AppWorks 的營運複雜度遠高於純 VC，任何一層斷裂都會放大成系統性風險。',
      en: 'The AppWorks ecosystem is not "help after we invest"—it is "prepare the soil before the company exists." Aiworks delivers enterprise AI deployment, the accelerator delivers methodology, Demo Day delivers regional exposure, alumni deliver customers and talent, sovereign LPs deliver capital and policy signal. These five layers are hard for SEA peers to replicate quickly—but they also raise operational complexity well above a pure VC, where any single layer breaking amplifies into systemic risk.'
    }
  },
  {
    id: 'market-positioning',
    icon: 'leaderboard',
    accent: 'mobility',
    title: { zh: '市場定位', en: 'Market Positioning' },
    lede: {
      zh: 'AUM 排名中段，社群規模 Tier 1，AppWorks 的位置在所有 SEA VC 中最特殊。',
      en: 'Mid-pack on AUM, top-tier on community—AppWorks occupies the most distinctive seat in SEA VC.'
    },
    sections: [
      {
        heading: { zh: 'SEA VC 對比快照', en: 'SEA VC Comparison Snapshot' },
        paragraphs: {
          zh: [
            '把 AppWorks 放回大東南亞 VC 同業中比較，可以快速看出其 AUM 屬於中段、但 community 與 accelerator 屬性獨樹一格：',
            '- AppWorks：AUM 約 $386M，總部 Taipei，覆蓋 GSEA，有 Accelerator',
            '- 500 Global SEA：累計約 $500M，據點 SF／Bangkok／KL，有 Accelerator',
            '- Peak XV（前 Sequoia SEA）：AUM 約 $9B，據點 Singapore＋Bangalore，無 Accelerator',
            '- East Ventures：AUM 約 $1.7B，據點 Jakarta＋Singapore，無 Accelerator，印尼重壓',
            "- Monk's Hill Ventures：AUM $200M＋，據點 Singapore，無 Accelerator，單筆 $3-7M",
            '- Vertex Ventures SEA：Fund V 約 $541M，據點 Singapore，Temasek 背書',
            '- Golden Gate Ventures：AUM 約 $250M，據點 Singapore',
            '- Openspace Ventures：AUM 約 $135M，據點 Singapore'
          ],
          en: [
            'Benchmarking AppWorks against GSEA peers makes the picture clear—mid-pack on AUM, distinctive on community and accelerator design:',
            '- AppWorks: ~$386M AUM, Taipei HQ, GSEA coverage, accelerator',
            '- 500 Global SEA: ~$500M cumulative, SF/Bangkok/KL bases, accelerator',
            '- Peak XV (ex-Sequoia SEA): ~$9B AUM, Singapore+Bangalore, no accelerator',
            '- East Ventures: ~$1.7B AUM, Jakarta+Singapore, no accelerator, Indonesia-heavy',
            "- Monk's Hill Ventures: $200M+, Singapore, no accelerator, $3-7M tickets",
            '- Vertex Ventures SEA: ~$541M Fund V, Singapore, Temasek-backed',
            '- Golden Gate Ventures: ~$250M, Singapore',
            '- Openspace Ventures: ~$135M, Singapore'
          ]
        }
      },
      {
        heading: { zh: '三大差異化關鍵字', en: 'Three Differentiators' },
        paragraphs: {
          zh: [
            'AppWorks 的差異化可以用三組關鍵字概括：(1) By Founders, For Founders——community 不只是行銷詞，而是 deal flow、人才、客戶的真實來源；(2) Accelerator + VC 雙引擎——這個模式在 SEA 唯一可比者只有 500 Global SEA，但後者更靠近 SF 體系；(3) GSEA 框架——把 Taiwan 與 ASEAN 視為單一市場，是區域內目前唯一從 Taipei 出發、卻把資源實質配置到東南亞的玩家。'
          ],
          en: [
            'Three keywords capture the differentiation: (1) By Founders, For Founders—community as a true source of deal flow, talent, and customers, not a slogan; (2) Accelerator + VC twin engine—a model whose only real GSEA analogue is 500 Global SEA, which still leans toward the SF system; (3) The GSEA frame—treating Taiwan and ASEAN as one market, with AppWorks as the only player operating from Taipei while materially deploying into Southeast Asia.'
          ]
        }
      },
      {
        heading: { zh: 'Tier 評估', en: 'Tier Assessment' },
        paragraphs: {
          zh: [
            '若以 AUM 為單一指標，AppWorks 屬於 SEA VC 的 Tier 2（落在 Monk\'s Hill、Golden Gate、Openspace 之上，但與 Peak XV、East Ventures、Vertex 有量級差距）。若以 community 規模、founder 觸達、跨主題持續力為指標，AppWorks 進入 Tier 1。'
          ],
          en: [
            "On AUM alone AppWorks sits in SEA Tier 2—above Monk's Hill, Golden Gate, and Openspace, but an order of magnitude behind Peak XV, East Ventures, and Vertex. On community scale, founder reach, and cross-thesis durability, AppWorks lands in Tier 1."
          ]
        }
      }
    ],
    observation: {
      zh: '當 Peak XV 與 Vertex 開始下沉到 seed stage，AppWorks 在傳統 Accelerator 價值會受到擠壓，但「GSEA 視為一個市場」的框架反而成為差異點——新加坡系 VC 大多視 Taiwan 為 secondary market，而 AppWorks 是唯一以 Taipei 為 HQ 卻有實質 SEA deployment 的玩家。長期來看，這個位置可能比 AUM 排名更重要。',
      en: "As Peak XV and Vertex push down into seed, AppWorks' traditional accelerator value will compress—but the \"GSEA as one market\" framing actually becomes the differentiator. Singapore-system VCs largely treat Taiwan as secondary; AppWorks remains the only Taipei-headquartered firm with material SEA deployment. Over time, this seat may matter more than the AUM ranking."
    }
  },
  {
    id: 'evolution',
    icon: 'timeline',
    accent: 'hardware',
    title: { zh: '主題演進史', en: 'Thesis Evolution' },
    lede: {
      zh: '六個 Phase、十五年，AppWorks 用主題切換的節奏定義了大東南亞早期生態。',
      en: 'Six phases, fifteen years—AppWorks set the pace of GSEA early-stage venture by switching themes.'
    },
    sections: [
      {
        heading: { zh: '六個 Phase 演進', en: 'Six Phases' },
        paragraphs: {
          zh: [
            'AppWorks 自 2010 年成立以來，主題演進可清楚切成六個階段：',
            '- Phase 1（2010-2013）Internet：EZTABLE、CHOCO TV 等代表案，奠基台灣 Internet 創業生態。',
            '- Phase 2（2014-2017）Mobile + SEA 擴張：Lalamove（2015）、KKday（2016）開始外擴。',
            '- Phase 3（2017-2018）GSEA 框架成形：Carousell Series C、ShopBack 加入 AW#13，論述正式區域化。',
            '- Phase 4（2018-2020）A.B.S. 確立：AW#17 起公開招收 AI／Blockchain 團隊，Animoca、Pendle 進入 portfolio。',
            '- Phase 5（2021-2023）Web3 加倍下注 + Demo Day 區域化：累計 146 個 Web3 portfolio，Demo Day 開始巡迴四地。',
            '- Phase 6（2024-2026）Agentic AI + 戰略收斂：主題回到 AI Agent 應用層，Fund IV target $360M、實際 $165M，進入聚焦期。'
          ],
          en: [
            "Since 2010, AppWorks' thesis evolution maps cleanly onto six phases:",
            '- Phase 1 (2010-2013) Internet: EZTABLE, CHOCO TV anchor the Taiwan Internet era.',
            '- Phase 2 (2014-2017) Mobile + SEA push: Lalamove (2015), KKday (2016) begin the regional move.',
            '- Phase 3 (2017-2018) GSEA frame crystallizes: Carousell Series C, ShopBack joins AW#13—the regional narrative becomes formal.',
            '- Phase 4 (2018-2020) A.B.S. takes hold: AW#17 onward openly recruits AI and Blockchain teams; Animoca and Pendle enter portfolio.',
            '- Phase 5 (2021-2023) Web3 doubled down + Demo Day regionalized: 146 Web3 portfolio names, Demo Day enters its four-city rotation.',
            '- Phase 6 (2024-2026) Agentic AI + strategic focus: thesis returns to AI Agent application layer; Fund IV targets $360M, closes at $165M, ushering in a focus era.'
          ]
        }
      },
      {
        heading: { zh: '地理擴張與 AW#32-33 硬科技轉向', en: 'Geographic Expansion and the AW#32-33 Hard-Tech Turn' },
        paragraphs: {
          zh: [
            '地理軸上，AppWorks 從 Taipei 起家，逐步將 community footprint 擴張至 Singapore、Kuala Lumpur、Jakarta，Demo Day 巡迴是最具象的展現。日本則透過 Jun Wakabayashi 進行 bridging，尚未形成穩定 deal flow。',
            '主題軸上，最值得注意的是 AW#32-33 的硬科技大轉向：從以軟體與 Web3 為主的招收結構，明顯增加 Manufacturing AI、Defense Tech、Robotics 等硬科技團隊比例。'
          ],
          en: [
            'Geographically, AppWorks grew from Taipei outward, layering community footprint into Singapore, Kuala Lumpur, and Jakarta—most visibly through the Demo Day circuit. Japan is being bridged by Jun Wakabayashi but has not yet matured into stable deal flow.',
            "On the thesis axis, the AW#32-33 hard-tech turn deserves attention: a clear lift in Manufacturing AI, Defense Tech, and Robotics cohort share alongside the historic software and Web3 mix."
          ]
        }
      },
      {
        heading: { zh: 'SWOT 戰略觀察', en: 'SWOT Read' },
        paragraphs: {
          zh: [
            'Strengths：2,029 人 founder community、台灣 corporate LP 生態、跨主題的持續輸出力、早期賭注命中率（Lalamove、Carousell、Animoca、Pendle）。',
            'Weaknesses：AUM 屬 Tier 2、Fund IV 募資不如預期、SEA 本地品牌能見度仍弱於 East Ventures／Peak XV、Exit 集中於少數 mega-winners。',
            'Opportunities：台灣製造業 AI hub、Defense Tech、Korea-Taiwan-SEA 走廊、AI Agent 應用層的早期窗口。',
            'Risks：Web3 寒冬延續造成 146 portfolio mark-down、Peak XV／Vertex 下沉到 seed 擠壓 Accelerator 價值、GSEA 框架不被 LP 接受、Jamie Lin successor risk。'
          ],
          en: [
            'Strengths: a 2,029-strong founder community, the Taiwan corporate LP ecosystem, sustained cross-thesis output, and early-bet hit rate (Lalamove, Carousell, Animoca, Pendle).',
            'Weaknesses: Tier 2 AUM, Fund IV shortfall, weaker local brand in SEA versus East Ventures and Peak XV, and exit concentration in a few mega-winners.',
            'Opportunities: Taiwan as a manufacturing-AI hub, Defense Tech, the Korea-Taiwan-SEA corridor, and the early window in AI Agent applications.',
            'Risks: a prolonged Web3 winter forcing markdowns across 146 names, Peak XV and Vertex compressing accelerator value as they move into seed, LP skepticism toward the GSEA frame, and Jamie Lin successor risk.'
          ]
        }
      }
    ],
    observation: {
      zh: "AppWorks 過去十五年最被低估的能力，是「主題切換的節奏感」——既不像短線 VC 追熱點，也不像深科技 VC 困在單一賽道。從 Internet 到 Mobile、從 Mobile 到 A.B.S.、再到 Agentic AI 與硬科技，每次切換都比市場早約 18-24 個月。這個節奏感如果在 Phase 6 後仍能延續，AppWorks 的長期定位會更接近「亞洲版 Benchmark + YC 混合體」而非單純的 SEA VC。",
      en: "AppWorks' most underrated capability over fifteen years is thesis-switching cadence—neither cycle chasing like generalist VCs nor trapped in a single lane like deep-tech specialists. Internet to Mobile, Mobile to A.B.S., now Agentic AI and hard tech—each pivot has led the market by roughly 18 to 24 months. If that cadence holds beyond Phase 6, AppWorks' long-term seat looks closer to an \"Asian Benchmark-meets-YC hybrid\" than a conventional SEA VC."
    }
  }
];
