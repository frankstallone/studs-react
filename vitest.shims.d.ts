/// <reference types="@vitest/browser/providers/playwright" />
/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
