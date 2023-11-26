module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns : [
    "vue-jest"
  ]
}
