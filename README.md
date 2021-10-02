# Digital Taco ESLint Config

Generalized ESLint configuration files.

Required packages:
`npm i eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react-hooks eslint-plugin-react prettier`

# How to Use

First, in your project:

```npm i @digital-taco/eslint-config```

Second:

```touch .eslintrc.js```

Third, put this in your .eslintrc.js:

```
module.exports = {
  extends: ['@digital-taco/eslint-config/react', '@digital-taco/eslint-config/typescript'],
}
```

# Developing this package

To release a new version, you will need to run `npm publish`. It has not been automated for this package.