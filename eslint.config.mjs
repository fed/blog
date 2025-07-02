import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
    // Global ignores
    {
        ignores: ['.cache/**/*', '__mocks__/**/*', '**/graphql-types.ts', '**/jest-preprocess.js', '**/loadershim.js'],
    },

    // Base config for all files
    js.configs.recommended,

    // TypeScript and React files
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        plugins: {
            '@typescript-eslint': tseslint,
            'jsx-a11y': jsxA11y,
            react: react,
            import: importPlugin,
            prettier: prettier,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.jest,
                graphql: true,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
        rules: {
            // General
            'no-unused-vars': 'off',

            // Import rules
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/extensions': 'off',
            'import/prefer-default-export': 'off',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling']],
                    alphabetize: { order: 'asc' },
                    'newlines-between': 'always-and-inside-groups',
                },
            ],
        },
    },

    // Node.js config files
    {
        files: ['**/gatsby-node.js', '**/gatsby-config.js', '**/eslint.config.mjs'],
        languageOptions: {
            globals: globals.node,
        },
    },
];
