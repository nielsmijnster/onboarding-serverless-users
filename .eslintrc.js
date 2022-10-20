
/* eslint-disable import/no-commonjs */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "jest",
  ],
  extends: [
    "plugin:@shopify/typescript-type-checking",
    "plugin:@shopify/esnext",
    "plugin:@shopify/node",
  ],
  settings: {
        // necessary to make import rules to find files
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
      // needed by some typescript rules
    project: ["./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    "promise/prefer-await-to-then": "error",
    "prefer-destructuring": ["error", { object: true, array: false }],
    "promise/prefer-await-to-callbacks": "error",
    "import/no-commonjs": "error",
    "import/no-amd": "error",
    "import/max-dependencies": ["error", {
      max: 20,
      ignoreTypeImports: false,
    }],
    "import/no-unassigned-import": "error",
    "import/group-exports": "error",
    camelcase: ["error", {
      properties: "always",
      ignoreDestructuring: true,
      ignoreImports: true,
      ignoreGlobals: true,
    },
    ],
    "no-unused-expressions": "error",
    "valid-typeof": "error",
    "new-cap": "error",
    "no-invalid-this": "error",
    complexity: ["error", { max: 2 }],
    "no-else-return": "error",
    "max-depth": ["error", 4],
    "max-len": ["error", { code: 120, comments: 100, ignoreTemplateLiterals: true, ignoreStrings: true, ignoreTrailingComments: true, ignoreUrls: true }],
    "no-bitwise": "error",
    // "no-plusplus": "error",
    "no-debugger": "error",
    "@shopify/jest/no-snapshots": "error",
    "max-nested-callbacks": ["error", { max: 5 }],
    "no-undefined": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/promise-function-async": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "require-await": "off",
    "@typescript-eslint/require-await": "off",
    "no-undef": "off",
    "object-curly-spacing": ["error", "always", { objectsInObjects: false }],
    "@babel/object-curly-spacing": "off",
    "line-comment-position": "off",
  },

};
