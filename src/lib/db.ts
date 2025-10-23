import { Pool, PoolConfig } from 'pg'

// 統一的資料庫連線設定
// 針對 Serverless 環境（Vercel）和 Supabase Pooler 優化
export const poolConfig: PoolConfig = {
  connectionString: process.env.DATABASE_URI,
  // Serverless 環境建議使用單一連線
  max: 1,
  // 較短的閒置時間，避免佔用連線
  idleTimeoutMillis: 20000,
  // 允許在閒置時關閉，適合 Serverless
  allowExitOnIdle: true,
}

// 統一的資料庫連線 pool（用於直接使用 pg 的情況）
let pool: Pool | null = null

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool(poolConfig)

    // 監聽連線錯誤
    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err)
    })
  }

  return pool
}

// 關閉 pool（通常在應用程式關閉時使用）
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end()
    pool = null
  }
}
