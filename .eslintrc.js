module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss"],

  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
