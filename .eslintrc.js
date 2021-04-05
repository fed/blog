module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['react', 'simple-import-sort', 'import', 'better-styled-components'],
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
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-else-return': 1,
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-param-reassign': 1,
        'no-shadow': 1,
        'no-unused-expressions': 1,
        'object-curly-spacing': ['error', 'always'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
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
        'better-styled-components/sort-declarations-alphabetically': 2,
    },
    overrides: [
        {
            files: ['gatsby-node.js', 'gatsby-config.js', '.eslintrc.js'],
            env: {
                node: true,
            },
            rules: {
                'no-console': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
