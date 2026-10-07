# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            // Other configs...

            // Remove tseslint.configs.recommended and replace with this
            tseslint.configs.recommendedTypeChecked,
            // Alternatively, use this for stricter rules
            tseslint.configs.strictTypeChecked,
            // Optionally, add this for stylistic rules
            tseslint.configs.stylisticTypeChecked,

            // Other configs...
        ],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
])
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            // Other configs...
            // Enable lint rules for React
            reactX.configs['recommended-typescript'],
            // Enable lint rules for React DOM
            reactDom.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
])
```

## Styling

Token, mixin, dan function di `src/assets/theme/base` otomatis tersedia di semua file `.scss` (tanpa perlu `@use`) melalui injeksi otomatis di `vite.config.ts` (`additionalData`). Cukup tulis `@include container`, `$space-4`, `@include up(md)`, dan sejenisnya langsung di module.

**Aturan:**

- Folder `src/assets/theme/base/` **hanya** boleh berisi variable, mixin, dan function. Dilarang menulis selector atau CSS output di folder ini (akan terduplikasi di setiap module).
- Utility class global (mis. `.fs-*`) ada di `font-utilities.scss` dan di-import satu kali dari `main.tsx`.
- Jangan menulis `@import`; gunakan `@use` / `@forward`.

**Cara menambah token atau mixin baru:**

1. Buat partial baru di `src/assets/theme/base/` (diawali `_`).
2. Daftarkan di `_index.scss` dengan `@forward "nama-partial";`.
3. Otomatis tersedia di semua module tanpa `@use` tambahan.

**Konvensi:**

- Mobile-first dengan `@include up($key)` / `@include down($key)` dari `_breakpoints.scss`. Key yang tersedia: `sm`, `md`, `lg`, `xl`.
- Selalu pakai token `$space-*` dan `$radius-*`; sumber nilai adalah Figma.
- Hindari hard-coded px untuk spacing/radius; gunakan literal hanya bila tidak ada token yang cocok (mis. `padding: 15px 30px` pada ukuran tombol spesifik).
