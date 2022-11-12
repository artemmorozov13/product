module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    "plugin:react-hooks/recommended"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'react',
    "react-hooks"
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    '@typescript-eslint/strict-boolean-expressions': [0],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/consistent-type-assertions": [0]
  }
}
