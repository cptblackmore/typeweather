import js from "@eslint/js";
import css from "@eslint/css";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ...css.configs.recommended,
    files: ["**/*.css"],
    language: "css/css",
  },
  {
    ...js.configs.recommended,
    files: ["**/*.js", "**/*.mjs"],
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      "import/resolver": {
        webpack: {
          config: "./webpack.config.eslint.cjs",
        },
      },
    },
    rules: {
      "import/no-unresolved": "error",
      "import/order": "warn",
      "no-empty": "warn",
      "no-useless-catch": "warn",
      "prettier/prettier": "warn",
    },
  },
  {
    files: ["eslint.config.js"],
    rules: {
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
];
