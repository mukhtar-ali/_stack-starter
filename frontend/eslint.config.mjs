import nextPlugin from "@next/eslint-plugin-next";
import storybookPlugin from "eslint-plugin-storybook";

export default [
  {
    ignores: ["**/.next/**", "**/node_modules/**", "**/storybook-static/**"]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  },
  {
    files: [".storybook/**/*.{js,jsx,ts,tsx}", "**/*.stories.{js,jsx,ts,tsx}", "**/*.stories.mdx"],
    plugins: {
      storybook: storybookPlugin
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules
    }
  }
];
