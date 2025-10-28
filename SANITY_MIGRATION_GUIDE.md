# ✅ Sanity CMS 遷移完成指南

## 🎉 已完成的工作

你的專案已經成功從 Payload CMS 遷移到 Sanity！以下是已完成的項目：

### ✅ 已安裝和設定
- Sanity packages (`sanity`, `@sanity/client`, `@sanity/image-url`, `next-sanity`)
- Sanity Studio 配置檔案 (`sanity.config.ts`)
- 環境變數設定 (`.env` 已包含 Sanity Project ID)

### ✅ 已創建的 Schemas
所有 Payload collections 都已轉換為 Sanity schemas：
- `post` - 文章（包含標題、內容、封面圖、標籤）
- `tag` - 標籤（支援中英日三語）
- `skill` - 技能（包含熟練度和排序）
- `aboutMe` - 關於我（支援中英日三語）
- `personalInfo` - 個人資訊（支援中英日三語）

### ✅ 已更新的前端頁面
- ✅ `/posts` - 文章列表頁（包含標籤篩選和分頁）
- ✅ `/posts/[slug]` - 文章詳情頁
- ✅ `/` - 首頁（個人資訊和技能展示）

### ✅ 已創建的工具
- Sanity client (`src/lib/sanity.client.ts`)
- Sanity 查詢函數 (`src/lib/sanity.queries.ts`)
- PortableText 渲染組件 (`src/components/PortableText.tsx`)
- Zustand store（可選使用）

---

## 🚀 接下來你需要做的事

### 1️⃣ 啟動 Sanity Studio（管理後台）

```bash
npm run studio
```

這會在 `http://localhost:3333` 開啟 Sanity Studio

### 2️⃣ 在 Sanity Studio 中建立內容

登入後，你需要手動輸入以下資料：

#### 必須建立的內容：

**Personal Info（個人資訊）** - 只能建立一筆
- 中英日文姓名
- 生日
- 國籍
- Email
- 所在地
- 關於我的內容（中英日）

**Skills（技能）** - 可建立多筆
- 技能名稱
- 描述（中英日）
- 熟練度（0-100）
- 排序

**Tags（標籤）** - 可建立多筆
- 標籤名稱
- Slug（URL 代碼）
- 中英日文名稱

**Posts（文章）** - 可建立多筆
- 標題
- Slug
- 封面圖片
- 內容（富文本編輯器）
- 標籤（選擇已建立的標籤）

**About Me（關於我）** - 只能建立一筆
- 中英日文內容（富文本編輯器）

---

## 📝 重要提示

### 圖片上傳
- ✅ Sanity 自帶圖片 CDN，不需要額外設定 S3
- ✅ 直接在 Studio 中拖拽上傳圖片即可
- ✅ 支援即時圖片優化和裁切

### 內容編輯
- Sanity 的富文本編輯器使用 Portable Text 格式
- 支援插入圖片、連結等
- 比 Payload 的 Lexical 更簡單直觀

---

## 🛠️ 常用指令

```bash
# 啟動 Next.js 開發伺服器
npm run dev

# 啟動 Sanity Studio（CMS 管理後台）
npm run studio

# 同時啟動兩者（開兩個終端）
# Terminal 1:
npm run dev

# Terminal 2:
npm run studio
```

---

## 🗂️ 專案結構

```
my-portfolio/
├── sanity/                    # Sanity 相關檔案
│   ├── schemas/              # 資料 schemas
│   │   ├── post.ts
│   │   ├── tag.ts
│   │   ├── skill.ts
│   │   ├── aboutMe.ts
│   │   ├── personalInfo.ts
│   │   └── index.ts
│   └── env.ts                # Sanity 環境變數
├── sanity.config.ts          # Sanity Studio 配置
├── src/
│   ├── lib/
│   │   ├── sanity.client.ts  # Sanity client
│   │   └── sanity.queries.ts # 查詢函數
│   ├── components/
│   │   └── PortableText.tsx  # 富文本渲染
│   └── app/(frontend)/
│       ├── page.tsx          # 首頁
│       ├── posts/
│       │   ├── page.tsx      # 文章列表
│       │   └── [slug]/
│       │       └── page.tsx  # 文章詳情
│       └── ...
└── .env                      # 環境變數（已設定）
```

---

## 🎯 下一步

1. 執行 `npm run studio` 開啟管理後台
2. 在 Studio 中建立至少一筆 Personal Info 和幾筆 Posts
3. 執行 `npm run dev` 啟動網站
4. 訪問 `http://localhost:3000` 查看成果

---

## 📚 Sanity 文檔

- [Sanity 官方文檔](https://www.sanity.io/docs)
- [Portable Text 說明](https://www.sanity.io/docs/presenting-block-text)
- [GROQ 查詢語言](https://www.sanity.io/docs/groq)

---

## ⚠️ 注意事項

- ✅ Payload CMS 相關代碼已完全清理
- 圖片都需要重新上傳到 Sanity
- 建議使用 Sanity 的圖片 CDN 來優化圖片載入

---

**恭喜！你的 CMS 已經成功遷移到 Sanity！** 🎉
