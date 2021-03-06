module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: ['node_modules', 'build', 'public', 'children'],
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': ['off']
  }
}
