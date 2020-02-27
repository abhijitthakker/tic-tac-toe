module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['app', './src']
          ],
          extensions: ['.ts', '.js', '.jsx', '.json']
        }
      }
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-cycle': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prefer-stateless-function': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-fragments': 'off',
      'react/jsx-one-expression-per-line': 'off'
    },
    'globals': {
      "fetch": false
    }
}