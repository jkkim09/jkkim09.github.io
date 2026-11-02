import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import hooks from 'eslint-plugin-react-hooks';
import refresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['build/**', 'static/**', 'output/**', '.playwright*/**']),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: { globals: globals.browser },
    extends: [hooks.configs.flat.recommended, refresh.configs.vite],
  },
  {
    files: ['*.ts', 'scripts/**/*.ts'],
    languageOptions: { globals: globals.node },
  },
  prettier,
]);
