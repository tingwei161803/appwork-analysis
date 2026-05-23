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
| 🌐 互動圖鑑 | <https://tingwei161803.github.io/appwork-analysis/> |

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

- **249 家公司**（涵蓋 AppWorks Fund I–IV 與 Accelerator AW#1–AW#33 alumni 的主要案例）
- **10 章節深度分析**（公司 / 基金 / 投資組合 / 加速器 / 論點 / 思想領導 / 團隊 / 生態系 / 市場定位 / 演進史，每章含 Claude 觀察）
- **3 軸 + AW 屆數**篩選 + 全文搜尋；首頁附產業/地區/狀態三張圖表
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

- **Live demo:** <https://tingwei161803.github.io/appwork-analysis/>
- **249 portfolio companies** drawn from AppWorks Funds I–IV and Accelerator batches AW#1–AW#33.
- **10-chapter analytical narrative** (Company / Funds / Portfolio / Accelerator / Thesis / Thought Leadership / Team / Ecosystem / Positioning / Evolution) with Claude's observations.
- **19 industries × 13 countries × 26 AW batches × 7 statuses.** Every entry has a bilingual summary.
- **Three Chart.js visualizations** on the front page: industry donut, country donut, status bar.
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
