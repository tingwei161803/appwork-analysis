# AppWorks Portfolio Atlas

> 把 [AppWorks](https://appworks.tw) — 台灣與大東南亞 (GSEA) 最大的創投 + 加速器 — 整個投資組合
> 整理成一份可互動、可雙語切換、可三軸篩選、可全文搜尋的網頁圖鑑。
>
> An interactive bilingual atlas of AppWorks' portfolio across Taiwan and Greater Southeast Asia,
> with industry × country × status filtering and full-text search.

繁體中文版說明文件即為本檔（README.md），下方為雙語並列。

---

## 線上版 (Live) — GitHub Pages

| 入口 | URL |
| --- | --- |
| 🌐 互動圖鑑 | <https://appwork-analysis.peteraim.com/> |

直接打開即可使用：

- 🔍 全文搜尋（公司名 / 產業 / AW 加速器屆數 / 地區關鍵字）
- 🏷️ 三軸 chips 篩選：**產業 (19)** × **地區 (13)** × **狀態 (7)**
- 🇹🇼 / 🇬🇧 中英全頁切換（按右上角 `中文` / `EN`）
- 🌗 深 / 淺色模式（按右上角月亮 / 太陽）
- 🪟 點任一卡片開啟詳細 Dialog；←/→ 鍵在公司之間切換；`Esc` 關閉
- 🔗 Dialog 內每筆都附上資料來源連結，並支援以 `#公司 id` deep-link

> **Data sources** — 內容來自 AppWorks 官方 [Investments 頁](https://appworks.tw/investments/)、
> [Blog](https://appworks.tw/blog/)、Crunchbase 與公開新聞報導。
> 本站為非官方整理，內容僅供研究參考；金額、屆數、狀態以 AppWorks 官方資料為準。

---

## 收錄資料

- **342 家公司**（涵蓋 AppWorks Fund I–IV 與 Accelerator AW#1–AW#33 alumni 的主要案例）
- **10 章節深度分析**（公司 / 基金 / 投資組合 / 加速器 / 論點 / 思想領導 / 團隊 / 生態系 / 市場定位 / 演進史，每章含 Claude 觀察）
- **Demo Day 全紀錄**（AW#1 ~ AW#33 每屆主題、規模、代表案例）
- **22 篇 Why We Invested** 系列摘要 + 金句
- **5 家 SEA VC 競爭對手** 深度檔（500 Global / Peak XV / East Ventures / Monk's Hill / Vertex）
- **25 句 Jamie Lin 名言錄**（橫跨 mrjamie.cc、AppWorks Blog、媒體訪談）
- **Top 30 公司**附 founders + funding rounds 表
- **4 軸**（產業 × 地區 × 狀態 × AW 屆數）篩選 + 全文搜尋
- **3 張圖表**（產業 donut / 地區 donut / 狀態 bar）
- **24 項名詞表 Glossary**（GSEA、A.B.S.、DPI、Hectocorn…）
- **主題演進時間軸**（6 個 Phase，含 turning points + signature deals）
- **GSEA 地理 bubble map**（亞洲 13 地區，泡泡大小 = 投資家數）
- **AW 屆數 × 產業熱力圖**
- **退出漏斗**（Accelerator → 基金投資 → Unicorn → IPO/併購）
- **Compare 並排比較**（最多 4 家公司）
- **★ Favorites 收藏**（localStorage 持久化）
- **URL 可分享篩選狀態**（`?industry=web3&country=sg`）
- **CSV 匯出**、**鍵盤快捷鍵**（按 `?` 查看）
- **PWA 離線可用**（service worker 預快取）
- **完整 SEO**（OG image、Twitter card、JSON-LD schema.org）
- **19 個產業類別**：Web3 / AI / FinTech / E-commerce / SaaS / Mobility / Logistics / Gaming /
  Travel / Social / HealthTech / EdTech / PropTech / AgriTech / ClimateTech / Food / AdTech /
  CyberSecurity / Hardware
- **13 個地區**：Taiwan / Singapore / Indonesia / Vietnam / Hong Kong / Malaysia / Philippines /
  Korea / Japan / United States / Canada / Web3 (cross-chain) / Global
- **26 個 AW 屆數**（AW#1 ~ AW#31，含 AW#32 / AW#33 持續更新中）
- **7 種狀態**：Hectocorn ($100B+) / Decacorn ($10B+) / Unicorn ($1B+) / IPO / Acquired / Active /
  Shutdown
- 每家公司皆有 **中英雙語** 概述與重點觀察。

代表性命中案例：

| 類別 | 代表案例 |
| --- | --- |
| 🦣 Hectocorn | Uber |
| 🐉 Decacorn | Lalamove (HKEX 2025)、Animoca Brands、Dapper Labs / Flow |
| 🦄 Unicorn | Carousell、ShopBack (AW#13)、Tiki、Dcard、17LIVE |
| 📈 IPO | 91APP、17LIVE、Lalamove、Kuobrothers (松果)、GameSparcs (Pcone) |
| 💱 Web3 旗艦 | Pendle Finance (AW#20)、XREX (AW#17)、Blocto (AW#19)、StraitsX (AW#21)、Sanctum |
| 🤖 AI / 製造 | Nitra、Innowave Tech (AW#32)、Bering Lab (AW#31)、Omo Protocol |

---

## 本地執行 (Run locally)

純靜態網站，無 build 步驟、無 dependencies。

```bash
git clone git@github.com:tingwei161803/appwork-analysis.git
cd appwork-analysis

# 建議用 uv 跑本地 server（這份專案的偏好）
uv run --no-project python -m http.server 8765
# 接著開 http://localhost:8765/
```

或者直接雙擊 [`index.html`](./index.html) 用瀏覽器開啟，所有資源都是相對路徑。

---

## Repository layout

```
.
├── README.md                  # 本檔
├── index.html                 # 🌐 單頁入口（中英共用，i18n 動態切換）
├── assets/
│   ├── styles.css             # Material Design 3 風格 stylesheet
│   └── app.js                 # 互動邏輯：i18n、3 軸 + AW 屆數 filter、搜尋、Dialog、Chapters、Charts
└── data/
    ├── portfolio.js           # 249 家公司 + 產業 / 地區 / 狀態 / 屆數字典
    └── chapters.js            # 10 章節深度分析（中英雙語）
```

純 HTML + CSS + Vanilla JS — 沒有打包、沒有框架，丟到任何靜態空間（GitHub Pages / Vercel /
Netlify / Cloudflare Pages / S3）都會直接 work。

---

## English Summary

This repo is an interactive bilingual atlas of every company AppWorks has invested in across
Taiwan and Greater Southeast Asia (GSEA). It is a single static page (`index.html`) with three
filter axes (industry × country × status), full-text search and a Material Design 3 detail
dialog, mirroring the structure of
[`real-world-genai-use-cases`](https://github.com/tingwei161803/real-world-genai-use-cases).

- **Live demo:** <https://appwork-analysis.peteraim.com/>
- **342 portfolio companies** drawn from AppWorks Funds I–IV and Accelerator batches AW#1–AW#33.
- **10-chapter analytical narrative** with Claude's observations.
- **Demo Day Chronicle** covering every batch AW#1–AW#33.
- **22 "Why We Invested"** digests with thesis + signature quote.
- **5 SEA VC competitor profiles** benchmarked against AppWorks.
- **25 Jamie Lin quotes** from mrjamie.cc, AppWorks blog, and media interviews.
- **Top 30 deep-dive** with founders + funding rounds inside each card.
- **4-axis filter** (Industry × Country × Status × AW batch) plus full-text search.
- **URL-shareable filter state**, CSV export, and keyboard shortcuts (press `?`).
- **Source data:** [AppWorks Investments](https://appworks.tw/investments/) +
  [AppWorks Blog](https://appworks.tw/blog/) + Crunchbase + public news. Unofficial — verify
  before quoting.

### Run locally

```bash
git clone git@github.com:tingwei161803/appwork-analysis.git
cd appwork-analysis
uv run --no-project python -m http.server 8765
# open http://localhost:8765/
```

---

## License & disclaimer

- This repo is an **unofficial** study companion. It is not endorsed by AppWorks.
- Verify every number, batch and status against [AppWorks official sources](https://appworks.tw/)
  before citing publicly.
- Code (HTML / CSS / JS) is released under the MIT License. Underlying portfolio facts belong to
  the original sources linked from each entry.
