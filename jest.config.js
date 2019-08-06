module.exports = {
  automock: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/*.test.{ts,tsx,js}"
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-jest.ts'
  ]
};
