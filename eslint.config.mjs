// eslint.config.mjs

import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import'; // Импортируем плагин import
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,ts}'],
    languageOptions: {
      parser,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: pluginImport, // Добавляем плагин import
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginImport.configs.recommended.rules, // Добавляем рекомендованные правила import
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          mjs: 'never',
          ts: 'never',
        },
      ],
      'import/no-unresolved': 'off', // Отключаем проверку на неразрешённые импорты
    },
  },
];