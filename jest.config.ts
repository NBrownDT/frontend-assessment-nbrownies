import nextJest from "next/jest.js";
import type { Config } from "jest";

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
  },
  modulePathIgnorePatterns: [
    "node_modules",
    "jest-test-results.json",
    ".history",
  ],
};

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
