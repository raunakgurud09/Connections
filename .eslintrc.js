module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    'import/no-named-as-default': 'off',

    'react/react-in-jsx-scope': 'off',

    'jsx-a11y/anchor-is-valid': 'off',

    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  globals: {
    React: true,
    JSX: true,
  },
};
