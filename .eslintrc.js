module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],

  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
