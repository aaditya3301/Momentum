// Global type declarations for the application

declare global {
  interface Window {
    ethereum?: {
      request: (params: { method: string; params?: unknown[] }) => Promise<unknown>
    }
  }
}

export {};