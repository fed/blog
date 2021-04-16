module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true,
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'simple-import-sort',
        'import',
        'better-styled-components',
    ],
    globals: {
        graphql: false,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
    extends: [
        'airbnb',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript',
    ],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-else-return': 'warn',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-param-reassign': 'warn',
        'no-unused-expressions': 'warn',
        'object-curly-spacing': ['error', 'always'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
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
        'better-styled-components/sort-declarations-alphabetically': 'error',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
    },
    overrides: [
        {
            files: ['gatsby-node.js', 'gatsby-config.js', '.eslintrc.js'],
            env: {
                node: true,
            },
            rules: {
                'no-console': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
