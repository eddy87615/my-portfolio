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

目前的連線池設定位於 `src/lib/db.ts:4-6`：

- 使用最簡單的設定（僅 `connectionString`）
- 適用於 Supabase pooler 連線
- 讓 PostgreSQL 驅動使用預設的連線池參數

這個簡單設定已經過測試，可以正常連線到 Supabase。

## 環境變數

確保 `.env` 檔案中有正確的資料庫連線字串：

```
DATABASE_URI=postgresql://user:password@host:port/database
```

## 注意事項

1. 不要手動關閉 pool，它會自動管理連線
2. 使用 `client.release()` 來釋放從 pool 取得的 client
3. 所有資料庫錯誤都會被記錄到 console
