module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".ts", ".tsx", ".jsx"] },
    ],
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "prettier/prettier": "error",
    // note you must disable the base rule as it can report incorrect errors
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-underscore-dangle": 0,
    "react/require-default-props": 0,
    camelcase: 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.spec.ts",
          "playwright/*",
          "e2e/**",
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["~"],
      },
    },
  },
};
