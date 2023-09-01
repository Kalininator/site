/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['prettier', 'jsx-a11y'],
  extends: [
    'plugin:astro/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/strict'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
  ]
}
