import { Pool, PoolConfig } from 'pg'

// 統一的資料庫連線設定
// 根據環境自動調整連線池大小
const isProduction = process.env.NODE_ENV === 'production'
const isVercel = process.env.VERCEL === '1'

export const poolConfig: PoolConfig = {
  connectionString: process.env.DATABASE_URI,
  // 開發環境使用較多連線以提升速度，生產環境（Vercel）使用較少連線
  max: isVercel ? 1 : 10,
  // 較短的閒置時間，避免佔用連線
  idleTimeoutMillis: isVercel ? 20000 : 30000,
  // Serverless 環境允許在閒置時關閉
  allowExitOnIdle: isVercel,
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
