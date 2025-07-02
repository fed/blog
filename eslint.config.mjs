import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import _import from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    globalIgnores(['.cache/**/*', '__mocks__/**/*', '**/graphql-types.ts', '**/jest-preprocess.js', '**/loadershim.js']),
    {
        extends: fixupConfigRules(
            compat.extends(
                'prettier',
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended',
                'plugin:jsx-a11y/recommended',
                'plugin:import/typescript',
            ),
        ),
        plugins: {
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            react: fixupPluginRules(react),
            import: fixupPluginRules(_import),
            'jsx-a11y': fixupPluginRules(jsxA11y),
            prettier,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                graphql: false,
            },
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    experimentalObjectRestSpread: true,
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'prettier/prettier': 'warn',
            'no-console': [
                'error',
                {
                    allow: ['warn', 'error'],
                },
            ],
            'no-else-return': 'warn',
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                },
            ],
            'no-param-reassign': 'warn',
            'no-unused-expressions': 'warn',
            'object-curly-spacing': ['error', 'always'],
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/extensions': 'off',
            'import/prefer-default-export': 'off',
            'import/order': [
                'error',
                {
                    'newlines-between': 'always-and-inside-groups',

                    alphabetize: {
                        order: 'asc',
                    },

                    groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling']],
                },
            ],
            'react/prop-types': 'off',
            'react/jsx-filename-extension': 'off',
            'react/jsx-props-no-spreading': 'off',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'error',
            'react/function-component-definition': 'off',
            'react/require-default-props': 'off',
        },
    },
    {
        files: ['**/gatsby-node.js', '**/gatsby-config.js', '**/eslint.config.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-console': 'off',
            '@typescript-eslint/no-var-requires': 'off',
        },
    },
]);
