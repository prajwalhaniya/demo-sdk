// Sync object
const config = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "mjs", "cjs", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {},
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/services/proxy/index.ts'],
  modulePathIgnorePatterns: ['<rootDir>/workers/'],
//   extensionsToTreatAsEsm: ['.ts'],
};

export default config;