module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/components/*.{js,jsx,ts,tsx}",
    "src/hooks/*.{js,jsx,ts,tsx}",
    "src/utils/*.{js,jsx,ts,tsx}",
    "!src/assets/*.{js,jsx,ts,tsx,png,jpg}",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 50,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
