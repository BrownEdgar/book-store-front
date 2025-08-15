export type EnvConfig = {
  VITE_DB_URL: string
}

export const CONFIG: EnvConfig = {
  VITE_DB_URL: import.meta.env.VITE_DB_URL
}