module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018
  },
  "rules": {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        semi: false,
      },
    ],
    'arrow-parens': [2],
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': 1,
    'prefer-destructuring': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.js', '**/*.test.js', '**/demo/**'] },
    ],
    'semi': ['error', 'never'],
  }
}