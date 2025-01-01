/** @type {import('ts-jest').JestConfigWithTsJest} **/
// import "@testing-library/jest-dom/extend-expect";
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {}],
    // "^.+\\.(ts|tsx)$": "babel-jest",
    "^.+\\.(css|scss)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["node_modules", "\\.scss$"],
};
