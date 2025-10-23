import { Pool, PoolConfig } from 'pg'

// 統一的資料庫連線設定
export const poolConfig: PoolConfig = {
  connectionString: process.env.DATABASE_URI,
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
