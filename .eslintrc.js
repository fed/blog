module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['react', 'import'],
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
        'react/prop-types': 'off',
        'import/newline-after-import': 1,
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
    },
};
