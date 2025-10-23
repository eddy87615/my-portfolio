# 資料庫連線池使用說明

## 概述

所有資料庫連線已統整到 `src/lib/db.ts` 模組中，提供統一的連線池管理。

## 使用方式

### 1. 在 Payload CMS 中使用（已設定）

`payload.config.ts` 已經配置使用統一的 pool 設定：

```typescript
import { poolConfig } from './lib/db'

export default buildConfig({
  db: postgresAdapter({
    pool: poolConfig,
  }),
  // ...
})
```

### 2. 在其他地方直接使用 Pool

如果你需要在 API routes 或其他地方直接執行 SQL 查詢：

```typescript
import { getPool } from '@/lib/db'

// 在 API route 或 server component 中
export async function GET() {
  const pool = getPool()

  try {
    const result = await pool.query('SELECT * FROM users')
    return Response.json(result.rows)
  } catch (error) {
    console.error('Database error:', error)
    return Response.json({ error: 'Database error' }, { status: 500 })
  }
}
```

### 3. 使用 client 進行交易

```typescript
import { getPool } from '@/lib/db'

export async function performTransaction() {
  const pool = getPool()
  const client = await pool.connect()

  try {
    await client.query('BEGIN')
    await client.query('INSERT INTO table1 VALUES ($1)', [value1])
    await client.query('INSERT INTO table2 VALUES ($1)', [value2])
    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}
```

## 連線池設定

目前的連線池設定位於 `src/lib/db.ts:5-13`，針對 Serverless 環境優化：

- `max: 1` - 每個實例只使用一個連線（適合 Vercel Serverless）
- `idleTimeoutMillis: 20000` - 20 秒閒置後釋放連線
- `allowExitOnIdle: true` - 允許在沒有活動連線時退出

### 為什麼這樣設定？

1. **Serverless 環境特性**
   - Vercel 的每個請求可能在不同的函數實例中執行
   - 每個實例建立自己的連線池
   - 使用 `max: 1` 避免耗盡 Supabase 的連線限制

2. **Supabase Pooler 限制**
   - 免費方案有並發連線數限制
   - 使用較短的 `idleTimeoutMillis` 確保連線及時釋放

3. **自動清理**
   - `allowExitOnIdle: true` 讓閒置的 pool 自動關閉
   - 避免佔用不必要的資源

## 環境變數

確保 `.env` 檔案中有正確的資料庫連線字串：

```
DATABASE_URI=postgresql://user:password@host:port/database
```

## 注意事項

1. 不要手動關閉 pool，它會自動管理連線
2. 使用 `client.release()` 來釋放從 pool 取得的 client
3. 所有資料庫錯誤都會被記錄到 console
