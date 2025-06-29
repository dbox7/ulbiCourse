import path from "path";

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    testMatch: [
        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    moduleNameMapper: {
        '/src/(.*)': '<rootDir>/src/$1',
        '\\.s?css$': 'identity-obj-proxy',
        '.svg': path.resolve(__dirname, 'JestEmptyComponent.tsx')
      },
    rootDir: '../../',
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
};
