module.exports = {
  "extends": ["./index"],
  "plugins": [
      "react",
      "babel",
      "react-hooks"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    'jsx-a11y/label-has-for': 0, // this is deprecated in future versions so disable now
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either', // fs-styles does not support nesting currently
      },
    ],
    'react/jsx-filename-extension': 'never',
    'react/jsx-wrap-multilines': 2,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 'warn',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
  }
}