module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '/^@\/(.*)$/': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!vue-router|@babel|vuetify)'],
  setupFiles: ["<rootDir>/tests/unit/index.js"],
}
