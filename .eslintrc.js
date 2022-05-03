module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint'
    ],
    overrides: [
        {
          files: ['*.ts', '*.tsx'],
          extends: [
            'plugin:@typescript-eslint/recommended',
          ],
          parserOptions: {
            project: ['./tsconfig.json'],
          },
        },
      ],
  };