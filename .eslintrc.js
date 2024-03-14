module.exports = {
    root: true,
    extends: ['eslint:recommended', 'airbnb-base', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        node: true,
        browser: false,
        es6: true,
    },
    rules: {
        'no-invalid-this': 0,
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120,
                trailingComma: 'all',
            },
        ],
    },
};
