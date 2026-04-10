/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
var defineConfig = require("eslint-define-config").defineConfig;

module.exports = defineConfig({
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "jsx-a11y/heading-has-content": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/prop-types": "off",
  },
});
