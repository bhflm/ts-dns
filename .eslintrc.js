module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": 12,
        "project": "./tsconfig.json"
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    env: {
        jest: true
    },
    rules: {
        'func-names': 0,
        '@typescript-eslint/no-namespace': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    env: {
        node: true,
        commonjs: true,
        jest: true,
    },
    settings: {
        'indent': ['error', 2],
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
  };
  