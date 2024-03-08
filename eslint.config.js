import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";

import reactHooks from "eslint-plugin-react-hooks";

// TODO - Make this a TypeScript file when eslint supports it. See:
// https://eslint.org/docs/latest/use/configure/configuration-files-new

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const config = [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
];

export default config;
